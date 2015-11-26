//
// Auth Service Module:
// =========== ALL =============
// ---------------------------------------------------------------------
    var Firebase                = require('firebase');
    var myFirebaseRef           = new Firebase('https://werewolfapp.firebaseio.com/');
    var thisModule              = {};
    var response                = {};
        response.code           = 0;
        response.message        = '';
        response.content        = {};

//
// Login user to Firebase method
// ---------------------------------------------------------------------
    thisModule                  = function () {
        var authData = myFirebaseRef.getAuth();

        if (authData) {
            response.code = 1;
            response.message = 'User is logged in with uid: '+authData.uid;
        } else {
            response.code = 0;
            response.message = 'Unauthorized';
        }
        return response;
    }

    module.exports              = thisModule;
