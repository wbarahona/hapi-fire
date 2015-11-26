//
// API configuration and global vars
// ------------------------------------------------------------------------
    var paths                                   = require('./paths.ini');
    var api                                     = {};
        api.paths                               = paths;
        api.globalVars                          = {};
        api.cors                                = {
                                                    connections: {
                                                        routes: {
                                                            cors: true
                                                        }
                                                    }
                                                };

    module.exports                              = api;
