import imgLoc_phaserLogo from './assets/phaserLogo.png'
import imgLoc_boy from './assets/boy.png'
import imgLoc_apple from './assets/apple.png'
import sfxLoc_fp01 from './assets/Flashpoint001a.flac'

var testObject;

export default class Sc01 extends Phaser.Scene {
    constructor() {
        super("bootLoader");
    }

    preload() {
        this.load.image("apple", imgLoc_apple);
        this.load.image("phaserLogo", imgLoc_phaserLogo);
        // this.load.spritesheet('boy', imgLoc_boy, {
        //     frameWidth: 120,
        //     frameHeight: 200
        // });

        this.load.audio('fp01a', sfxLoc_fp01);
    }

    create() {
        let appleGroup = this.add.container();

        for (let i = 0; i < 5; i++) {
            let xx = Phaser.Math.Between(48, 400);
            let yy = Phaser.Math.Between(40, 600);
            let apple = this.add.image(xx, yy, "apple");
            appleGroup.add(apple);

        }
        
        testObject = appleGroup;
        testObject.x = 50;
        console.log(testObject.x);
        // audio handling
        // this.fp01a_sfx = this.sound.add('fp01a');

        // // font handling
        // this.text1 = this.add.text(
        //     this.game.config.width/2, 
        //     this.game.config.height/2, 
        //     "Hello", 
        //     {
        //         fontFamily: 'Anton',
        //         color: '#00ff00',
        //         fontSize: '40px'
        //     }
        // );
        // this.text1.setOrigin(0.5,0.5);

        // image handling
        // this.phaserLogo = this.add.image(
        //     this.game.config.width/2, 
        //     this.game.config.height/2, 
        //     "phaserLogo");
        // this.phaserLogo.setInteractive();
        // this.phaserLogo.on('pointerdown', this.onDown, this);
        // this.phaserLogo.on('pointerup', this.onUp, this);

        // graphics handling
        // this.graphLine = this.add.graphics();
        // this.graphLine.lineStyle(4,0x0000ff);
        // this.graphLine.fillStyle(0x0000ff, 1);
        // this.graphLine.fillRect(100,100,100,50);
        // this.graphLine.moveTo(100,100);
        // this.graphLine.lineTo(100,300);
        // this.graphLine.strokePath();

        // sprite handling
        // this.char = this.add.sprite(0, this.game.config.height/2, 'boy');
        // let frameNames = this.anims.generateFrameNumbers('boy');
        // this.anims.create({
        //     key: 'walk',
        //     // frames: [
        //     //     {key: 'boy', frame: 0},
        //     //     {key: 'boy', frame: 1},
        //     //     {key: 'boy', frame: 2},
        //     //     {key: 'boy', frame: 3},
        //     //     {key: 'boy', frame: 4},
        //     //     {key: 'boy', frame: 5}
        //     // ],
        //     frames: frameNames,
        //     frameRate: 8,
        //     repeat: -1
        // });
        // this.char.play('walk');

        // this.doWalk();
    }

    onDown() {
        this.phaserLogo.alpha = .1;
        this.fp01a_sfx.play();
    }
    onUp() {
        this.phaserLogo.alpha = 1;
    }

    update() {
        // this.char.x += 2;
        // if (this.char.x > this.game.config.width) {
        //     this.char.x = 0;
        // }
    }

    // doWalk() {
    //     this.tweens.add({
    //         targets: this.char, 
    //         duration: 5000, 
    //         x: this.game.config.width,
    //         y: 0,
    //         alpha: 0,
    //         // onComplete: this.onCompleteHandler,
    //         onComplete: this.onCompleteHandler.bind(this), // onCompleteParams unnecessary with this
    //         // onCompleteParams: [this]
    //     });
    // }

    // onCompleteHandler(tween, targets, custom) {
    //     let char = targets[0];
    //     char.x = 0;
    //     char.y = this.game.config.height/2;
    //     char.alpha = 1;
    //     // scope.doWalk();
    //     this.doWalk(); // able to access this using bind.(this)
    // }
}
