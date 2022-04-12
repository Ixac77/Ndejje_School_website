"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cgExtracter = void 0;
const path_1 = require("path");
const fs_1 = __importDefault(require("fs"));
class cgExtracter {
    _baseDirectory;
    _sources;
    _outputFilename;
    constructor(CgOptions) {
        this._baseDirectory = CgOptions.baseDirectory;
        this._sources = CgOptions.sources;
        this._outputFilename = CgOptions.outputFileName;
    }
    ;
    /**
     * Create final bound data template
     * @param data
     */
    _createFinalBoundData(_within) {
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
                        ${_within}
                    </div>
                </div>
            </body>
            </html>
            `;
    }
    /**
     * Create And Write Final html file
     * @returns
     */
    _createAndWriteFinalHTMLFile(data) {
        return new Promise((c, e) => {
            if (this._baseDirectory && this._outputFilename) {
                fs_1.default.writeFile((0, path_1.join)(this._baseDirectory, this._outputFilename), data, (err) => {
                    if (err) {
                        //check whether file creation was succefull
                        console.log(err.message);
                    }
                    c();
                });
            }
            else {
                fs_1.default.writeFile((0, path_1.join)(__dirname, this._outputFilename), data, (err) => {
                    if (err) {
                        //check whether file creation was succefull
                        console.log(err.message);
                    }
                    c();
                });
            }
        });
    }
    /**
     * Extract content from a file using file source
     */
    async _extractContentFromFile(_fileSource) {
        return new Promise((c, e) => {
            fs_1.default.readFile(_fileSource, { encoding: 'utf8' }, (err, data) => {
                c(data);
                if (err) {
                    e(err.message);
                }
            });
        });
    }
    async _initiateExtraction() {
        return new Promise(async (c, e) => {
            var _dataHolder = "";
            for await (const _sources of this._sources) {
                let _currentSource = _sources;
                let _dataPromise = await this._extractContentFromFile(_currentSource);
                _dataHolder += _dataPromise;
            }
            c({ statement: "Completed Inital Extraction", data: _dataHolder });
        });
    }
    async extract() {
        return new Promise((c, e) => {
            this._initiateExtraction().then((data) => {
                console.log(data.statement);
                const dataContents = this._createFinalBoundData(data.data);
                this._createAndWriteFinalHTMLFile(dataContents).then(() => {
                    c();
                });
            }, (r) => { e(r); });
        });
    }
}
exports.cgExtracter = cgExtracter;
;
