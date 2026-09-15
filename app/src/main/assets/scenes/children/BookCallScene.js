// ./scenes/children/BookCallScene.js
import * as data from '../../data/data.js';
import DialogWarn from '../../ui/DialogWarn.js';
import DrillLayout from '../../ui/DrillLayout.js';

export default class BookCallScene extends Phaser.Scene {

    constructor() {
        super('BookCallScene');

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
        
        const drillData = this.bookData();
    
        this.drillLayout =
            new DrillLayout(
                this,
                {
                    selection: this.selection,
        
                    getDrillData: () => {
                        return drillData;
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

    bookData() {
        const bibleBooks = data.getBooks();
        const drillData = [];
        
        bibleBooks.forEach((book, index) => {
            const before = bibleBooks[index - 1] ?? '';
            const current = bibleBooks[index] ?? null;
            const after = bibleBooks[index + 1] ?? '';
            
            drillData.push({
                question: current,
                before,
                current,
                after
            });
            
        });

        return drillData;
    }

    createDrillUI() {
        const startY =
            this.drillLayout.bottomY;

        this.questionText =
            addText(this,
                20,
                startY,
                '',
                {
                    fontSize: '40px',
                    color: '#ffffff',
                    wordWrap: {
                        width: this.width - 40
                    }
                }
            )
            .setOrigin(0);

        this.answerTextBefore =
            addText(this,
                20,
                startY + 80,
                '',
                {
                    fontSize: '28px',
                    color: '#ffffff',
                    wordWrap: {
                        width: this.width - 40
                    }
                }
            )
            .setOrigin(0);

        this.answerText =
            addText(this,
                20,
                startY + 80,
                '',
                {
                    fontSize: '28px',
                    color: '#ffff00',
                    wordWrap: {
                        width: this.width - 40
                    }
                }
            )
            .setOrigin(0);

        this.answerTextAfter =
            addText(this,
                20,
                startY + 80,
                '',
                {
                    fontSize: '28px',
                    color: '#ffffff',
                    wordWrap: {
                        width: this.width - 40
                    }
                }
            )
            .setOrigin(0);

    }

    updateDrillUI(currentDrill, showAnswer) {
        this.questionText.setText(
            currentDrill.question
        );

        this.answerTextBefore.setText(
            currentDrill.before
        );

        this.answerText.setX(20 + this.answerTextBefore.width);
        this.answerTextAfter.setX(this.answerText.x + this.answerText.width);
        this.answerText.setText(
            '  ' + currentDrill.current + '  '
        );

        this.answerTextAfter.setText(
            currentDrill.after
        );

        this.answerTextBefore.setVisible(
            showAnswer
        );

        this.answerText.setVisible(
            showAnswer
        );

        this.answerTextAfter.setVisible(
            showAnswer
        );
    }
}