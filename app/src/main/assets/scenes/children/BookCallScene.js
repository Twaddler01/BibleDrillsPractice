// ./scenes/children/BookCallScene.js
import * as data from '../../data/data.js';
import DialogWarn from '../../ui/DialogWarn.js';

export default class BookCallScene extends Phaser.Scene {

    constructor() {
        super('BookCallScene');

        this.startOverDialog = null;
        this.resetDialog = null;

        // ==================================================
        // DRILL STATE
        // ==================================================

        this.books = [];
        this.currentIndex = 0;
        this.showAnswer = false;

        // ==================================================
        // PHASER OBJECTS
        // ==================================================

        this.bookText = null;
        this.progressText = null;

        this.showAnswerButton = null;
        this.showAnswerButtonText = null;

        this.previousButton = null;
        this.nextButton = null;

        this.startOverButton = null;
        this.resetDrillButton = null;

        this.answerTexts = [];
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

        this.createHeaderFooter();
        this.startBookCall();
    }

    // ==================================================
    // HEADER
    // ==================================================

    createHeaderFooter() {

        const catTitle = addText(
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

        const gameTitle = addText(
            this,
            this.width / 2,
            20 + catTitle.height + 20,
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

        const selectionTitle = addText(
            this,
            this.width / 2,
            gameTitle.y + gameTitle.height + 20,
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
        // HEADER BUTTONS
        // ==================================================

        const buttonY =
            selectionTitle.y +
            selectionTitle.height +
            40;
        
        const buttonWidth = 260;
        const buttonHeight = 60;

        // --------------------------------------------------
        // START OVER (bottom)
        // --------------------------------------------------

        this.startOverButton =
            this.add.rectangle(
                this.width / 2,
                this.height - buttonHeight - 40,
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

        // --------------------------------------------------
        // RESET DRILL
        // --------------------------------------------------

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

        addText(
            this,
            this.resetDrillButton.x,
            this.resetDrillButton.y +
                this.resetDrillButton.height / 2,
            'RESET DRILL',
            {
                fontSize: '32px',
                color: '#ffffff'
            }
        )
        .setOrigin(0.5);

        this.resetDrillButton.on(
            'pointerdown',
            () => {
                this.resetDrillDialog();
            }
        );
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
            this.resetDrillButton.y + 80;

        // ==================================================
        // PROGRESS
        // ==================================================

        this.progressText = addText(
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

        // ==================================================
        // CURRENT BOOK
        // ==================================================

        this.bookText = addText(
            this,
            centerX,
            startY + 100,
            '',
            {
                fontSize: '72px',
                color: '#ffffff'
            }
        )
        .setOrigin(0.5);

        // ==================================================
        // SHOW ANSWER
        // ==================================================

        this.showAnswerButton =
            this.add.rectangle(
                centerX,
                startY + 220,
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

        // ==================================================
        // PREVIOUS
        // ==================================================

        this.previousButton =
            this.add.rectangle(
                centerX - 250,
                startY + 220,
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
                startY + 220,
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
            this.height * 0.65;

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

    // ==================================================
    // RESET DRILL
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

    resetDrill() {
        if (this.resetDialog) {
            this.resetDialog.destroy();
            this.resetDialog = null;
        }
        
        this.books =
            [...data.getBooks()];

        Phaser.Utils.Array.Shuffle(
            this.books
        );

        this.currentIndex = 0;
        this.showAnswer = false;

        this.updateDrillUI();
        this.resetDrillButton.setInteractive();
    }

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