// ./ui/DrillLayout.js
import * as data from '../data/data.js';
import DialogWarn from './DialogWarn.js';

export default class DrillLayout {

    constructor(scene, options = {}) {

        this.scene = scene;

        // ==================================================
        // OPTIONS
        // ==================================================

        this.selection =
            options.selection ?? {};

        this.onReset =
            options.onReset ?? (() => {});

        this.onStartOver =
            options.onStartOver ??
            (() => {});
            
        this.bottomY = 0;

        // ==================================================
        // DIMENSIONS
        // ==================================================

        this.width =
            scene.scale.width;

        this.height =
            scene.scale.height;

        // Y position where the main drill
        // should begin.
        this.contentY = 0;

        // ==================================================
        // DATA
        // ==================================================

        this.callData = null;
        this.versionData = null;

        // ==================================================
        // DIALOGS
        // ==================================================

        this.resetDialog = null;
        this.startOverDialog = null;

        // ==================================================
        // PHASER OBJECTS
        // ==================================================

        this.startOverButton = null;
        this.resetDrillButton = null;

        // ==================================================
        // CREATE
        // ==================================================

        this.create();
    }

    // ==================================================
    // CREATE
    // ==================================================

    create() {

        this.getSelectionData();

        this.createHeader();

        this.createButtons();

        this.contentY =
            this.resetDrillButton.y +
            this.resetDrillButton.height +
            40;
    }

    // ==================================================
    // SELECTION DATA
    // ==================================================

    getSelectionData() {

        this.callData =
            data.callData().find(
                i =>
                    i.id ===
                    this.selection.call
            );

        this.versionData =
            data.versionData().find(
                i =>
                    i.id ===
                    this.selection.version
            );
    }

    // ==================================================
    // HEADER
    // ==================================================

    createHeader() {

        const catTitle =
            addText(
                this.scene,
                this.width / 2,
                20,
                'Children\'s Bible Drills',
                {
                    fontSize: '60px',
                    color: '#ffffff'
                }
            )
            .setOrigin(0.5, 0);

        const gameTitle =
            addText(
                this.scene,
                this.width / 2,
                20 +
                catTitle.height +
                20,
                'Bible Drills Practice',
                {
                    fontSize: '60px',
                    color: '#ffffff'
                }
            )
            .setOrigin(0.5, 0);

        addText(
            this.scene,
            this.width / 2,
            gameTitle.y +
            gameTitle.height +
            20,
            this.callData.text +
            ': ' +
            this.versionData.text,
            {
                fontSize: '60px',
                color: '#ffffff'
            }
        )
        .setOrigin(0.5, 0);
    }

    // ==================================================
    // BUTTONS
    // ==================================================

    createButtons() {

        const buttonWidth = 260;
        const buttonHeight = 60;

        // --------------------------------------------------
        // RESET DRILL
        // --------------------------------------------------

        const selectionTitleBottom =
            this.getHeaderBottom();

        const resetY =
            selectionTitleBottom + 40;

        this.resetDrillButton =
            this.scene.add.rectangle(
                this.width / 2,
                resetY,
                buttonWidth,
                buttonHeight,
                0x555555
            )
            .setOrigin(0.5, 0)
            .setInteractive();
        
        this.bottomY = this.resetDrillButton.y + this.resetDrillButton.height;

        addText(
            this.scene,
            this.resetDrillButton.x,
            this.resetDrillButton.y +
            buttonHeight / 2,
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
                this.resetDrill();
            }
        );

        // --------------------------------------------------
        // START OVER
        // --------------------------------------------------

        this.startOverButton =
            this.scene.add.rectangle(
                this.width / 2,
                this.height -
                buttonHeight -
                40,
                buttonWidth,
                buttonHeight,
                0x555555
            )
            .setOrigin(0.5, 0)
            .setInteractive();

        addText(
            this.scene,
            this.startOverButton.x,
            this.startOverButton.y +
            buttonHeight / 2,
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
    }

    // ==================================================
    // HEADER BOTTOM
    // ==================================================

    getHeaderBottom() {

        // Find the lowest header text.
        //
        // The header consists of:
        // Children's Bible Drills
        // Bible Drills Practice
        // CALL: VERSION
        //
        // Since the objects aren't currently stored,
        // calculate the same layout here.

        const catTitleHeight =
            addText.measureText ?
            0 :
            60;

        // For now, use the known header structure.
        //
        // This method can be simplified later if the
        // header text objects are stored as properties.

        return (
            20 +
            60 +
            20 +
            60 +
            20 +
            60
        );
    }

    // ==================================================
    // RESET DRILL
    // ==================================================

    resetDrill() {

        if (this.resetDialog) {
            return;
        }

        this.resetDrillButton.disableInteractive();

        this.resetDialog =
            new DialogWarn(
                this.scene,
                {
                    onWarn:
                        'Are you sure you want to reset the current drill?',

                    onConfirm: () => {
                        this.confirmResetDrill();
                    },

                    onCancel: () => {
                        this.cancelResetDrill();
                    }
                }
            );
    }

    // ==================================================
    // CONFIRM RESET
    // ==================================================

    confirmResetDrill() {

        if (this.resetDialog) {
            this.resetDialog.destroy();
            this.resetDialog = null;
        }

        this.onReset();

        this.resetDrillButton.setInteractive();
    }

    // ==================================================
    // CANCEL RESET
    // ==================================================

    cancelResetDrill() {

        if (this.resetDialog) {
            this.resetDialog.destroy();
            this.resetDialog = null;
        }

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
                this.scene,
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

        if (this.startOverDialog) {
            this.startOverDialog.destroy();
            this.startOverDialog = null;
        }

        this.onStartOver();
    }

    // ==================================================
    // CANCEL START OVER
    // ==================================================

    cancelStartOver() {

        if (this.startOverDialog) {
            this.startOverDialog.destroy();
            this.startOverDialog = null;
        }

        this.startOverButton.setInteractive();
    }

    // ==================================================
    // DESTROY
    // ==================================================

    destroy() {

        if (this.resetDialog) {
            this.resetDialog.destroy();
            this.resetDialog = null;
        }

        if (this.startOverDialog) {
            this.startOverDialog.destroy();
            this.startOverDialog = null;
        }

        if (this.resetDrillButton) {
            this.resetDrillButton.destroy();
            this.resetDrillButton = null;
        }

        if (this.startOverButton) {
            this.startOverButton.destroy();
            this.startOverButton = null;
        }
    }
}