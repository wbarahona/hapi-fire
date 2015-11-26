//
// Register Service Module:
// =========== Unsubscribe =============
// ---------------------------------------------------------------------
    var promise                 = require('promise');
    var Firebase                = require('firebase');
    var myFirebaseRef           = new Firebase('https://werewolfapp.firebaseio.com/');
    var thisModule              = {};
    var response                = {};
        response.code           = 0;
        response.message        = '';
        response.content        = {};

//
// Save user to Firebase method
// ---------------------------------------------------------------------
    thisModule                  = function (userInfo) {
        var promise = new Promise(function (resolve, reject) {
            myFirebaseRef.removeUser({
                email: userInfo.email,
                password: userInfo.password
            }, function(error) {
                if (error) {
                    switch (error.code) {
                        case "INVALID_USER":
                            response.message            = 'The specified user account does not exist.';
                            response.content            = error;
                            reject(response);
                            break;
                        case "INVALID_PASSWORD":
                            response.message            = 'The specified user account password is incorrect.';
                            response.content            = error;
                            reject(response);
                            break;
                        default:
                            response.message            = 'Error removing user.';
                            response.content            = error;
                            reject(response);
                    }
                } else {
                    response.code                       = 1;
                    response.message                    = 'User account deleted successfully!';
                    resolve(response);
                }
            });
        });
        return promise;
    }

    module.exports              = thisModule;
