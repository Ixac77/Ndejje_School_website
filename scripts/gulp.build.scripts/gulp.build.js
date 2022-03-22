/**
 * Neccesary For building main resource files
 */

const gulp = require('gulp');
const gulp_typescript  = require('gulp-typescript');

//create typescript project
const ts_project = gulp_typescript.createProject("./src/tsconfig.json")
gulp.task("default",function(){


    return gulp.src('src/sw/*.ts')
        .pipe(ts_project())
        .pipe(gulp.dest('./resourceBuilder/js_files'))
});