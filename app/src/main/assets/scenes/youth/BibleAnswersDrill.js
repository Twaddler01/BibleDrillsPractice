// ./scenes/youth/BibleAnswersDrill.js.js
import * as data from '../../data/data.js';
import DialogWarn from '../../ui/DialogWarn.js';
import DrillLayout from '../../ui/DrillLayout.js';

export default class BibleAnswersDrill extends Phaser.Scene {

    constructor() {
        super('BibleAnswersDrill');
            //
    }

    init(selection) {
        this.selection = selection;
    }

}