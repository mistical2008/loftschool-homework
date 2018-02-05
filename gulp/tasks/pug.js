'use strict';

module.exports = function() {
  $.gulp.task('pug', function() {
    return $.gulp.src($.path.src + '/pug/pages/*.pug')
      .pipe($.gp.plumber(
        {
          errorHandler: $.gp.notify.onError({
            title: 'Pug'
          })
        }
      ))
      .pipe($.gp.pug({ pretty: true }))
      .pipe($.gp.size({title: "Pug"}))
      .pipe($.gulp.dest($.path.src))
      .pipe($.browserSync.stream());
  });
};
