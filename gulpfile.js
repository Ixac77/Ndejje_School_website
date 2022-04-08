//import gulp file globally
const {series} = require('gulp')
const {__combineHTMLFiles} = require('./scripts/gulp.build.html')

exports.default = series(__combineHTMLFiles)