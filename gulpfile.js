//import gulp file globally
const {series,watch,parallel} = require('gulp')
const {BuildSassFiles} = require('./scripts/gulp.build.sass')
const {MoveCommonResources} = require('./scripts/gulp.build.resources');
const {buildHTMLFiles} = require('./scripts/gulp.build.html')
const {prettify} = require('./scripts/gulp.prettfy.html')

exports.WatchGulp = function(){
    console.log('\x1b[33m%s\x1b[0m',"Live ICT_Club Server Watching......")
    watch([
        "src/sw/layouts/**/*.scss",
        "src/sw/layouts/**/*.html"
    ],parallel(buildHTMLFiles,BuildSassFiles))
};

exports.PrettifyFiles = prettify

exports.BuildSassFiles = BuildSassFiles;

exports.BuildHTMLFiles = buildHTMLFiles;

exports.transferResources = MoveCommonResources;

