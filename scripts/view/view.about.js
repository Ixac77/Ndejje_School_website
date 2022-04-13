/**
 * The View Configuration Helps ins setting which html Page Your are on
 */
//@ts-check
const {cgExtracter} = require("../cg_extract/cg_extract");


/**
 * Create a new extracter FOR 
 */


 const __HTMLFILES__ABOUT = [ 
    

];

const EXTRACTER = new cgExtracter({
    sources :__HTMLFILES__ABOUT,
    baseDirectory : __dirname,
    outputFileName  : "./out/public/views/about.view.html"
});

exports.AboutExtracter = EXTRACTER;