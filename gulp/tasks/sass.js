'use strict';

module.exports = function() {
  $.gulp.task('sass', function() {
    return $.gulp.src($.path.src + '/sass/**/main.sass')
      .pipe($.gp.plumber(
        {
          errorHandler: $.gp.notify.onError({
            title: 'Style'
          })
        }
      ))
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass())
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
      .pipe($.gp.groupCssMediaQueries())
      .pipe($.gp.sourcemaps.write())
      .pipe($.gp.size({title: "Styles"}))
      .pipe($.gulp.dest($.path.src + '/css'))
      .pipe($.browserSync.stream());
  })
};
