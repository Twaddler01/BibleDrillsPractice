// ./scenes/children/CompletionCallScene.js

import * as data from '../../data/data.js';
import DialogWarn from '../../ui/DialogWarn.js';

export default class CompletionCallScene extends Phaser.Scene {

    constructor() {
        super('CompletionCallScene');

        this.currentY = 0;
        
        this.startOverDialog = null;
        this.resetDialog = null;

        // ==================================================
        // DRILL STATE
        // ==================================================

        this.drillData = [];
        this.currentIndex = 0;

        // Answer is shown initially.
        this.showAnswer = true;

        // ==================================================
        // PHASER OBJECTS
        // ==================================================

        this.verseQuestionText = null;
        this.verseAnswerText = null;
        this.progressText = null;

        this.showAnswerButton = null;
        this.showAnswerButtonText = null;

        this.previousButton = null;
        this.nextButton = null;

        this.startOverButton = null;
        this.resetDrillButton = null;
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

        // ==================================================
        // CREATE UI
        // ==================================================

        this.createHeaderFooter();
        this.startCompletionCall();
    }

    // ==================================================
    // HEADER
    // ==================================================

    createHeaderFooter() {
        const catTitle =
            addText(
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

        const gameTitle =
            addText(
                this,
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

        this.callData =
            data.callData().find(
                i => i.id === this.selection.call
            );

        this.versionData =
            data.versionData().find(
                i => i.id === this.selection.version
            );

        const selectionTitle =
            addText(
                this,
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

        // ==================================================
        // BUTTONS
        // ==================================================

        const buttonY =
            selectionTitle.y +
            selectionTitle.height +
            40;

        const buttonWidth = 260;
        const buttonHeight = 60;

        // ==================================================
        // START OVER
        // ==================================================

        this.startOverButton =
            this.add.rectangle(
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

        // ==================================================
        // RESET DRILL
        // ==================================================

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

        addText(this,
            this.resetDrillButton.x,
            this.resetDrillButton.y + buttonHeight / 2,
            'RESET DRILL',
            {
                fontSize: '32px',
                color: '#ffffff'
            }
        )
        .setOrigin(0.5, 0.5);

        this.resetDrillButton.on(
            'pointerdown',
            () => {
                this.resetDrillDialog();
            }
        );
    }

    // ==================================================
    // START COMPLETION CALL
    // ==================================================

    startCompletionCall() {

        // --------------------------------------------------
        // GET VERSES
        // --------------------------------------------------

        const allCompletionData =
            data.childrenVersesData();

        this.drillData =
            allCompletionData.filter(
                i =>
                    i.vers === this.selection.version &&
                    i.color === this.selection.color
            );

        // --------------------------------------------------
        // CREATE UI
        // --------------------------------------------------

        this.createDrillUI();

        // --------------------------------------------------
        // INITIALIZE DRILL
        // --------------------------------------------------

        this.resetDrill();
    }

    // ==================================================
    // DRILL UI
    // ==================================================

    createDrillUI() {

        const centerX =
            this.width / 2;

        const startY =
            this.resetDrillButton.y + 80;

        // ==================================================
        // PROGRESS
        // ==================================================

        this.progressText =
            addText(
                this,
                centerX,
                startY + 40,
                '',
                {
                    fontSize: '48px',
                    color: '#aaaaaa'
                }
            )
            .setOrigin(0.5);
        
        this.currentY = startY + 40 + this.progressText.height + 40;

        // ==================================================
        // SHOW ANSWER
        // ==================================================

        this.showAnswerButton =
            this.add.rectangle(
                centerX,
                this.currentY,
                360,
                80,
                0x555555
            )
            .setOrigin(0.5)
            .setInteractive();

        this.showAnswerButtonText =
            addText(
                this,
                centerX,
                this.showAnswerButton.y,
                'HIDE ANSWER',
                {
                    fontSize: '40px',
                    color: '#ffffff'
                }
            )
            .setOrigin(0.5);

        this.showAnswerButton.on(
            'pointerdown',
            () => {
                this.toggleAnswer();
            }
        );
        
        this.currentY = this.showAnswerButton.y + this.showAnswerButton.height + 40;

        // ==================================================
        // PREVIOUS
        // ==================================================

        this.previousButton =
            this.add.rectangle(
                centerX - 250,
                this.showAnswerButton.y,
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
                this.previousDrill();
            }
        );

        // ==================================================
        // NEXT
        // ==================================================

        this.nextButton =
            this.add.rectangle(
                centerX + 250,
                this.showAnswerButton.y,
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
                this.nextDrill();
            }
        );
        
        this.currentY = this.showAnswerButton.y + this.showAnswerButton.height / 2 + 40;

        // ==================================================
        // FULL VERSE
        // ==================================================
        //
        // This contains the COMPLETE text:
        //
        // verse_ul + verse
        //
        // It is the bottom layer and provides all
        // wrapping/layout.
        //
        // ==================================================

        this.verseAnswerText =
            addText(
                this,
                20,
                this.currentY,
                '',
                {
                    fontSize: '36px',
                    color: '#ffffff',

                    wordWrap: {
                        width:
                            this.width - 40
                    }
                }
            )
            .setOrigin(0);

        // ==================================================
        // QUESTION OVERLAY
        // ==================================================
        //
        // This sits directly over the full verse.
        //
        // Since both use the same position, the question
        // appears yellow while the remaining answer remains
        // white underneath.
        //
        // ==================================================

        this.verseQuestionText =
            addText(
                this,
                20,
                this.currentY,
                '',
                {
                    fontSize: '36px',
                    color: '#ffff00',

                    wordWrap: {
                        width:
                            this.width - 40
                    }
                }
            )
            .setOrigin(0);
    }

    // ==================================================
    // UPDATE DRILL UI
    // ==================================================

    updateDrillUI() {

        const currentDrill =
            this.drillData[
                this.currentIndex
            ];

        if (!currentDrill) {
            return;
        }

        // ==================================================
        // PROGRESS
        // ==================================================

        this.progressText.setText(
            `${this.currentIndex + 1} / ${this.drillData.length}`
        );

        // ==================================================
        // QUESTION
        // ==================================================

        this.verseQuestionText.setText(
            currentDrill.verse_ul
        );

        // ==================================================
        // FULL VERSE
        // ==================================================

        this.verseAnswerText.setText(
            currentDrill.verse_ul +
            currentDrill.verse
        );

        // ==================================================
        // ANSWER VISIBILITY
        // ==================================================

        this.verseAnswerText.setVisible(
            this.showAnswer
        );

        this.showAnswerButtonText.setText(
            this.showAnswer
                ? 'HIDE ANSWER'
                : 'SHOW ANSWER'
        );

        // ==================================================
        // NAVIGATION
        // ==================================================

        this.previousButton.setAlpha(
            this.currentIndex > 0
                ? 1
                : 0.4
        );

        this.nextButton.setAlpha(
            this.currentIndex <
            this.drillData.length - 1
                ? 1
                : 0.4
        );
    }

    // ==================================================
    // TOGGLE ANSWER
    // ==================================================

    toggleAnswer() {
        this.showAnswer =
            !this.showAnswer;
        this.updateDrillUI();
    }

    // ==================================================
    // PREVIOUS
    // ==================================================

    previousDrill() {
        if (
            this.currentIndex <= 0
        ) {
            return;
        }

        this.currentIndex--;
        this.showAnswer = false;
        this.updateDrillUI();
    }

    // ==================================================
    // NEXT
    // ==================================================

    nextDrill() {
        if (
            this.currentIndex >=
            this.drillData.length - 1
        ) {
            return;
        }

        this.currentIndex++;
        this.showAnswer = false;
        this.updateDrillUI();
    }

    // ==================================================
    // RESET DRILL DIALOG
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

    // ==================================================
    // RESET DRILL
    // ==================================================

    resetDrill() {
        if (this.resetDialog) {
            this.resetDialog.destroy();
            this.resetDialog = null;
        }

        // --------------------------------------------------
        // SHUFFLE
        // --------------------------------------------------

        Phaser.Utils.Array.Shuffle(
            this.drillData
        );

        // --------------------------------------------------
        // RESET STATE
        // --------------------------------------------------

        this.currentIndex = 0;

        // Hide initially.
        this.showAnswer = false;

        // --------------------------------------------------
        // UPDATE
        // --------------------------------------------------

        this.updateDrillUI();
        this.resetDrillButton.setInteractive();
    }

    // ==================================================
    // CANCEL RESET
    // ==================================================

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