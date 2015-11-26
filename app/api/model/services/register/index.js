//
// Register Service:
// Handles all operations between the API and firebase
// ------------------------------------------------------------------------------------------------------
    var newUser                 = require('./new');
    var unsubscribe             = require('./unsubs');
    var resetpassword           = require('./resetpwd');
    var changepassword          = require('./changepwd');
    var registerService         = {};

    registerService.new             = newUser;
    registerService.unsubs          = unsubscribe;
    registerService.resetpassword   = resetpassword;
    registerService.changepassword  = changepassword;

    module.exports              = registerService;
