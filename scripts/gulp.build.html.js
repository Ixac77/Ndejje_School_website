const gulp = require('gulp');
const gulp_inject  = require('gulp-inject');


const __HTMLFILES__ = [
    /**
     * -----Home-Resources-----------------
     */
    "./src/sw/layouts/Home/cm_banner-area/banner.html",
    "./src/sw/layouts/Home/cm_grid_box-area_joypride/grid_box.html",
    "./src/sw/layouts/Home/cm_grid_box_2_goals/grid_box_2.html",
    /**
     * -----------missing component to be made by Anyuru Arthur
     */
    "./src/sw/layouts/Home/cm_grid_box_3_insights/grid_box_3_insights.html",
    "./src/sw/layouts/Home/cm_quote/quote.html",
    "./src/sw/layouts/Home/cm_footer/footer.html"
    /**
     * ----end-of-Home-Resources---------------
     */

];


function __combineHTMLFiles(){

    return gulp.src('./.devcontainer/workload.main.html')
        .pipe(
            gulp_inject(gulp.src('./.devcontainer/public/workload.main.css',{read : false}),{name : 'head'})
            )
        .pipe(
            gulp_inject(gulp.src('./.devcontainer/public/workload.main.js',{read : false}),{name  : 'body'})
            )
        .pipe(
            gulp_inject(gulp.src(__HTMLFILES__,{read :false}),{name : 'body'})
            )
        .pipe(gulp.dest('./.devcontainer/public'))

};

exports.__combineHTMLFiles = __combineHTMLFiles