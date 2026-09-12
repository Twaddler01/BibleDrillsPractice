import * as data from '../../data/data.js';
import DialogWarn from '../../ui/DialogWarn.js';

export default class KeyPassagesCallScene extends Phaser.Scene {

    constructor() {
        super('KeyPassagesCallScene');
        
        this.currentY = 0;
        
        this.startOverDialog = null;
        this.resetDialog = null;
    }

    init(selection) {
        this.selection = selection;
    }

    create() {

        this.width = this.scale.width;
        this.height = this.scale.height;

        // ==================================================
        // BACKGROUND
        // ==================================================

        this.add.rectangle(
            0,
            0,
            this.width,
            this.height,
            0x111111
        )
        .setOrigin(0);

        this.createHeaderFooter();
        this.startKeyPassagesCall();
    }

    // ==================================================
    // HEADER
    // ==================================================

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
        // HEADER BUTTONS
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

        addText(
            this,
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

        addText(
            this,
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
        
        this.currentY = this.resetDrillButton.y + this.resetDrillButton.height / 2;

        this.resetDrillButton.on(
            'pointerdown',
            () => {
                this.resetDrillDialog();
            }
        );
    }

    startKeyPassagesCall() {
        this.createDrillUI();
        this.updateDrill();
    }

    createDrillUI() {
        const centerX =
            this.width / 2;

        const startY =
            this.currentY + 40;

        // ==================================================
        // PROGRESS
        // ==================================================

        this.progressText = addText(this,
            centerX,
            startY + 40,
            '0 / 0',
            {
                fontSize: '48px',
                color: '#aaaaaa'
            }
        )
        .setOrigin(0.5, 0);

        // ==================================================
        // SHOW ANSWER
        // ==================================================

        this.currentY = this.progressText.y + this.progressText.height + 40;
        
        this.showAnswerButton =
            this.add.rectangle(
                centerX,
                this.currentY,
                360,
                80,
                0x555555
            )
            .setOrigin(0.5, 0)
            .setInteractive();

        this.showAnswerButtonText =
            addText(this,
                centerX,
                this.showAnswerButton.y + this.showAnswerButton.height / 2,
                'SHOW ANSWER',
                {
                    fontSize: '40px',
                    color: '#ffffff'
                }
            )
            .setOrigin(0.5, 0.5);

        this.showAnswerButton.on(
            'pointerdown',
            () => {
                this.toggleAnswer();
            }
        );
        
        this.currentY = this.showAnswerButtonText.y;

        // ==================================================
        // PREVIOUS
        // ==================================================

        this.previousButton =
            this.add.rectangle(
                centerX - 250,
                this.currentY,
                120,
                70,
                0x555555
            )
            .setOrigin(0.5)
            .setInteractive();

        addText(
            this,
            this.previousButton.x,
            this.previousButton.y,
            '<--',
            {
                fontSize: '32px',
                color: '#ffffff'
            }
        )
        .setOrigin(0.5);

        this.previousButton.on(
            'pointerdown',
            () => {
                this.previousBook();
            }
        );

        // ==================================================
        // NEXT
        // ==================================================

        this.nextButton =
            this.add.rectangle(
                centerX + 250,
                this.currentY,
                120,
                70,
                0x555555
            )
            .setOrigin(0.5)
            .setInteractive();

        addText(
            this,
            this.nextButton.x,
            this.nextButton.y,
            '-->',
            {
                fontSize: '32px',
                color: '#ffffff'
            }
        )
        .setOrigin(0.5);

        this.nextButton.on(
            'pointerdown',
            () => {
                this.nextBook();
            }
        );
        
        this.currentY = this.showAnswerButtonText.y + this.showAnswerButtonText.height + 40;

    }

    // ==================================================
    // RESET DRILL
    // ==================================================

    resetDrillDialog() {
        if (this.resetDialog) {
            return;
        }

        this.resetDrillButton.disableInteractive();

        this.resetDialog =
            new DialogWarn(
                this,
                {
                    onWarn:
                        'Are you sure you want to reset the current drill?',
                    onConfirm: () => {
                        this.resetDrill();
                    },
                    onCancel: () => {
                        this.cancelResetDrill();
                    }
                }
            );
    }

    resetDrill() {
        if (this.resetDialog) {
            this.resetDialog.destroy();
            this.resetDialog = null;
        }
        
        // Reset action here, if needed
        

        this.resetDrillButton.setInteractive();
    }

    cancelResetDrill() {
        this.resetDialog.destroy();
        this.resetDialog = null;
        this.resetDrillButton.setInteractive();
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

    // ==================================================
    // CONFIRM START OVER
    // ==================================================

    confirmStartOver() {
        this.startOverDialog.destroy();
        this.startOverDialog = null;

        this.scene.stop();
        this.scene.start(
            'ChildrenScene'
        );
    }

    // ==================================================
    // CANCEL START OVER
    // ==================================================

    cancelStartOver() {
        this.startOverDialog.destroy();
        this.startOverDialog = null;
        this.startOverButton.setInteractive();
    }
}