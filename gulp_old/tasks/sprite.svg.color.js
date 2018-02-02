'use strict';

module.exports = function() {
  $.gulp.task('sprite:svg:col', function() {
    return $.gulp.src($.sprite.srcSvg + '/*.svg')
      .pipe($.gp.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe($.gp.replace('&gt;', '>'))
      .pipe($.gp.svgSprite({
        mode: {
          symbol: {
            sprite: "../sprite-color.svg"
          }
        }
      }))
      .pipe($.gulp.dest($.path.src + '/img'))
  })
};
