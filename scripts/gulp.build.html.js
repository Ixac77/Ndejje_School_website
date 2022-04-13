const {HTMLExtracter} = require('../co_build.html')


function buildHTML(){
    console.log('\x1b[33m%s\x1b[34m',"Combining HTML Files")

    return HTMLExtracter.extract()
}

exports.buildHTMLFiles = buildHTML;