'use strict';

module.exports = function() {
  $.gulp.task('clean', function(cb) {
    return $.del($.path.dist, cb);
  });
};
