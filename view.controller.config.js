const {HomeExtracter} = require("./scripts/view/view.home");
const {AboutExtracter} = require("./scripts/view/view.about");


/**
 * Place any other add component sources on the page
 * Header Component
 * Footer Component
 */
const _GlobalComponents_ = [
    ""
]


function __extracter__(){
    /**
     * Place Current View to extract For
     */
    return HomeExtracter.extract()
}


exports.ControlExtracter = 