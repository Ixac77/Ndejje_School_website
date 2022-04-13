
/**
 * The Content Hash is going to manage exchange of pages without reloading
 */

type PageHashes = "#home" | "#About" | "#Academics" | "#Blog"


class ContentHash {


    constructor(){ };


    /**
     * In The Beginning
     */
    private _init(){

        //che

    };

    /**
     * Set the initial Hash For The Page
     */
    private _checkInitialHash(){
        if(!location.hash){
            location.hash = "#home"
        }
    }


}