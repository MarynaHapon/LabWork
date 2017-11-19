module.exports = function() {
    $.gulp.task('img:dev', () => {
        return $.gulp.src('./dev/static/img/**/*.{png,jpg,jpeg,gif,svg}')
            .pipe($.gulp.dest('./build/static/img/'));
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src('./dev/static/img/**/*.{png,jpg,jpeg,gif,svg}')
            .pipe($.gp.tinypng('X1FbN7aVKOSXjw_-PQLUQOkZMTgArm48'))
            .pipe($.gulp.dest('./build/static/img/'));
    });
};
