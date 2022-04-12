const gulp = require('gulp');
const prettier  = require('gulp-prettier');



function prettify(){

    return gulp.src([
        "./out/**/*.js",
        "./out/**/*.html",
        "./out/**/*.css"
    ]).pipe(prettier())

}

exports.prettify = prettify