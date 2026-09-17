// ./scenes/youth/IdentifyingVersesDrillScene.js
import * as data from '../../data/youthData.js';
import DrillLayout from '../../ui/DrillLayout.js';

export default class IdentifyingVersesDrillScene extends Phaser.Scene {

    constructor() {
        super('IdentifyingVersesDrillScene');

        this.drillLayout = null;
        this.idvQuestionText = null;
        this.idvAnswerText = null;
        this.idvAnswerRefText = null;
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
                            .youth_IdentifyingVerses()
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
    
        this.idvQuestionText =
            addText(
                this,
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
    
        this.idvAnswerText =
            addText(
                this,
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
    
        this.idvAnswerRefText =
            addText(
                this,
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

    updateDrillUI(currentDrill, showAnswer) {
        this.idvQuestionText.setText(
            currentDrill.verse_ul
        );
    
        this.idvAnswerText.setText(
            currentDrill.answer
        );
    
        this.idvAnswerRefText.setText(
            ' - ' + currentDrill.ref
        );
    
        this.idvAnswerText.setVisible(
            showAnswer
        );
    
        this.idvAnswerRefText.setVisible(
            showAnswer
        );
    
        this.updateAnswerPosition();
    }
}