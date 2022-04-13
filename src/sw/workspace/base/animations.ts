import anime, { AnimeAnimParams, AnimeInstance } from "animejs";
import {IDisposable} from "../common/domListener"



type AnimationTypes = "fadein"| "fadeout" | "slidein" | "slideout";

export interface IAnimationComponent extends IDisposable {
    executeAnimation(type:AnimationTypes):void;
    readonly currentElement:HTMLElement;
    replayAnimation():void;
}


class UXAnimationComponent implements IAnimationComponent {

    private _animationTarget:HTMLElement|null;
    private _hasAnimationPlayed:Boolean;
    private _animationInstance:AnimeInstance|null;

    constructor(animationTarget:HTMLElement){
        this._animationInstance = null;
        this._hasAnimationPlayed = false;
        this._animationTarget = animationTarget;
    }

    
    public get currentElement() : HTMLElement {
        return this._animationTarget!
    }
    
    replayAnimation(): void {
        if(this._hasAnimationPlayed){
            if(this._animationInstance){
                this._animationInstance.restart();
            }
        }
    };
    private _setPlayState(bool:Boolean){
        this._hasAnimationPlayed = bool;
    }

    private async __runFadeIn(){
        this._animationInstance = anime({
            targets : this._animationTarget,
            opacity : [0,1]
        })
    };

    private async __runFadeOut(){
        this._animationInstance = anime({
            targets : this._animationTarget,
            opacity : [1,0],
            duration : 800
        })
    };
    private async __runSlideIn(){
        this._animationInstance = anime({
            targets : this._animationTarget,
            translateX : [15,0],
            duration : 800
        })
    }
    private async __runSlideOut(){
        this._animationInstance = anime({
            targets : this._animationTarget,
            translateX : [0,15],
            opacity : [1,0],
            display : "none",
            duration : 800
            
        })
    }

    executeAnimation(type: AnimationTypes){
        switch(type){
            case  'fadein':
               this.__runFadeIn()
               .then(()=>{
                    this._setPlayState(true)
               })
            break;
            case 'fadeout':
                this.__runFadeOut()
                .then(()=>{
                    this._setPlayState(true)
               })
            break;
            case 'slidein':
                this.__runSlideIn()
                .then(()=>{
                    this._setPlayState(true)
               })
            break;
            case 'slideout':
                this.__runSlideOut()
                .then(()=>{
                    this._setPlayState(true)
               })
            break;

        }
        
    };
    dispose(): void {
        this._animationInstance = null;
        this._animationTarget = null;
    }

}


export function createDOMAnimationComponent(AnimationTargetComponent:HTMLElement):IAnimationComponent{
    return new UXAnimationComponent(AnimationTargetComponent)
}
