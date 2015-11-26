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
// Save user to Firebase method
// ---------------------------------------------------------------------
    thisModule                  = function (userCredentials) {
        myFirebaseRef.unauth();
        response.code = 1;
        response.message = 'User logged off succesfully';
        return response;
    }

    module.exports              = thisModule;
