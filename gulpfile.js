var gulp                    = require('gulp');
var connect                 = require('gulp-connect');

//
// Start Gulp task
// -----------------------------------------------------------------------
    //
    // Server task
    // -----------------------------------------------------------------------
        gulp.task('connect', function() {
            connect.server({
                root: './app/client/dist',
                port: 8000,
                livereload: true
            });
        });

    //
    // Process html
    // -----------------------------------------------------------------------
        gulp.task('html', function () {
            gulp.src('./app/client/src/**/*.html')
                .pipe(gulp.dest('./app/client/dist'))
                .pipe(connect.reload());
        });

    //
    // Watch for changes on files
    // -----------------------------------------------------------------------
        gulp.task('watch', function () {
            gulp.watch(['./app/client/src/**/*.html'], ['html']);
        });

    //
    // Default task to just have `$ gulp` et voila
    // -----------------------------------------------------------------------
        gulp.task('default', ['connect', 'html', 'watch']);
