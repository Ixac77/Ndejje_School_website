const gulp = require('gulp');


function __transferResources() {

    return gulp.src([
        "./Resources/test-images/ndejje.svg",
        "./Resources/test-images/books.jpg",
        "./Resources/test-images/teach.jpg",
        "./Resources/test-images/girl.jpg",
        "./Resources/fonts/*.ttf"
        
    ])
    .pipe(
        gulp.dest("./out/resources"))

}


exports.MoveCommonResources = __transferResources
