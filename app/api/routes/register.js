//
// Routing for users operations
// --------------------------------------------------------------------------------
var userService             = require('../model/services/users');
var authService             = require('../model/services/auth');
var registerService         = require('../model/services/register');
var registerRoutes          = {};

//
// Register a new user
// ---------------------------------------------------------------------------------
    registerRoutes.newUser      = {
                                    method: 'POST',      // Methods Type
                                    path: '/api/v1/registration',  // Url
                                    handler: function (request, reply) { //Action

                                        registerService.new(request.payload).then(function (registerResp) {
                                            var userInfo = {};

                                            userInfo                            = request.payload;
                                            userInfo.code                       = registerResp.content.uid;
                                            userInfo.role.accesses.users        = false;

                                            if (registerResp.code === 1) {
                                                authService.loginRegular(userInfo).then(function (loginResp) {
                                                    if (loginResp.code === 1) {
                                                        reply({
                                                            statusCode: 201,
                                                            message: loginResp.message,
                                                            data: loginResp.content
                                                        }).code(201);
                                                    } else {
                                                        reply({
                                                            statusCode: 500,
                                                            message: loginResp.message,
                                                            data: loginResp.content
                                                        }).code(500);
                                                    }
                                                }, function (loginErr) {
                                                    reply({
                                                        statusCode: 500,
                                                        message: loginErr.message,
                                                        data: loginErr.content
                                                    }).code(500);
                                                });
                                            } else {
                                                reply({
                                                    statusCode: 500,
                                                    message: registerResp.message,
                                                    data: registerResp.content
                                                }).code(500);
                                            }
                                        }, function (registerErr) {
                                            reply({
                                                statusCode: 500,
                                                message: registerErr.message,
                                                data: registerErr.content
                                            }).code(500);
                                        });
                                    }
                                };


//
// Delete a user from the app
// ---------------------------------------------------------------------------------
    registerRoutes.unsubs       = {
                                    method: 'POST',       // Methods Type
                                    path: '/api/v1/unsubscribe', // Url
                                    handler: function (request, reply) { //Action
                                        registerService.unsubs(request.payload).then(function (unsubsResp) {
                                            reply({
                                                statusCode: 201,
                                                message: unsubsResp.message,
                                                data: unsubsResp.content
                                            }).code(201);
                                        }, function (unsubsErr) {
                                            reply({
                                                statusCode: 500,
                                                message: unsubsErr.message,
                                                data: unsubsErr.content
                                            }).code(500);
                                        });
                                    }
                                };

//
// Reset user password
// ---------------------------------------------------------------------------------
    registerRoutes.resetpassword = {
                                    method: 'POST',       // Methods Type
                                    path: '/api/v1/resetpassword', // Url
                                    handler: function (request, reply) { //Action

                                        registerService.resetpassword(request.payload).then(function (rstpdwResp) {
                                            reply({
                                                statusCode: 201,
                                                message: rstpdwResp.message,
                                                data: rstpdwResp.content
                                            }).code(201);
                                        }, function (rstpwdErr) {
                                            reply({
                                                statusCode: 500,
                                                message: rstpwdErr.message,
                                                data: rstpwdErr.content
                                            }).code(500);
                                        });
                                    }
                                };

//
// Change user password
// ---------------------------------------------------------------------------------
    registerRoutes.changepassword = {
                                    method: 'POST',       // Methods Type
                                    path: '/api/v1/changepassword', // Url
                                    handler: function (request, reply) { //Action
                                        registerService.changepassword(request.payload).then(function (chgpwdResp) {
                                            reply({
                                                statusCode: 201,
                                                message: chgpwdResp.message,
                                                data: chgpwdResp.content
                                            }).code(201);
                                        }, function (chgpwdErr) {
                                            reply({
                                                statusCode: 500,
                                                message: chgpwdErr.message,
                                                data: chgpwdErr.content
                                            }).code(500);
                                        });
                                    }
                                };

module.exports                  = registerRoutes;
