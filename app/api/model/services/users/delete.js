//
// User Service Module:
// =========== UPDATE =============
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
    thisModule                  = function (id) {
        var promise = new Promise(function (resolve, reject) {
            myFirebaseRef.onAuth(function (authData) {
                if (authData) {
                    myFirebaseRef.child('firedata/users/'+id).remove(function (error) {
                        if (error) {
                            response.code           = 0;
                            response.message        = 'Error deleting the user';
                            response.content        = error;
                            reject(response);
                        } else {
                            response.code           = 1;
                            response.message        = 'User deleted successfully!';
                            response.content        = {};
                            resolve(response);
                        }
                    });
                }
            });
        });

        return promise;
    }

    module.exports              = thisModule;
