// ./scenes/children/CompletionCallScene.js
import * as data from '../../data/data.js';
import DialogWarn from '../../ui/DialogWarn.js';
import DrillLayout from '../../ui/DrillLayout.js';

export default class CompletionCallScene extends Phaser.Scene {

    constructor() {
        super('CompletionCallScene');

        this.currentY = 0;

        this.drillData = [];
        this.currentIndex = 0;

        // Hide answer.
        this.showAnswer = false;

        // UI
        this.verseQuestionText = null;
        this.verseAnswerText = null;
        this.progressText = null;

        this.showAnswerButton = null;
        this.showAnswerButtonText = null;

        this.previousButton = null;
        this.nextButton = null;
    }

    init(selection) {
        this.selection = selection;
    }

    create() {

        this.width = this.scale.width;
        this.height = this.scale.height;

        this.add.rectangle(
            0,
            0,
            this.width,
            this.height,
            0x111111
        )
        .setOrigin(0);

        this.drillLayout =
            new DrillLayout(
                this,
                {
                    selection: this.selection,
        
                    onReset: () => {
                        this.resetDrill();
                    },
        
                    onStartOver: () => {
                        this.scene.stop();
                        this.scene.start('ChildrenScene');
                    }
                }
            );
        
        this.startCompletionCall();
    }

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

        this.createDrillUI();
        this.resetDrill();
    }

    // ==================================================
    // DRILL UI
    // ==================================================

    createDrillUI() {

        const centerX =
            this.width / 2;

        const startY =
            this.drillLayout.bottomY + 80;

        // ==================================================
        // PROGRESS
        // ==================================================

        this.progressText =
            addText(
                this,
                centerX,
                startY,
                '',
                {
                    fontSize: '48px',
                    color: '#aaaaaa'
                }
            )
            .setOrigin(0.5);
        
        this.currentY = startY + this.progressText.height + 40;

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
        
        this.currentY = this.showAnswerButton.y + this.showAnswerButton.height * 2 + 40;

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
    // RESET DRILL
    // ==================================================

    resetDrill() {

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
    }
}