// ./scenes/youth/IdentifyingVersesDrillScene.js.js
import * as data from '../../data/data.js';
import DialogWarn from '../../ui/DialogWarn.js';
import DrillLayout from '../../ui/DrillLayout.js';

export default class IdentifyingVersesDrillScene extends Phaser.Scene {

    constructor() {
        super('IdentifyingVersesDrillScene');
            //
    }

    init(selection) {
        this.selection = selection;
    }

}