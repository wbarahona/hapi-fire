//
// User Service Module:
// =========== SAVE =============
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
    thisModule                  = function (userData) {
        // TODO: validate userData fields?
        var promise = new Promise(function (resolve, reject) {
            myFirebaseRef.child('firedata/users').child(userData.uid).set(userData, function (error) {
                if (error) {
                    response.message        = 'Error saving the user';
                    response.content        = error;
                    reject(response);
                } else {
                    response.code           = 1;
                    response.message        = 'User saved successfuly!';
                    response.content        = {};
                    resolve(response);
                }
            });
        });

        return promise;
    }

    module.exports              = thisModule;
