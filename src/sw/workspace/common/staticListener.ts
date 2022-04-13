import {IDisposable} from "./domListener"


interface IStaticEventListener<T> extends IDisposable {

    addEventListener<T>(event:string,callback:Function|((args:T)=>void)):void;
    ___disposeEvent(key:string):void;
    dispatchEvent(event:string,...args:T[]):void;
};


/**
 * A static listener to push event listener around the code base
 */
export class StaticListener<J> implements IStaticEventListener<J> {

    private _events:Map<string,Function>|null;
    constructor(){
        this._events = new Map<string,Function>();
    }

    dispose(): void {
        if(this._events){
            this._events = null;
        }
    }
    addEventListener<T>(event: string, callback: Function | ((args: T) => void)): void {
        if(this._events){
            this._events.set(event,callback)
        }
    }
    dispatchEvent(event: string, ...args: J[]): void {
        if(this._events){
            this._events.get(event)!.apply(null,args)
        }
    }
    ___disposeEvent(key: string): void {
        if(this._events){
            this._events.delete(key)
        }
    }
}