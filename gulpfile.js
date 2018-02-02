'use strict';

global.$ = {
    gulp: require('gulp'),
    del: require('del'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')(),
    buffer: require('vinyl-buffer'),
    merge: require('merge-stream'),
    package: require('./package.json'),
    config: require('./gulp/config'),
        path: {
            src: "./app",
            dist: "./dist",
            tasks: require('./gulp/paths/tasks.js'),
            jsFoundation: require('./gulp/paths/js.foundation.js'),
            cssFoundation: require('./gulp/paths/css.foundation.js'),
            app: require('./gulp/paths/app.js')
        },
        sprite: {
            srcPng: "./app/img/icons_png",
            srcSvg: "./app/img/icons_svg",
            srcSvgCol: "./app/img/icons_svg_col"
        }
};

$.path.tasks.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    'clean',
  $.gulp.parallel(
    'sass',
    'pug',
    'js:process'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
