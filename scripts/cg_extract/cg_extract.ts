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
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" preload  rel="stylesheet">
                <link rel="stylesheet" href="./public/workload.main.css">
                <title>Document</title>
            </head>
            <body class="windows">
                <div class="ponaco-main" role="application">
                    <div class="ponaco-splitview">
                            <header>
                                    <div class="ponaco-common-header">
                                    <div class="wx-component-header-section" role="heading">
                                        <div class="wx-header-component-area">
                                            <div class="wx-badge-wrapper">
                                                <div class="badge-icon">             
                                                </div>
                                                <div class="badge-title">NDEJJE SENIOR SECONDARY SCHOOL</div>
                                            </div>
                                            <div class="registration-btn">Enroll Now</div>
                                        </div>
                                        <div class="wx-navigation-bar-half-area">
                                            <div class="navigation-bar-wrapper">
                                                <div class="main-navigation-bar">
                                                    <ul class="navigation-items">
                                                        <li class="Home-nav-control">
                                                            <a href="#">Home</a>
                                                        </li>
                                                        <li class="Home-nav-control">
                                                            <a href="#">Blog</a>
                                                        </li>
                                                        <li class="Home-nav-control">
                                                            <a href="#">About us</a>
                                                        </li>
                                                        <li class="Home-nav-control">
                                                            <a href="#">Academics</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>
                        <div class="content-provider">
                            ${_within}
                        </div>  
                                    <footer class="component-footer">
                                            <div class="component-footer-wrapper">
                                                <div class="component-section-1 section-comp">
                                                    <div class="xtr-1 xtr-w">
                                                        <div class="wrapper">
                                                            <div class="tr1">Ndejje Senior Secondary School</div>
                                                            <div class="tr2">No Pains No Gains</div>
                                                        </div>
                                                    </div>
                                                    <div class="xtr-2 xtr-w">
                                                        <div class="wrapper">
                                                            <div class="tr1">Join The Community</div>
                                                            <div class="tr2 enroll-btn">Enroll Now</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="component-section-2 section-comp">
                                                    <div class="xtr-1 xtr-component">
                                                        <div class="content-wrapper">
                                                            <div class="xtr-component-title">Info</div>
                                                            <div class="xtr-data-wrapper">
                                                                <span class="x-number item">772410852</span>
                                                                <span class="x-email item">ndejje@gmail.com</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="xtr-2 xtr-component">
                                                        <div class="content-wrapper">
                                                            <div class="xtr-component-title">Address</div>
                                                            <div class="xtr-data-wrapper">
                                                                <span class="x-address-1 item">P.O.Box 193</span>
                                                                <span class="x-address-2 item">Bombo, Uganda</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="xtr-3 xtr-component">
                                                        <div class="content-wrapper">
                                                            <div class="xtr-component-title">Follow</div>
                                                            <div class="xtr-data-wrapper">
                                                                <span class="x-fl-link x-fl-facebook item" title="Follow us on Facebook">Facebook</span>
                                                                <span class="x-fl-link x-fl-instagram item" title="Follow us on Instagram">Instagram</span>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                    <div class="control-component">&UpArrow;</div>
                                                </div>
                                            </div>
            </footer>
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