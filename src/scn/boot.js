import imgLoc_phaser_logo from '../assets/phaser_logo.png';
import imgLoc_ab_logo from '../assets/ab_logo.png';

export default class Boot extends Phaser.Scene {
    constructor() {
        super("boot");
    }

    preload() {
        this.load.image("phaser_logo", imgLoc_phaser_logo);
        this.load.image("ab_logo", imgLoc_ab_logo);
    }

    create() {
        this.phaserLogo = this.add.image(
            this.game.config.width/2, 
            this.game.config.height/2 - 150, 
            "phaser_logo");
        this.abLogo = this.add.image(
            this.game.config.width/2, 
            this.game.config.height/2 + 150, 
            "ab_logo");
        setTimeout(() => {
            this.scene.start("menu");
        }, 5000); 

    }

    update() {

    }

}
