//
// Users Service:
// Handles all operations between the API and firebase
// ------------------------------------------------------------------------------------------------------
    var userGetAll              = require('./all');
    var saveUser                = require('./save');
    var getUser                 = require('./getUser');
    var updateUser              = require('./update');
    var deleteUser              = require('./delete');
    var userService             = {};

    userService.getUser         = getUser;
    userService.saveUser        = saveUser;
    userService.updateUser      = updateUser;
    userService.deleteUser      = deleteUser;

    module.exports              = userService;
