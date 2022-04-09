import {normalize,resolve,join} from 'path';
import fs from 'fs';


interface ICgExtracter {
    baseDirectory?:string;
    sources :Array<string>;
    outputFileName?:string;
}


interface IVerifyfication {
    isAvailable:Boolean,
    source:string|null
}


export class cgExtracter {
    private _baseDirectory:string|undefined;
    private _sources:Array<string>;
    private _outputFilename:string|undefined;


    private _commmonFileContents:string;

    constructor(CgOptions:ICgExtracter){
        this._commmonFileContents = ""
        this._baseDirectory = CgOptions.baseDirectory;
        this._sources = CgOptions.sources;
        this._outputFilename = CgOptions.outputFileName;
    };

    /**
     * Check an verify ever file exists
     */
    _checkAndVerifyFileSource(sourceFile:string):IVerifyfication{
        let _returns:IVerifyfication = {isAvailable : true,source : sourceFile} 
        if(fs.existsSync(sourceFile)){
            _returns.isAvailable = true;
            _returns.source  = sourceFile
        }else{
            _returns.isAvailable  = false;
            _returns.source  = null
        }
        return _returns;
    };

    /**
     * Create And Error Caller for verification process
     * 
     */
    _verificationErrorManager(options:IVerifyfication){
        if(!options.isAvailable){
            if(options.source == null || options.source){
                let _formatError = `Error Discovered with File: ${options.source}`;
                console.error(_formatError);
            }
        }
    };

    /**
     * 
     * Combine data
     * @returns 
     */

    _createAndCombineData(){
        this._createAndWriteFinalHTMLFile(this._createFinalBoundData(this._commmonFileContents))
    }

    /**
     * Create final bound data template
     * @param data 
     */
    _createFinalBoundData(_within:string){
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="./public/workload.main.css">
                <title>Document</title>
            </head>
            <body class="windows">
                <div class="ponaco-main" role="application">
                    <div class="ponaco-splitview">
                        ${_within}
                    </div>
                </div>
            </body>
            </html>
            `
    }

    /**
     * Create And Write Final html file
     * @returns 
     */

    _createAndWriteFinalHTMLFile(data:string){
        if(this._baseDirectory && this._outputFilename){
            fs.writeFile(join(this._baseDirectory,this._outputFilename),data,(err)=>{
                if(err){
                    //check whether file creation was succefull
                    console.log(err.message)
                }
            })
        }else{
            fs.writeFile(join(__dirname,this._outputFilename!),data,(err)=>{
                if(err){
                    //check whether file creation was succefull
                    console.log(err.message)
                }
            })
        }
    }

    /**
     * Check and verify all fileSources
     */

    async _checkAndVerifyAllFileSourcesPresence(){
            if(this._sources.length > 0){
                this._sources.forEach((_source)=>{
                    this._verificationErrorManager(this._checkAndVerifyFileSource(_source))
                    /**
                     * finshed verifying all the source files now we can start extracting content from theme
                     */
                });
            } 
    };

    /**
     * Extract content from a file using file source
     */
    _extractContentFromFile(_fileSource:string){
        let data = fs.readFileSync(_fileSource,{encoding : 'utf8'})
        this._commmonFileContents += data;
    }

    _initiateExtraction(){
        console.log("Starting content extraction from html files..........")
            this._sources.forEach((_fileSource)=>{
                this._extractContentFromFile(_fileSource)
            });
    }

    extract(){
        console.log("Checking file Sources Presence...")
        this._checkAndVerifyAllFileSourcesPresence()
        console.log("Finished checking file Presence........")
        this._initiateExtraction()
        this._createAndCombineData();
        console.log("Done Succefully")
            
    }


};