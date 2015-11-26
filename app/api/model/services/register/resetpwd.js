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
            myFirebaseRef.resetPassword({
                email: userInfo.email
            }, function(error) {
                if (error) {
                    switch (error.code) {
                        case "INVALID_USER":
                            response.message = 'The specified user account does not exist.';
                            response.content = error;
                            reject(response);
                            break;
                        default:
                            response.message = 'Error resetting password.';
                            response.content = error;
                            reject(response);
                    }
                } else {
                    response.message = 'Password reset email sent successfully!';
                    resolve(response);
                }
            });
        });
        return promise;
    }

    module.exports              = thisModule;
