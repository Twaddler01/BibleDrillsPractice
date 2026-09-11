//import BootScene from './scenes/BootScene.js';
import ChildrenScene from './scenes/ChildrenScene.js';
//import YouthScene from './scenes/YouthScene.js';
import BookCallScene from './scenes/children/BookCallScene.js';
import CompletionCallScene from './scenes/children/CompletionCallScene.js';
import KeyPassagesCallScene from './scenes/children/KeyPassagesCallScene.js';
import QuotationCallScene from './scenes/children/QuotationCallScene.js';

/*
import { DEBUG } from './config.js';
if (DEBUG) {
    import('./debug/debug.js'); // logExport, htmlExport
    import('./debug/zoom.js'); // zoom
}
*/

const GAME_WIDTH = 600; // 600

const aspectRatio = window.innerHeight / window.innerWidth;
const GAME_HEIGHT = Math.round(GAME_WIDTH * aspectRatio);

const config = {
    parent: 'main',
    type: Phaser.AUTO,
    scene: [
        ChildrenScene,
        BookCallScene,
        CompletionCallScene,
        KeyPassagesCallScene,
        QuotationCallScene
    ],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: GAME_WIDTH,
        height: GAME_HEIGHT
    }
};

const game = new Phaser.Game(config);
