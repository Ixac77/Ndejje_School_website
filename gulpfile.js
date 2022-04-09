//import gulp file globally
const {series} = require('gulp')
const {__gulpBuildSasstask} = require('./scripts/gulp.build.sass')

exports.default = series(__gulpBuildSasstask)