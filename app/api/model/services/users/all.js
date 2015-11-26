//
// User Service Module:
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
    thisModule                  = function () {
        var promise = new Promise(function (resolve, reject) {
            myFirebaseRef.child('firedata/users').on('value', function(snapshot) {
                var usersCollection = snapshot.val();
                response.code               = 1;
                response.message            = 'Listing all users';
                response.content            = usersCollection;
                resolve(response);
            });
        });
        return promise;
    }

    module.exports              = thisModule;
