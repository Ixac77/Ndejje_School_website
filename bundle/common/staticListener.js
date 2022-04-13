;
/**
 * A static listener to push event listener around the code base
 */
export class StaticListener {
    _events;
    constructor() {
        this._events = new Map();
    }
    dispose() {
        if (this._events) {
            this._events = null;
        }
    }
    addEventListener(event, callback) {
        if (this._events) {
            this._events.set(event, callback);
        }
    }
    dispatchEvent(event, ...args) {
        if (this._events) {
            this._events.get(event).apply(null, args);
        }
    }
    ___disposeEvent(key) {
        if (this._events) {
            this._events.delete(key);
        }
    }
}
