
export interface IDisposable {
    dispose() : void;
}


class DomListener implements IDisposable {

    private _eventTarget:EventTarget|null;
    private _listenerFunction:any|null
    private _event:string|null;

    constructor(eventTarget:EventTarget,event:string,listener:Function){
        this._eventTarget = eventTarget;
        this._listenerFunction = listener;
        this._event = event;
        this.init()
    }

    //Attach Event Listener to dom element
    private init(){ 

        if(this._eventTarget && this._event && this._listenerFunction){
            this._eventTarget.addEventListener(this._event,this._listenerFunction)
        };

    }
    dispose(): void {
        if(this._eventTarget && this._event && this._listenerFunction){
            this._eventTarget.removeEventListener(this._event,this._listenerFunction);

            //release resources
            this._eventTarget = null;
            this._listenerFunction = null;
            this._event = null;
        }
    }

};


/**
 * Add a disposable event listener
 * @param eventTarget The Target element
 * @param event the event
 * @param listenerFunction the event callback 
 * @returns 
 */
export function addDisposableEventListener(eventTarget:EventTarget,event:string,listenerFunction:Function):IDisposable{
    return new DomListener(eventTarget,event,listenerFunction)
}