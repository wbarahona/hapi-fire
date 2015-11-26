var routes          = {};

routes.users        = require('./users');
routes.auth         = require('./auth');
routes.register     = require('./register');

module.exports      = routes;
