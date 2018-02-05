'use strict';

module.exports = function () {
  $.gulp.task('serve', function () {
    $.browserSync.init(
      {
        open: true,
        server: "./app",
        port: 3000
      }
    );
    // $.browserSync.watch(['./app/**/*.*', '!**/*.css'], reloadBrowser($.browserSync.reload));
  });
};
