// ./scenes/youth/BookDrillScene.js.js
import * as data from '../../data/data.js';
import DialogWarn from '../../ui/DialogWarn.js';
import DrillLayout from '../../ui/DrillLayout.js';

export default class BookDrillScene extends Phaser.Scene {

    constructor() {
        super('BookDrillScene');
            //
    }

    init(selection) {
        this.selection = selection;
    }

}