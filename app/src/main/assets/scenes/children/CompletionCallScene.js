// ./scenes/children/CompletionCallScene.js
import * as data from '../../data/childrenData.js';
import DialogWarn from '../../ui/DialogWarn.js';
import DrillLayout from '../../ui/DrillLayout.js';

export default class CompletionCallScene extends Phaser.Scene {

    constructor() {
        super('CompletionCallScene');

        this.verseQuestionText = null;
        this.verseAnswerText = null;
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
                            .childrenVersesData()
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
                        this.scene.start('ChildrenScene', this.selection);
                    }
                }
            );
        
        this.drillLayout.start();
    }

    createDrillUI() {
        const startY =
            this.drillLayout.bottomY;

        this.verseAnswerText =
            addText(this,
                20,
                startY,
                '',
                {
                    fontSize: '28px',
                    color: '#ffffff',

                    wordWrap: {
                        width:
                            this.width - 40
                    }
                }
            )
            .setOrigin(0);

        this.verseAnswerRefText =
            addText(this,
                20,
                startY,
                '',
                {
                    fontSize: '28px',
                    color: '#ffffff',

                    wordWrap: {
                        width:
                            this.width - 40
                    }
                }
            )
            .setOrigin(0);

        this.verseQuestionText =
            addText(this,
                20,
                startY,
                '',
                {
                    fontSize: '28px',
                    color: '#ffff00',

                    wordWrap: {
                        width:
                            this.width - 40
                    }
                }
            )
            .setOrigin(0);
    }

    updateDrillUI(currentDrill, showAnswer) {
        
        this.verseQuestionText.setText(
            currentDrill.verse_ul
        );

        this.verseAnswerText.setText(
            currentDrill.verse_ul + currentDrill.verse
        );
    
        this.verseAnswerRefText.setY(this.verseAnswerText.y + this.verseAnswerText.height + 40);
        this.verseAnswerRefText.setText(
            ' - ' + currentDrill.ref
        );
    
        this.verseAnswerText.setVisible(
            showAnswer
        );
    
        this.verseAnswerRefText.setVisible(
            showAnswer
        );
    }
}