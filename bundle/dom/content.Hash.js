"use strict";
/**
 * The Content Hash is going to manage exchange of pages without reloading
 */
class ContentHash {
    constructor() { }
    ;
    /**
     * In The Beginning
     */
    _init() {
        //che
    }
    ;
    /**
     * Set the initial Hash For The Page
     */
    _checkInitialHash() {
        if (!location.hash) {
            location.hash = "#home";
        }
    }
}
