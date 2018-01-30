'use strict';

module.exports = function() {
  $.gulp.task('copy:image', function() {
    return $.gulp.src($.path.src + '/img/**/*.*', { since: $.gulp.lastRun('copy:image') })
      .pipe($.gulp.dest($.path.dist + '/img'))
      .pipe($.gp.size({title: "Images"}));
  });
};
