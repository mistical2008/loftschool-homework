'use strict';

module.exports = function () {
    $.gulp.task('sprite:img', function () {
        var spriteData = $.gulp.src($.sprite.srcPng + '/*.png').pipe($.gp.spritesmith({
            retinaSrcFilter: '*-2x.png',
            retinaImgName: 'spritesheet-2x.png',
            imgName: 'sprite.png',
            cssName: '_sprite.scss',
            cssFormat: 'css',
            imgPath: '../img/sprite.png',
            algorithm: 'diagonal',
            padding: 50
        }));
        // return spriteData.pipe($.gulp.dest($.config.root + '/assets/img'));
        // Pipe image stream through image optimizer and onto disk
        var imgStream = spriteData.img
            // DEV: We must buffer our stream into a Buffer for `imagemin`
            .pipe($.buffer())
            .pipe($.gp.imagemin())
            .pipe($.gulp.dest($.path.src + '/img'));

        var cssStream = spriteData.css
            .pipe($.gulp.dest($.path.src + '/sass'));

        // Return a merged stream to handle both `end` events
        return $.merge(imgStream, cssStream);
    });
};
