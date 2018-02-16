'use strict';

module.exports = function() {
  $.gulp.task('js:process', function() {
    return $.gulp.src($.path.app)
      // .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('main.js'))
      // .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.path.src + '/js'))
      .pipe($.gp.size({title: "Scripts"}));
  })
};
