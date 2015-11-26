//
// Wrap all api functions here
// ----------------------------------------------------------
    var config          = require('./config');
    var Hapi            = require('hapi');
    var server          = new Hapi.Server(config.cors);
    var routes          = require(config.paths.routes);

    server.connection({
        host: 'localhost',
        port: 8001
    });

    server.route(routes.users.getUser);
    server.route(routes.users.save);
    server.route(routes.users.edit);
    server.route(routes.users.delete);
    server.route(routes.auth.loginRegular);
    server.route(routes.auth.unauth);
    server.route(routes.register.newUser);
    server.route(routes.register.unsubs);
    server.route(routes.register.resetpassword);
    server.route(routes.register.changepassword);

    module.exports      = server;
