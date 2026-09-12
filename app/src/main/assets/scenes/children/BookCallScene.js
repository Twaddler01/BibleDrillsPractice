// ./scenes/children/BookCallScene.js
import * as data from '../../data/data.js';
import DialogWarn from '../../ui/DialogWarn.js';
import DrillLayout from '../../ui/DrillLayout.js';

export default class BookCallScene extends Phaser.Scene {

    constructor() {
        super('BookCallScene');

        this.currentY = 0;

        this.books = [];
        this.currentIndex = 0;
        this.showAnswer = false;

        this.bookText = null;
        this.progressText = null;

        this.showAnswerButton = null;
        this.showAnswerButtonText = null;

        this.previousButton = null;
        this.nextButton = null;

        this.answerTexts = [];
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

        this.startBookCall();
    }

    // ==================================================
    // START BOOK CALL
    // ==================================================

    startBookCall() {
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

        this.progressText = addText(
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
                'SHOW ANSWER',
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
        
        this.currentY = this.showAnswerButtonText.y + this.showAnswerButton.height * 2 + 40;

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
                this.previousBook();
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
                this.nextBook();
            }
        );

        this.currentY = this.showAnswerButton.y + this.showAnswerButton.height / 2 + 40;

        // ==================================================
        // CURRENT BOOK
        // ==================================================

        this.bookText = addText(
            this,
            centerX,
            this.currentY,
            '',
            {
                fontSize: '72px',
                color: '#ffffff'
            }
        )
        .setOrigin(0.5, 0);

        this.currentY = this.bookText.y + this.bookText.height + 40;
    }

    // ==================================================
    // UPDATE UI
    // ==================================================

    updateDrillUI() {

        const currentBook =
            this.books[this.currentIndex];

        // ==================================================
        // PROGRESS
        // ==================================================

        this.progressText.setText(
            `${this.currentIndex + 1} / ${this.books.length}`
        );

        // ==================================================
        // QUESTION
        // ==================================================

        this.bookText.setText(
            currentBook
        );

        // ==================================================
        // ANSWER
        // ==================================================

        if (this.showAnswer) {

            this.createAnswerUI();

            this.showAnswerButtonText.setText(
                'HIDE ANSWER'
            );

        } else {

            this.clearAnswerUI();

            this.showAnswerButtonText.setText(
                'SHOW ANSWER'
            );
        }

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
            this.books.length - 1
                ? 1
                : 0.4
        );
    }

    // ==================================================
    // CREATE ANSWER UI
    // ==================================================

    createAnswerUI() {

        // Remove existing answer first.
        this.clearAnswerUI();

        const bibleBooks =
            data.getBooks();

        const bibleIndex =
            bibleBooks.indexOf(
                this.books[this.currentIndex]
            );

        const books = [];

        // --------------------------------------------------
        // PREVIOUS BIBLE BOOK
        // --------------------------------------------------

        if (bibleIndex > 0) {

            books.push({
                text:
                    bibleBooks[bibleIndex - 1],

                current: false
            });
        }

        // --------------------------------------------------
        // CURRENT BIBLE BOOK
        // --------------------------------------------------

        books.push({
            text:
                bibleBooks[bibleIndex],

            current: true
        });

        // --------------------------------------------------
        // NEXT BIBLE BOOK
        // --------------------------------------------------

        if (
            bibleIndex <
            bibleBooks.length - 1
        ) {

            books.push({
                text:
                    bibleBooks[bibleIndex + 1],

                current: false
            });
        }

        const centerX =
            this.width / 2;

        const centerY =
            this.currentY;

        const spacing = 30;

        // ==================================================
        // CREATE TEXT
        // ==================================================

        const textItems = [];

        books.forEach(book => {

            const text =
                addText(
                    this,
                    0,
                    centerY,
                    book.text,
                    {
                        fontSize: '24px',
                        color:
                            book.current
                                ? '#ffff00'
                                : '#ffffff'
                    }
                )
                .setOrigin(0.5);

            textItems.push({
                text,
                current: book.current
            });
        });

        // ==================================================
        // CALCULATE TOTAL WIDTH
        // ==================================================

        const totalWidth =
            textItems.reduce(
                (total, item) => {
                    return total +
                        item.text.width;
                },
                0
            ) +
            spacing *
            (textItems.length - 1);

        // ==================================================
        // POSITION HORIZONTALLY
        // ==================================================

        let x =
            centerX -
            totalWidth / 2;

        textItems.forEach(item => {

            item.text.x =
                x +
                item.text.width / 2;

            x +=
                item.text.width +
                spacing;
        });

        // ==================================================
        // CURRENT BOOK BOX
        // ==================================================

        const current =
            textItems.find(
                item => item.current
            );

        if (current) {

            const box =
                this.add.rectangle(
                    current.text.x,
                    current.text.y,
                    current.text.width + 24,
                    current.text.height + 18
                )
                .setOrigin(0.5)
                .setStrokeStyle(
                    3,
                    0xffff00
                )
                .setFillStyle(
                    0xffff00,
                    0.08
                );

            // Put the box behind the text.
            box.setDepth(
                current.text.depth - 1
            );

            this.answerTexts.push(box);
        }

        // ==================================================
        // STORE TEXT OBJECTS
        // ==================================================

        textItems.forEach(item => {

            this.answerTexts.push(
                item.text
            );
        });
    }

    // ==================================================
    // CLEAR ANSWER UI
    // ==================================================

    clearAnswerUI() {

        this.answerTexts.forEach(
            item => {
                item.destroy();
            }
        );

        this.answerTexts = [];
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

    previousBook() {
        if (
            this.currentIndex <= 0
        ) {
            return;
        }

        this.currentIndex--;
        // Hide answer when changing question.
        this.showAnswer = false;
        this.updateDrillUI();
    }

    // ==================================================
    // NEXT
    // ==================================================

    nextBook() {
        if (
            this.currentIndex >=
            this.books.length - 1
        ) {
            return;
        }

        this.currentIndex++;
        // Hide answer when changing question.
        this.showAnswer = false;
        this.updateDrillUI();
    }

    resetDrill() {
        this.books =
            [...data.getBooks()];

        Phaser.Utils.Array.Shuffle(
            this.books
        );

        this.currentIndex = 0;
        this.showAnswer = false;

        this.updateDrillUI();
    }
}