// ./scenes/youth/DoctrinalDrilScene.js.js
import * as data from '../../data/youthData.js';
import DialogWarn from '../../ui/DialogWarn.js';
import DrillLayout from '../../ui/DrillLayout.js';

export default class DoctrinalDrilScene extends Phaser.Scene {

    constructor() {
        super('DoctrinalDrilScene');
        
        // UI
        this.ddQuestionText = null;
        this.ddAnswerText = null;
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
                            .youth_doctrinalVerses()
                            .filter(i => 
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
                    }
                }
            );
        
        this.drillLayout.start();
    }

    createDrillUI() {
        const startY =
            this.drillLayout.bottomY;
    
        this.ddQuestionText =
            addText(
                this,
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
    
        this.ddAnswerText =
            addText(
                this,
                20,
                startY + 80,
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
        this.ddQuestionText.setText(
            currentDrill.question
        );
    
        this.ddAnswerText.setText(
            currentDrill.answer + '\n\n' + currentDrill.ref
        );
    
        this.ddAnswerText.setVisible(
            showAnswer
        );
    }
}