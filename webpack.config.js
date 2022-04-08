const path = require('path');



const config = {
    entry: './src/buildfile.main.js',
    mode : 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: "[name][ext]"
    },
    module: {
        rules: [
            {
                test : /\.html$/i,
                loader : "html-loader",
                generator : {
                    filename : '[name][ext]'
                },
                options : {
                    minimize : false,
                    sources  : {
                        // list: [
                        //     {
                        //         filter: (tag,attribute,attributes,resourcePath)=>{
    
                        //             if(attribute == "export-component"){
                        //                 return true
                        //             }else{
                        //                 return false
                        //             }
                        //         }
                        //     }
                        // ]
                    }
                }
            }
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
};

module.exports = config
