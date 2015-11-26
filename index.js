var api             = require('./app/api');

if (!module.parent) {
    api.start(function() {
        console.log("Server started", api.info.uri);
    });
}

module.exports      = api;
