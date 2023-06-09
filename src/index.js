import Phaser from 'phaser';
import './css/styles.scss';

import './util/font_loader';

import Boot from './scn/boot';
import Menu from './scn/menu';
import Game from './scn/game';

const config = {
    type: Phaser.AUTO,
    width: 448,
    height: 64*10,
    scene: [Boot, Menu, Game],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_WIDTH
    }
};

export default new Phaser.Game(config);
