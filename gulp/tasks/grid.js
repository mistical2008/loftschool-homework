'use strict'

module.exports = function () {
    $.gulp.task('grid', function (done) {
        console.log("Grid Generation Started");
        done();
        $.grid($.path.src + '/sass/helpers', {
            "breakPoints": {
                "lg": {
                    "width": "1800px",
                    "field": "30px"
                },
                "md": {
                    "width": "1200px",
                    "field": "30px"
                },
                "sm": {
                    "width": "768px",
                    "field": "20px"
                },
                "xs": {
                    "width": "320px",
                    "field": "30px"
                }
            }
        })
    });
};
