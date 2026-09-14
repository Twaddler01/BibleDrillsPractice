// ./scenes/youth/IdentifyingVersesDrillScene.js.js
import * as data from '../../data/data.js';
import DrillLayout from '../../ui/DrillLayout.js';

export default class IdentifyingVersesDrillScene extends Phaser.Scene {

    constructor() {
        super('IdentifyingVersesDrillScene');
        
        this.currentY = 0;

        this.drillData = [];
        this.currentIndex = 0;

        // Hide answer
        this.showAnswer = false;
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
                        this.scene.start('YouthScene');
                    }
                }
            );
        
        this.startDrill();
    }

    startDrill() {

        this.drillData =
            data.youth_IdentifyingVerses().filter(
                i =>
                    i.vers === this.selection.version &&
                    i.color === this.selection.color
            );
        
        
        this.createDrillUI();
        this.resetDrill();
    }

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

        // Drill area
        this.idvQuestionText =
            addText(
                this,
                20,
                this.currentY,
                'QUESTION',
                {
                    fontSize: '24px',
                    color: '#ffffff',

                    wordWrap: {
                        width:
                            this.width - 40
                    }
                }
            )
            .setOrigin(0);

        this.idvAnswerText =
            addText(
                this,
                20,
                this.currentY + this.idvQuestionText.height + 40,
                'ANSWER',
                {
                    fontSize: '24px',
                    color: '#ffff00',

                    wordWrap: {
                        width:
                            this.width - 40
                    }
                }
            )
            .setOrigin(0);
        
        this.idvAnswerRefText =
            addText(
                this,
                20,
                this.currentY + this.idvAnswerText.height + 40,
                'REF',
                {
                    fontSize: '24px',
                    color: '#ffff00',

                    wordWrap: {
                        width:
                            this.width - 40
                    }
                }
            )
            .setOrigin(0);


    }

    updateAnswerPosition() {
        this.idvAnswerText.setY(
            this.idvQuestionText.y +
            this.idvQuestionText.height +
            40
        );
        
        this.idvAnswerRefText.setY(
            this.idvAnswerText.y +
            this.idvAnswerText.height +
            40
        );
    }

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

        this.idvQuestionText.setText(
            currentDrill.verse_ul
        );

        // ==================================================
        // ANSWER
        // ==================================================

        this.idvAnswerText.setText(
            currentDrill.answer
        );

        this.idvAnswerRefText.setText(
            ' - ' + currentDrill.ref
        );

        this.updateAnswerPosition();

        // ==================================================
        // ANSWER VISIBILITY
        // ==================================================

        this.idvAnswerText.setVisible(
            this.showAnswer
        );

        this.idvAnswerRefText.setVisible(
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

    resetDrill() {
        Phaser.Utils.Array.Shuffle(
            this.drillData
        );

        this.currentIndex = 0;
        this.showAnswer = false;

        this.updateDrillUI();
    }

}