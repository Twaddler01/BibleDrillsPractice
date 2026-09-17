// ./scenes/youth/BibleAnswersDrill.js
import * as data from '../../data/youthData.js';
import DrillLayout from '../../ui/DrillLayout.js';

export default class BibleAnswersDrill extends Phaser.Scene {

    constructor() {
        super('BibleAnswersDrill');

        this.drillLayout = null;
        this.baQuestionText = null;
        this.baAnswerText = null;
        this.baAnswerRefText = null;
    }

    init(selection) {
        this.selection = selection;
    }

    create() {
    
        this.width = this.scale.width;
        this.height = this.scale.height;
    
        this.drillLayout =
            new DrillLayout(
                this,
                {
                    selection: this.selection,
        
                    getDrillData: () => {
                        return data
                            .youth_bibleAnswersVerses()
                            .filter(
                                i =>
                                    i.vers === this.selection.version &&
                                    i.color === this.selection.color
                            );
                    },
        
                    createContent: () => {
                        this.createDrillUI();
                    },
        
                    updateContent: (
                        currentDrill,
                        showAnswer
                    ) => {
                        this.updateDrillUI(
                            currentDrill,
                            showAnswer
                        );
                    },
        
                    onStartOver: () => {
                        this.scene.start('YouthScene', this.selection);
                    },
                    
                    timeInSeconds: 8
                }
            );
        
        this.drillLayout.start();
    }

    createDrillUI() {
        const startY =
            this.drillLayout.bottomY;
    
        this.baQuestionText =
            addText(this,
                20,
                startY,
                '',
                {
                    fontSize: '24px',
                    color: '#ffffff',
                    wordWrap: {
                        width: this.width - 40
                    }
                }
            )
            .setOrigin(0);
    
        this.baAnswerText =
            addText(this,
                20,
                startY,
                '',
                {
                    fontSize: '24px',
                    color: '#ffff00',
                    wordWrap: {
                        width: this.width - 40
                    }
                }
            )
            .setOrigin(0);
    
        this.baAnswerRefText =
            addText(this,
                20,
                startY,
                '',
                {
                    fontSize: '24px',
                    color: '#ffff00',
                    wordWrap: {
                        width: this.width - 40
                    }
                }
            )
            .setOrigin(0);
    }

    updateAnswerPosition() {
        this.baAnswerText.setY(
            this.baQuestionText.y +
            this.baQuestionText.height +
            40
        );
        
        this.baAnswerRefText.setY(
            this.baAnswerText.y +
            this.baAnswerText.height +
            40
        );
    }

    updateDrillUI(currentDrill, showAnswer) {
        this.baQuestionText.setText(
            currentDrill.question
        );
    
        this.baAnswerText.setText(
            currentDrill.answer
        );
    
        this.baAnswerRefText.setText(
            ' - ' + currentDrill.ref
        );
    
        this.baAnswerText.setVisible(
            showAnswer
        );
    
        this.baAnswerRefText.setVisible(
            showAnswer
        );
    
        this.updateAnswerPosition();

    }
}