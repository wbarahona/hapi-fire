//
// Register Service Module:
// =========== ALL =============
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
            myFirebaseRef.createUser({
                email: userInfo.email,
                password: userInfo.password
            }, function (error, userData) {
                if (error) {
                    switch (error.code) {
                        case "EMAIL_TAKEN":
                            response.message = 'The new user account cannot be created because the email is already in use.';
                            break;
                        case "INVALID_EMAIL":
                            response.message = 'The specified email is not a valid email.';
                            break;
                        default:
                            response.message = 'Error creating user.';
                            response.content = error;
                            break;
                    }
                    reject(response);
                } else {
                    response.code = 1;
                    response.message = 'Successfully registered user account with uid';
                    response.content = {uid: userData.uid};
                    resolve(response);
                }
            })
        });
        return promise;
    }

    module.exports              = thisModule;
