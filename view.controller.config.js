const {HomeExtracter} = require("./scripts/view/view.home");
const {AboutExtracter} = require("./scripts/view/view.about");




function __extracter__(){
    /**
     * Place Current View to extract For
     */
    return HomeExtracter.extract()
}


exports.ControlExtracter = __extracter__;