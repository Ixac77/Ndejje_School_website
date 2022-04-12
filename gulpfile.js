//import gulp file globally
const {watch,parallel} = require('gulp'),
    {BuildSassFiles} = require('./scripts/gulp.build.sass'),
    {MoveCommonResources} = require('./scripts/gulp.build.resources'),
    {buildHTMLFiles} = require('./scripts/gulp.build.html'),
    {prettify} = require('./scripts/gulp.prettfy.html')

exports.WatchGulp = function(){
    console.log('\x1b[33m%s\x1b[0m',"Live ICT_Club Server Watching Files On Port 5000......")
    watch([
        "src/sw/layouts/**/**/*.scss",
        "src/sw/layouts/**/*.html"
    ],parallel(buildHTMLFiles,BuildSassFiles))
};

exports.PrettifyFiles = prettify

exports.BuildSassFiles = BuildSassFiles;

exports.BuildHTMLFiles = buildHTMLFiles;

exports.transferResources = MoveCommonResources;

