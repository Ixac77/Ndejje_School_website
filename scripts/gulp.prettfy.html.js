const gulp = require('gulp');
const prettier  = require('gulp-prettier');



function prettify(){

    return gulp.src([
        "./devcontainer/**/*.js",
        "./devcontainer/**/*.html",
        "./devcontainer/**/*.css"
    ]).pipe(prettier())

}

exports.prettify = prettify