'use strict';

module.exports = function() {
  $.gulp.task('sprite:svg:col', function() {
    return $.gulp.src($.sprite.srcSvgCol + '/*.svg')
      .pipe($.gp.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe($.gp.replace('&gt;', '>'))
      .pipe($.gp.svgSprite({
        mode: {
          symbol: {
            sprite: "../sprite-color.svg",
            render: {
              scss: {
                dest: "../../sass/_svg-sprite-col.scss",
                template: $.path.src + "/sass/templates/_sprite_template.scss"
              }
            }
          }
        }
      }))
      .pipe($.gulp.dest($.path.src + '/img'))
  })
};
