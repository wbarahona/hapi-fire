//
// User Service Module:
// =========== GET A USER =============
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
                    myFirebaseRef.child('firedata/users/'+id).on('value', function(snapshot) {
                        var userData = snapshot.val();
                        response.code               = 1;
                        response.message            = 'Listing user id: '+id;
                        response.content            = userData;
                        resolve(response);
                    });
                }
            });
        });
        return promise;
    };

    module.exports              = thisModule;
