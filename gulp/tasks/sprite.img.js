'use strict';

module.exports = function () {
    $.gulp.task('sprite:img', function () {
        var spriteData = $.gulp.src('./source/img/icons_png/*.png').pipe($.gp.spritesmith({
            imgName: 'sprite.png',
            cssName: '_sprite.sass',
            cssFormat: 'css',
            imgPath: '../img/sprite.png',
            algorithm: 'diagonal',
            padding: 70
        }));
        // return spriteData.pipe($.gulp.dest($.config.root + '/assets/img'));
        // Pipe image stream through image optimizer and onto disk
        var imgStream = spriteData.img
            // DEV: We must buffer our stream into a Buffer for `imagemin`
            .pipe($.buffer())
            .pipe($.gp.imagemin())
            .pipe($.gulp.dest($.config.root + '/img'));

        var cssStream = spriteData.css
            .pipe($.gulp.dest('./app/sass'));

        // Return a merged stream to handle both `end` events
        return $.merge(imgStream, cssStream);
    });
};
