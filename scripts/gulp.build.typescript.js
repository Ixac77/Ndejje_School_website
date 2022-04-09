const gulp = require('gulp');
const gulp_typescript = require('gulp-typescript');


const tsProject = gulp_typescript.createProject("src/tsconfig.json");


function __tsErrorHandler(e){
    console.log(`--TYPESCRIPT_BUILD_ERROR:${e}`)
}


/**
 * Used to build the main scripts
 */

function  __gulpTypescriptBuild(){
    return  gulp.src("src/sw/**/*.ts")
        .pipe(tsProject().on('error',__tsErrorHandler))
        .pipe(gulp.dest("src/sw/cgl_scripts"))
}

exports.CompileTypeScriptFiles = __gulpTypescriptBuild;