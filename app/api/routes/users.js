//
// Routing for users operations
// --------------------------------------------------------------------------------
var userService             = require('../model/services/users');
var authService             = require('../model/services/auth');
var usersRoutes             = {};

//
// Get a user info by id
// ---------------------------------------------------------------------------------
    usersRoutes.getUser         = {
                                    method: 'GET',      // Methods Type
                                    path: '/api/v1/user/{id}',  // Url
                                    handler: function (request, reply) { //Action

                                        // Response JSON object
                                        var isauth = authService.isauth();

                                        if(isauth.code === 1) {
                                            userService.getUser(request.params.id).then(function (response) {
                                                if (response.content == null) {
                                                    reply({
                                                        statusCode: 500,
                                                        message: 'User id: '+request.params.id+' was not found',
                                                        data: {}
                                                    }).code(500);
                                                } else {
                                                    reply({
                                                        statusCode: 200,
                                                        message: response.message,
                                                        data: response.content
                                                    }).code(200);
                                                }
                                            }, function (err) {
                                                reply({
                                                    statusCode: 500,
                                                    message: err.message,
                                                    data: {}
                                                }).code(500);
                                            });
                                        } else {
                                            reply({
                                                statusCode: 401,
                                                message: 'Unauthorized',
                                                data: {}
                                            }).code(401);
                                        }
                                    }
                                };

//
// POST a user
// ---------------------------------------------------------------------------------
    usersRoutes.save            = {
                                    method: 'POST',
                                    path: '/api/v1/user',
                                    handler: function (request, reply) {
                                        var isauth = authService.isauth();

                                        if (isauth.code === 1) {
                                            userService.saveUser(request.payload).then(function (response) {
                                                reply({
                                                    statusCode: 201,
                                                    message: response.message,
                                                    data: response.content
                                                }).code(201);
                                            }, function (error) {
                                                reply({
                                                    statusCode: 500,
                                                    message: error.message,
                                                    data: error.content
                                                }).code(500);
                                            });
                                        } else {
                                            reply({
                                                statusCode: 401,
                                                message: 'Unauthorized',
                                                data: {}
                                            }).code(401);
                                        }
                                    }
                                };

//
// Edit a user
// ---------------------------------------------------------------------------------
    usersRoutes.edit            = {
                                    method: 'PUT',
                                    path: '/api/v1/user/{id}',
                                    handler: function (request, reply) {
                                        var isauth          = authService.isauth();

                                        if (isauth.code === 1) {
                                            userService.updateUser(request.params.id, request.payload).then(function (response) {
                                                reply({
                                                    statusCode: 201,
                                                    message: response.message,
                                                    data: response.content
                                                }).code(201);
                                            }, function (error) {
                                                reply({
                                                    statusCode: 500,
                                                    message: error.message,
                                                    data: error.content
                                                }).code(500);
                                            });
                                        } else {
                                            reply({
                                                statusCode: 401,
                                                message: 'Unauthorized',
                                                data: {}
                                            }).code(401);
                                        }
                                    }
                                };

//
// Delete a user
// ---------------------------------------------------------------------------------
    usersRoutes.delete          = {
                                    method: 'DELETE',
                                    path: '/api/v1/user/{id}',
                                    handler: function (request, reply) {
                                        var isauth      = authService.isauth();

                                        if (isauth.code === 1) {
                                            userService.deleteUser(request.params.id).then(function (response) {
                                                reply({
                                                    statusCode: 200,
                                                    message: response.message,
                                                    data: response.content
                                                }).code(200);
                                            }, function (error) {
                                                reply({
                                                    statusCode: 500,
                                                    message: error.message,
                                                    data: error.content
                                                }).code(500);
                                            });
                                        } else {
                                            reply({
                                                statusCode: 401,
                                                message: 'Unauthorized',
                                                data: {}
                                            }).code(401);
                                        }
                                    }
                                };


module.exports                  = usersRoutes;
