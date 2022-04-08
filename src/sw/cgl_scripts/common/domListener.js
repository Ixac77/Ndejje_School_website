class DomListener {
    _eventTarget;
    _listenerFunction;
    _event;
    constructor(eventTarget, event, listener) {
        this._eventTarget = eventTarget;
        this._listenerFunction = listener;
        this._event = event;
        this.init();
    }
    //Attach Event Listener to dom element
    init() {
        if (this._eventTarget && this._event && this._listenerFunction) {
            this._eventTarget.addEventListener(this._event, this._listenerFunction);
        }
        ;
    }
    dispose() {
        if (this._eventTarget && this._event && this._listenerFunction) {
            this._eventTarget.removeEventListener(this._event, this._listenerFunction);
            //release resources
            this._eventTarget = null;
            this._listenerFunction = null;
            this._event = null;
        }
    }
}
;
/**
 * Add a disposable event listener
 * @param eventTarget The Target element
 * @param event the event
 * @param listenerFunction the event callback
 * @returns
 */
export function addDisposableEventListener(eventTarget, event, listenerFunction) {
    return new DomListener(eventTarget, event, listenerFunction);
}
