// ./scenes/youth/DoctrinalDrilScene.js.js
import * as data from '../../data/data.js';
import DialogWarn from '../../ui/DialogWarn.js';
import DrillLayout from '../../ui/DrillLayout.js';

export default class DoctrinalDrilScene extends Phaser.Scene {

    constructor() {
        super('DoctrinalDrilScene');
            //
    }

    init(selection) {
        this.selection = selection;
    }

}