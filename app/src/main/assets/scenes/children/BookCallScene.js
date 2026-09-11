// ./scenes/children/BookCallScene.js
import * as data from '../../data/data.js';
import StartOverDialog from '../../ui/StartOverDialog.js';

export default class BookCallScene extends Phaser.Scene {

    constructor() {
        super('BookCallScene');

        this.startOverDialog = null;
        
    }
    
    init(selection) {
        this.selection = selection;
    }

    create() {

        this.width = this.scale.width;
        this.height = this.scale.height;

        // Background
        this.add.rectangle(
            0,
            0,
            this.width,
            this.height,
            0x111111
        )
        .setOrigin(0);
        
        this.createHeader();
    }

    createHeader() {
        const catTitle = addText(
            this,
            this.width / 2,
            20,
            'Children\'s Bible Drills',
            {
                fontSize: '60px',
                color: '#ffffff'
            }
        )
        .setOrigin(0.5, 0);
        
         const gameTitle = addText(
            this,
            this.width / 2,
            20 + catTitle.height + 20,
            'Bible Drills Practice',
            {
                fontSize: '60px',
                color: '#ffffff'
            }
        )
        .setOrigin(0.5, 0);

        this.callData = data.callData().find(i => i.id === this.selection.call);
        this.versionData = data.versionData().find(i => i.id === this.selection.version);
        
        const selectionTitle = addText(this,
            this.width / 2,
            gameTitle.y + gameTitle.height + 20,
            this.callData.text + ': ' + this.versionData.text,
            {
                fontSize: '60px',
                color: '#ffffff'
            }
        )
        .setOrigin(0.5, 0);

        // Start Over
        this.startOverButton = this.add.rectangle(
            this.width / 2,
            selectionTitle.y + selectionTitle.height + 40,
            300,
            60,
            0x555555
        )
        .setOrigin(0.5, 0)
        .setInteractive();

        addText(
            this,
            this.startOverButton.x,
            this.startOverButton.y + this.startOverButton.height / 2,
            'START OVER',
            {
                fontSize: '36px',
                color: '#ffffff'
            }
        )
        .setOrigin(0.5);

        this.startOverButton.on(
            'pointerdown',
            () => {
                this.startOver();
            }
        );
        
        this.startBookCall();
    }

    startBookCall() {
        
    }

    // ==================================================
    // START OVER
    // ==================================================
    
    startOver() {
        if (this.startOverDialog) {
            return;
        }
    
        this.startOverButton.disableInteractive();
    
        this.startOverDialog =
            new StartOverDialog(this, {
                onConfirm: () => {
                    this.confirmStartOver();
                },
    
                onCancel: () => {
                    this.cancelStartOver();
                }
            });
    }
    
    confirmStartOver() {
        this.startOverDialog.destroy();
        this.startOverDialog = null;
        this.scene.stop();
        this.scene.start('ChildrenScene');
    }
    
    cancelStartOver() {
        this.startOverDialog.destroy();
        this.startOverDialog = null;
        this.startOverButton.setInteractive();
    }
}