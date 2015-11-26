//
// Routing for authorization operations
// --------------------------------------------------------------------------------
var authService             = require('../model/services/auth');
var authRoutes              = {};

//
// Login user using email and password
// ---------------------------------------------------------------------------------
    authRoutes.loginRegular = {
                                    method: 'POST',      // Methods Type
                                    path: '/api/v1/auth',  // Url
                                    handler: function (request, reply) { //Action

                                        // Response JSON object

                                        authService.loginRegular(request.payload).then(function (response) {
                                            if (response.code === 0) {
                                                reply({
                                                    statusCode: 401,
                                                    message: 'Could not login user',
                                                    data: {}
                                                }).code(401);
                                            } else {
                                                reply({
                                                    statusCode: 200,
                                                    message: response.message,
                                                    data: response.content
                                                }).code(200);
                                            }
                                        }, function (error) {
                                            reply({
                                                statusCode: 401,
                                                message: error.message,
                                                data: error.content
                                            }).code(401);
                                        });
                                    }
                                };

//
// Logout user
// ---------------------------------------------------------------------------------
    authRoutes.unauth           = {
                                    method: 'POST',      // Methods Type
                                    path: '/api/v1/unauth',  // Url
                                    handler: function (request, reply) { //Action

                                        // Response JSON object

                                        var serviceResponse = authService.unauth(request.payload);
                                        if (serviceResponse.code === 0) {
                                            reply({
                                                statusCode: 500,
                                                message: 'Could not logout user',
                                                data: {}
                                            }).code(500);
                                        } else {
                                            reply({
                                                statusCode: 200,
                                                message: serviceResponse.message,
                                                data: serviceResponse.content
                                            }).code(200);
                                        }
                                    }
                                };

    module.exports              = authRoutes;
