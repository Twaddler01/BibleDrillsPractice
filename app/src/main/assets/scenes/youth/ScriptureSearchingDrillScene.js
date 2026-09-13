// ./scenes/youth/ScriptureSearchingDrillScene.js.js
import * as data from '../../data/data.js';
import DialogWarn from '../../ui/DialogWarn.js';
import DrillLayout from '../../ui/DrillLayout.js';

export default class ScriptureSearchingDrillScene extends Phaser.Scene {

    constructor() {
        super('ScriptureSearchingDrillScene');
            //
    }

    init(selection) {
        this.selection = selection;
    }

}