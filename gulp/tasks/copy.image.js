'use strict';

module.exports = function() {
  $.gulp.task('copy:imgs', function() {
    return $.gulp.src([$.path.src + '/img/**/*.*','!' + $.sprite.srcPng +  '/*.png', '!' + $.sprite.srcSvg + '/*.svg'], { since: $.gulp.lastRun('copy:imgs') })
      .pipe($.gulp.dest($.path.dist + '/img'))
      .pipe($.gp.size({title: "Images"}));
  });
};
