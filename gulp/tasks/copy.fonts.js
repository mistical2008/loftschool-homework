'use strict';

module.exports = function() {
  $.gulp.task('copy:font', function() {
    return $.gulp.src($.path.src + '/fonts/**/*.*', { since: $.gulp.lastRun('copy:font') })
      .pipe($.gulp.dest($.path.dist + '/fonts'))
      .pipe($.gp.size({title: "Fonts"}));
  });
};
