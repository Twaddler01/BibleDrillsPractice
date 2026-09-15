// ./scenes/children/QuotationCallScene.js
import * as data from '../../data/data.js';
import DialogWarn from '../../ui/DialogWarn.js';
import DrillLayout from '../../ui/DrillLayout.js';

export default class QuotationCallScene extends Phaser.Scene {

    constructor() {
        super('QuotationCallScene');
        
        // UI
        this.quotationQuestionText = null;
        this.quotationAnswerText = null;
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
        
                    getDrillData: () => {
                        return data
                            .childrenVersesData().filter(
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
    
        this.quotationQuestionText =
            addText(this,
                20,
                startY,
                '',
                {
                    fontSize: '30px',
                    color: '#ffffff',
                    wordWrap: {
                        width: this.width - 40
                    }
                }
            )
            .setOrigin(0);
    
        this.quotationAnswerText =
            addText(this,
                20,
                startY + 40,
                '',
                {
                    fontSize: '30px',
                    color: '#ffff00',
                    wordWrap: {
                        width: this.width - 40
                    }
                }
            )
            .setOrigin(0);
    }

    updateDrillUI(currentDrill, showAnswer) {
        this.quotationQuestionText.setText(
            currentDrill.ref
        );
    
        this.quotationAnswerText.setText(
            currentDrill.verse_ul + currentDrill.verse
        );
    
        this.quotationAnswerText.setVisible(
            showAnswer
        );
    }
}