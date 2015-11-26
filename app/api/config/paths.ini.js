//
// API PATHS SHALL BE DECLARED HERE BOY!
// ---------------------------------------------------------------------------------------
    var paths                               = {};

    // ROOT
        paths.here                          = '.';
        paths.back                          = '..';

    // APP
        paths.app                           = paths.root+'/app';

    // MODELS
        paths.models                        = paths.here+'/models';
        paths.services                      = paths.models+'/services';
        paths.services.users                = paths.services+'/users';

    // ROUTES
        paths.routes                        = paths.here+'/routes';
        paths.routes.users                  = paths.routes+'/users';

    module.exports                          = paths;
