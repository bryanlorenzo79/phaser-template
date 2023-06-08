import ImageFX from '../util/image_fx';
import Align from '../util/align';
import AlignGrid from '../util/align_grid';

import imgLoc_phaser_logo from '../assets/phaser_logo.png';
import imgLoc_ab_logo from '../assets/ab_logo.png';
import sfxLoc_fp01 from '../assets/Flashpoint001a.flac';

export default class Boot extends Phaser.Scene {
    constructor() {
        super("boot");
    }

    preload() {
        this.load.image("phaser_logo", imgLoc_phaser_logo);
        this.load.audio('fp01a', sfxLoc_fp01);
    }

    create() {
        // audio handling
        this.fp01a_sfx = this.sound.add('fp01a');
        // this.fp01a_sfx.play();

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
        this.phaserLogo = this.add.image(
            0, 
            0, 
            "phaser_logo");
        this.phaserLogo.alpha = 0;
        // this.phaserLogo.setInteractive();
        // this.phaserLogo.on('pointerdown', this.onDown, this);
        // this.phaserLogo.on('pointerup', this.onUp, this);

        Align.center(this.phaserLogo, this.game);


        // this.showPhaserLogo();
        ImageFX.fader(this, this.phaserLogo, 5000, 1, this.fadeOut.bind(this));
        // console.log(this.tweens);
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

    fadeOut(tween, targets, custom) {
        ImageFX.fader(this, this.phaserLogo, 5000, 0, this.goToMenu.bind(this));
    }

    goToMenu(tween, targets, custom) {
        this.scene.start("menu");
    }
}
