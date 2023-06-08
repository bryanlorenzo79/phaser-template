export default class ImageFX {

    static fader(tweenRef, target, millisec, value, complete) {
        tweenRef.tweens.add({
            targets: target, 
            duration: millisec, 
            alpha: value,
            onComplete: complete, // onCompleteParams unnecessary with this
        });
    }


    static test(x) {
        console.log(x);
    }
}
