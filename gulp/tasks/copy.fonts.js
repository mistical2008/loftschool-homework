'use strict';

module.exports = function() {
  $.gulp.task('copy:fonts', function() {
    return $.gulp.src($.path.src + '/fonts/**/*.*', { since: $.gulp.lastRun('copy:fonts') })
      .pipe($.gulp.dest($.path.dist + '/fonts'))
      .pipe($.gp.size({title: "Fonts"}));
  });
};
