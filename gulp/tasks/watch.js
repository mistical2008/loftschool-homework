'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./app/js/**/*.js', $.gulp.series('js:process'));
    $.gulp.watch('./app/sass/**/*.sass', $.gulp.series('sass'));
    $.gulp.watch('./app/pug/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./app/img/**/*.*', $.gulp.series('serve')).on('change', $.browserSync.reload);
  });
};
