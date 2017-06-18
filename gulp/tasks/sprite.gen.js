'use strict';

module.exports = function() {
    $.gulp.task('sprite:gen', function() {
        return $.gulp.src('./source/images/sprite/*.{png,gif}')
            .pipe($.gp.spritesmith({
                imgName: 'sprite.png',
                padding: 10,
                algorithm: 'binary-tree,',
                cssName: 'sprite.css'
            })).pipe($.gulp.dest($.config.root + '/assets/img/sprite'));
    })
};