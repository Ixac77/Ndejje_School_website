//@ts-check
const {cgExtracter} = require('./scripts/cg_extract/cg_extract');


/**
 * Create a new extracter
 */


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

const EXTRACTER = new cgExtracter({
    sources :__HTMLFILES__,
    baseDirectory : __dirname,
    outputFileName  : "./out/workload.main.html"
});

exports.HTMLExtracter = EXTRACTER;