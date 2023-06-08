import Phaser from 'phaser'
import './css/styles.scss'
import Sc01 from './Sc01'
import Sc02 from './Sc02'
import './fontLoader'

const config = {
    type: Phaser.AUTO,
    width: 448,
    height: 64*10,
    scene: [Sc01, Sc02],
    scale: {
        mode: Phaser.Scale.FIT,
        // autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

export default new Phaser.Game(config);
