export default class Menu extends Phaser.Scene {
    constructor() {
        super("menu");
    }

    create() {
        // font handling
        this.text1 = this.add.text(
            this.game.config.width/2, 
            this.game.config.height/2, 
            "Menu", 
            {
                fontFamily: 'Anton',
                color: '#00ff00',
                fontSize: '40px'
            }
        );
        this.text1.setOrigin(0.5,0.5);

    }
}
