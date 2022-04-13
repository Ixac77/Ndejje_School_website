import anime from "animejs";
class UXAnimationComponent {
    _animationTarget;
    _hasAnimationPlayed;
    _animationInstance;
    constructor(animationTarget) {
        this._animationInstance = null;
        this._hasAnimationPlayed = false;
        this._animationTarget = animationTarget;
    }
    get currentElement() {
        return this._animationTarget;
    }
    replayAnimation() {
        if (this._hasAnimationPlayed) {
            if (this._animationInstance) {
                this._animationInstance.restart();
            }
        }
    }
    ;
    _setPlayState(bool) {
        this._hasAnimationPlayed = bool;
    }
    async __runFadeIn() {
        this._animationInstance = anime({
            targets: this._animationTarget,
            opacity: [0, 1]
        });
    }
    ;
    async __runFadeOut() {
        this._animationInstance = anime({
            targets: this._animationTarget,
            opacity: [1, 0],
            duration: 800
        });
    }
    ;
    async __runSlideIn() {
        this._animationInstance = anime({
            targets: this._animationTarget,
            translateX: [15, 0],
            duration: 800
        });
    }
    async __runSlideOut() {
        this._animationInstance = anime({
            targets: this._animationTarget,
            translateX: [0, 15],
            opacity: [1, 0],
            display: "none",
            duration: 800
        });
    }
    executeAnimation(type) {
        switch (type) {
            case 'fadein':
                this.__runFadeIn()
                    .then(() => {
                    this._setPlayState(true);
                });
                break;
            case 'fadeout':
                this.__runFadeOut()
                    .then(() => {
                    this._setPlayState(true);
                });
                break;
            case 'slidein':
                this.__runSlideIn()
                    .then(() => {
                    this._setPlayState(true);
                });
                break;
            case 'slideout':
                this.__runSlideOut()
                    .then(() => {
                    this._setPlayState(true);
                });
                break;
        }
    }
    ;
    dispose() {
        this._animationInstance = null;
        this._animationTarget = null;
    }
}
export function createDOMAnimationComponent(AnimationTargetComponent) {
    return new UXAnimationComponent(AnimationTargetComponent);
}
