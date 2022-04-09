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



    constructor(CgOptions:ICgExtracter){
        this._baseDirectory = CgOptions.baseDirectory;
        this._sources = CgOptions.sources;
        this._outputFilename = CgOptions.outputFileName;
    };


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

    _createAndWriteFinalHTMLFile(data:string):Promise<void>{
        return new Promise((c,e)=>{
            if(this._baseDirectory && this._outputFilename){
                fs.writeFile(join(this._baseDirectory,this._outputFilename),data,(err)=>{
                    if(err){
                        //check whether file creation was succefull
                        console.log(err.message)
                    }
                    c()
                })
            }else{
                fs.writeFile(join(__dirname,this._outputFilename!),data,(err)=>{
                    if(err){
                        //check whether file creation was succefull
                        console.log(err.message)
                    }
                    c()
                })
            }
        })
    
    }

    /**
     * Extract content from a file using file source
     */
    async _extractContentFromFile(_fileSource:string):Promise<string>{
        return new Promise<string>((c,e)=>{
            fs.readFile(_fileSource,{encoding : 'utf8'},(err,data)=>{
                c(data)
                if(err){
                    e(err.message)
                }
            })
        })
    }

    async _initiateExtraction():Promise<{statement : string,data:string}>{
        return new Promise((c,e)=>{
            this._sources.forEach(async (v)=>{
                let _sourceData = "";
                let data = await this._extractContentFromFile(v)
                _sourceData += data;
                
                c({statement : "Completed Initial Extraction",data : _sourceData})
            });

        })
     
    }


    async extract():Promise<void>{
        return new Promise((c,e)=>{
            this._initiateExtraction().then((data)=>{
                console.log(data.statement);
                const dataContents = this._createFinalBoundData(data.data);
                this._createAndWriteFinalHTMLFile(dataContents).then(()=>{
                    c()
                })
            },(r)=>{e(r)})
        })
    }

};