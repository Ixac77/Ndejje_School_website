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
                ${_within}
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
        return new Promise(async (c,e)=>{
            var _dataHolder = ""
            for await (const _sources of this._sources) {
                let _currentSource = _sources;
                let _dataPromise  = await this._extractContentFromFile(_currentSource);
                _dataHolder += _dataPromise;
            }
            c({statement : "Completed Inital Extraction",data : _dataHolder})
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