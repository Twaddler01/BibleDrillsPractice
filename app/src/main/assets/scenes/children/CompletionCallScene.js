import * as data from '../../data/data.js';

export default class CompletionCallScene extends Phaser.Scene {

    constructor() {
        super('CompletionCallScene');
        
    }

    create() {

        // Background
        this.add.rectangle(
            0,
            0,
            this.width,
            this.height,
            0x111111
        )
        .setOrigin(0);

        // Start Over
        const startOverButton = this.add.rectangle(
            20,
            120,
            300,
            60,
            0x555555
        )
        .setOrigin(0)
        .setInteractive();

        addText(
            this,
            startOverButton.x + startOverButton.width / 2,
            startOverButton.y + startOverButton.height / 2,
            'START OVER',
            {
                fontSize: '36px',
                color: '#ffffff'
            }
        )
        .setOrigin(0.5);

        startOverButton.on(
            'pointerdown',
            () => {
                this.startOver();
            }
        );

        this.createUI();
    }

    createUI() {
        
    }

    // ==================================================
    // START OVER
    // ==================================================

    startOver() {
        this.scene.start('ChildrenScene');
    }
}