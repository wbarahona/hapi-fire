//
// Authentication Service:
// Handles all operations between the API and firebase
// ------------------------------------------------------------------------------------------------------
    var loginRegular            = require('./loginregular');
    var unauth                  = require('./unauth');
    var isauth                  = require('./isauth');
    var authService             = {};

    authService.loginRegular    = loginRegular;
    authService.unauth          = unauth;
    authService.isauth          = isauth;

    module.exports              = authService;
