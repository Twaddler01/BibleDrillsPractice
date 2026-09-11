import * as data from '../../data/data.js';
import DialogWarn from '../../ui/DialogWarn.js';

export default class CompletionCallScene extends Phaser.Scene {

    constructor() {
        super('CompletionCallScene');
        
        this.drillContent = [];
        this.currentIndex = 0;
        this.showAnswer = false;
        
        this.drillData = [];
        this.currentY = 0;
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

        this.createHeaderFooter();
    }

    createHeaderFooter() {
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

        this.callData =
            data.callData().find(
                i => i.id === this.selection.call
            );

        this.versionData =
            data.versionData().find(
                i => i.id === this.selection.version
            );

        const selectionTitle = addText(
            this,
            this.width / 2,
            gameTitle.y + gameTitle.height + 20,
            this.callData.text +
                ': ' +
                this.versionData.text,
            {
                fontSize: '60px',
                color: '#ffffff'
            }
        )
        .setOrigin(0.5, 0);

        // ==================================================
        // BUTTONS
        // ==================================================

        const buttonY =
            selectionTitle.y +
            selectionTitle.height +
            40;
        
        const buttonWidth = 260;
        const buttonHeight = 60;

        // --------------------------------------------------
        // START OVER (bottom)
        // --------------------------------------------------

        this.startOverButton =
            this.add.rectangle(
                this.width / 2,
                this.height - buttonHeight - 40,
                buttonWidth,
                buttonHeight,
                0x555555
            )
            .setOrigin(0.5, 0)
            .setInteractive();

        addText(this,
            this.startOverButton.x,
            this.startOverButton.y +
                this.startOverButton.height / 2,
            'START OVER',
            {
                fontSize: '32px',
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

        // --------------------------------------------------
        // RESET DRILL
        // --------------------------------------------------

        this.resetDrillButton =
            this.add.rectangle(
                this.width / 2,
                buttonY,
                buttonWidth,
                buttonHeight,
                0x555555
            )
            .setOrigin(0.5, 0)
            .setInteractive();

        const resetDrillText = addText(this,
            this.resetDrillButton.x,
            this.resetDrillButton.y +
                this.resetDrillButton.height / 2,
            'RESET DRILL',
            {
                fontSize: '32px',
                color: '#ffffff'
            }
        )
        .setOrigin(0.5);

        this.resetDrillButton.on(
            'pointerdown',
            () => {
                //this.resetDrillDialog();
            }
        );

        this.currentY = resetDrillText.y + 80;
        
        this.createUI();
    }

    createUI() {
        const allCompletionData = data.childrenVersesData();
        this.drillData = allCompletionData.filter(i => i.vers === this.selection.version && i.color === this.selection.color);
        
        
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
            new DialogWarn(
                this,
                {
                    onConfirm: () => {
                        this.confirmStartOver();
                    },

                    onCancel: () => {
                        this.cancelStartOver();
                    }
                }
            );
    }

    // CONFIRM START OVER
    confirmStartOver() {
        this.startOverDialog.destroy();
        this.startOverDialog = null;
        this.scene.stop();
        this.scene.start(
            'ChildrenScene'
        );
    }

    // CANCEL START OVER
    cancelStartOver() {
        this.startOverDialog.destroy();
        this.startOverDialog = null;
        this.startOverButton.setInteractive();
    }
}