//
// Auth Service Module:
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
// Login user using email/pwd to Firebase method
// ---------------------------------------------------------------------
    thisModule                  = function (userCredentials) {
        var promise = new Promise(function (resolve, reject) {
            myFirebaseRef.authWithPassword({
                email    : userCredentials.email,
                password : userCredentials.password
            }, function(error, authData) {
                if (error) {
                    response.message    = 'Error user could not be authenticated';
                    response.content    = error;
                    reject(response);
                } else {
                    response.code       = 1;
                    response.message    = 'User authenticated sucessfully';
                    response.content    = authData;
                    resolve(response);
                }
            }, {
                remember: "sessionOnly"
            });
        });
        return promise;
    }

    module.exports              = thisModule;
