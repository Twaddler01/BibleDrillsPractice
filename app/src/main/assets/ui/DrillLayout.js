// ./ui/DrillLayout.js
import * as data from '../data/data.js';
import DialogWarn from './DialogWarn.js';
import Timer from './Timer.js';

export default class DrillLayout {

    constructor(scene, options = {}) {

        this.scene = scene;

        // Get update method/delta for every scene (Timer)
        this.updateHandler = this.update.bind(this);
        this.shutdownHandler = this.destroy.bind(this);
        
        this.scene.events.on('update', this.updateHandler);
        this.scene.events.once('shutdown', this.shutdownHandler);

        // ==================================================
        // OPTIONS
        // ==================================================

        this.selection =
            options.selection ?? {};

        this.onReset =
            options.onReset ?? (() => {});

        this.onStartOver =
            options.onStartOver ??
            (() => {});

        this.getDrillData =
            options.getDrillData ??
            (() => []);
        
        this.createContent =
            options.createContent ??
            (() => {});
        
        this.updateContent =
            options.updateContent ??
            (() => {});

        this.timeInSeconds = options.timeInSeconds ?? 10;

        this.getNextDrill =
            options.getNextDrill ?? null;

        this.maxDrills =
            options.maxDrills ?? null;

        this.nextDrillCooldown = false;

        this.bottomY = 0;

        // ==================================================
        // DIMENSIONS
        // ==================================================

        this.width =
            scene.scale.width;

        this.height =
            scene.scale.height;

        // Y position where the main drill
        // should begin.
        this.contentY = 0;

        // ==================================================
        // DATA
        // ==================================================

        this.drillData = [];
        this.currentIndex = 0;
        this.showAnswer = false;

        this.callData = null;
        this.versionData = null;

        // ==================================================
        // DIALOGS
        // ==================================================

        this.resetDialog = null;
        this.startOverDialog = null;
        this.timer = null;

        // ==================================================
        // PHASER OBJECTS
        // ==================================================

        this.startOverButton = null;
        this.resetDrillButton = null;

        // ==================================================
        // CREATE
        // ==================================================

        this.create();
    }

    // ==================================================
    // CREATE
    // ==================================================

    create() {
        this.getSelectionData();
        this.createHeader();
        this.createButtons();
    
        this.contentY =
            this.resetDrillButton.y +
            this.resetDrillButton.height +
            40;
    
        this.createDrillControls();
    }

    async start() {
        this.drillData =
            await this.getDrillData();
        
        if (!this.drillData) return;
    
        Phaser.Utils.Array.Shuffle(
            this.drillData
        );
    
        this.currentIndex = 0;
        this.showAnswer = false;
    
        this.createContent();
        this.updateDrill();
    }

    // ==================================================
    // SELECTION DATA
    // ==================================================

    getSelectionData() {
        this.callData =
            data.callData().find(
                i =>
                    i.id ===
                    this.selection.call
            );

        this.versionData =
            data.versionData().find(
                i =>
                    i.id ===
                    this.selection.version
            );
    }

    // ==================================================
    // HEADER
    // ==================================================

    createHeader() {
        const banner = this.scene.add.rectangle(
            0,
            0,
            this.width,
            80,
            0xffffff
        )
        .setOrigin(0);

         const gameTitle = addText(this.scene,
            banner.x + banner.width / 2,
            banner.y + banner.height / 2,
            'Bible Drills Practice',
            {
                fontSize: '50px',
                color: '#000000'
            }
        )
        .setOrigin(0.5, 0.5);

        const color = {
            red: 0xff0000,
            green: 0x006400,
            blue: 0x0000ff
        };

        const catBox = this.scene.add.rectangle(
            0,
            banner.height,
            this.width,
            80,
            color[this.selection.color]
        )
        .setOrigin(0);

        const catTitle =
            addText(this.scene,
                this.width / 2,
                catBox.y + catBox.height / 2,
                this.selection.groupText + 'Bible Drills',
                {
                    fontSize: '50px',
                    color: '#ffffff'
                }
            )
            .setOrigin(0.5, 0.5);

        const drillBox = this.scene.add.rectangle(
            0,
            catBox.y + catBox.height,
            this.width,
            80,
            0x333333
        )
        .setOrigin(0);

        const drillOptions = addText(
            this.scene,
            this.width / 2,
            drillBox.y +
            drillBox.height / 2,
            this.callData.text +
            ': ' +
            this.versionData.text,
            {
                fontSize: '40px',
                color: '#ffffff'
            }
        )
        .setOrigin(0.5, 0.5);
        
        // TIMER
        this.timerButton =
            this.scene.add.rectangle(
                20,
                drillOptions.y + drillOptions.height + 20,
                60,
                60,
                0x555555
            )
            .setOrigin(0)
            .setInteractive();
        
        this.timerButtonIcon = 
            this.scene.add.text(
                this.timerButton.x + this.timerButton.width / 2,
                this.timerButton.y + this.timerButton.height / 2,
                '⌛',
                {
                    fontSize: '32px',
                    color: '#ffffff'
                }
            )
            .setOrigin(0.5, 0.5);
        
        this.timerButton.on(
            'pointerdown',
            () => {
                this.startTimer();
            }
        );
    }

    // ==================================================
    // BUTTONS
    // ==================================================

    createButtons() {

        const buttonWidth = 160;
        const buttonHeight = 40;

        // --------------------------------------------------
        // RESET DRILL
        // --------------------------------------------------

        const selectionTitleBottom =
            this.getHeaderBottom();

        const resetY =
            selectionTitleBottom + 40;

        this.resetDrillButton =
            this.scene.add.rectangle(
                this.width / 2,
                resetY,
                buttonWidth,
                buttonHeight,
                0x800000
            )
            .setOrigin(0.5, 0)
            .setInteractive();
        
        this.bottomY = this.resetDrillButton.y + this.resetDrillButton.height;

        addText(
            this.scene,
            this.resetDrillButton.x,
            this.resetDrillButton.y +
            buttonHeight / 2,
            'RESET DRILL',
            {
                fontSize: '24px',
                color: '#ffffff'
            }
        )
        .setOrigin(0.5);

        this.resetDrillButton.on(
            'pointerdown',
            () => {
                this.resetDrill();
            }
        );

        // --------------------------------------------------
        // START OVER
        // --------------------------------------------------

        this.startOverButton =
            this.scene.add.rectangle(
                this.width / 2,
                this.height -
                buttonHeight -
                40,
                buttonWidth,
                buttonHeight,
                0x800000
            )
            .setOrigin(0.5, 0)
            .setInteractive();

        addText(
            this.scene,
            this.startOverButton.x,
            this.startOverButton.y +
            buttonHeight / 2,
            'START OVER',
            {
                fontSize: '24px',
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
    }

    createDrillControls() {
        const centerX = this.width / 2;
    
        const startY =
            this.contentY + 40;
    
        // ==================================================
        // PROGRESS
        // ==================================================
    
        this.progressText =
            addText(
                this.scene,
                centerX,
                startY,
                '',
                {
                    fontSize: '36px',
                    color: '#aaaaaa'
                }
            )
            .setOrigin(0.5);
    
        const buttonY =
            startY +
            this.progressText.height +
            40;
    
        // ==================================================
        // SHOW ANSWER
        // ==================================================
    
        this.showAnswerButton =
            this.scene.add.rectangle(
                centerX,
                buttonY,
                300,
                50,
                0x555555
            )
            .setOrigin(0.5)
            .setInteractive();
    
        this.showAnswerButtonText =
            addText(
                this.scene,
                centerX,
                buttonY,
                'SHOW ANSWER',
                {
                    fontSize: '28px',
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
            this.scene.add.rectangle(
                centerX - 220,
                buttonY,
                120,
                50,
                0x555555
            )
            .setOrigin(0.5)
            .setInteractive();
    
        addText(
            this.scene,
            this.previousButton.x,
            buttonY,
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
            this.scene.add.rectangle(
                centerX + 220,
                buttonY,
                120,
                50,
                0x555555
            )
            .setOrigin(0.5)
            .setInteractive();
    
        this.nextButtonText = addText(
            this.scene,
            this.nextButton.x,
            buttonY,
            '-->',
            {
                fontSize: this.getNextDrill ? '16px' : '32px',
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
    
        this.bottomY =
            buttonY +
            this.showAnswerButton.height / 2 +
            40;
    }

    updateDrill() {
        const currentDrill =
            this.drillData[
                this.currentIndex
            ];
    
        if (!currentDrill) {
            return;
        }
    
        // Progress
        this.progressText.setText(
            `${this.currentIndex + 1} / ${this.drillData.length}`
        );
    
        // Answer visibility
        this.showAnswerButtonText.setText(
            this.showAnswer
                ? 'HIDE ANSWER'
                : 'SHOW ANSWER'
        );
    
        // Navigation
        this.previousButton.setAlpha(
            this.currentIndex > 0
                ? 1
                : 0.4
        );

        const atEnd =
            this.currentIndex >=
            this.drillData.length - 1;

        const canGenerate =
            this.getNextDrill &&
            (
                !this.maxDrills ||
                this.drillData.length < this.maxDrills
            );

        if (atEnd && this.getNextDrill) {
        
            // Dynamic drill can generate another item
            this.nextButton.setAlpha(
                canGenerate && !this.nextDrillCooldown ? 1 : 0.4
            );
            
            this.nextButtonText.setPosition(
                this.nextButton.x,
                this.nextButton.y
            );
            this.nextButtonText.setText(
                'GET\nRANDOM VERSE'
            );

        } else {
        
            // Normal navigation
            this.nextButton.setAlpha(
                atEnd ? 0.4 : 1
            );
        
            this.nextButtonText.setText('-->');
        }
    
        // Let the scene deal with the actual content
        this.updateContent(
            currentDrill,
            this.showAnswer
        );
    }

    previousDrill() {
        if (this.currentIndex <= 0) {
            return;
        }
    
        this.currentIndex--;
        this.showAnswer = false;
    
        this.updateDrill();
    }

    async nextDrill() {
        if (
            this.currentIndex <
            this.drillData.length - 1
        ) {
            this.currentIndex++;
            this.showAnswer = false;
    
            this.updateDrill();
    
            return;
        }

        // Maximum number of drills reached
        if (
            this.maxDrills &&
            this.drillData.length >= this.maxDrills
        ) {
            return;
        }

        // No more existing drills
        // and this drill does not generate new ones
        if (!this.getNextDrill) {
            return;
        }

        if (this.nextDrillCooldown) {
            return;
        }

        this.nextDrillCooldown = true;

        this.nextButton.setAlpha(0.4);

        this.scene.time.delayedCall(
            3000,
            () => {
                this.nextDrillCooldown = false;
                this.updateDrill();
            }
        );
    
        try {
    
            const newDrill =
                await this.getNextDrill();
    
            if (!newDrill) {
                return;
            }
    
            this.drillData.push(newDrill);
    
            this.currentIndex++;
            this.showAnswer = false;
    
            this.updateDrill();
    
        } catch (error) {
    
            console.error(
                'Error generating next drill:',
                error
            );
    
            // Silently do nothing.
            // Cooldown still runs for 3 seconds.
        }
    }
    
    toggleAnswer() {
        this.showAnswer =
            !this.showAnswer;
    
        this.updateDrill();
    }

    // ==================================================
    // HEADER BOTTOM
    // ==================================================

    getHeaderBottom() {

        // Find the lowest header text.
        //
        // The header consists of:
        // Children's Bible Drills
        // Bible Drills Practice
        // CALL: VERSION
        //
        // Since the objects aren't currently stored,
        // calculate the same layout here.

        const catTitleHeight =
            addText.measureText ?
            0 :
            60;

        // For now, use the known header structure.
        //
        // This method can be simplified later if the
        // header text objects are stored as properties.

        return (
            20 +
            60 +
            20 +
            60 +
            20 +
            60
        );
    }

    // ==================================================
    // RESET DRILL
    // ==================================================

    resetDrill() {

        if (this.resetDialog || this.startOverDialog) {
            return;
        }

        this.resetDrillButton.disableInteractive();

        this.resetDialog =
            new DialogWarn(
                this.scene,
                {
                    onWarn:
                        'Are you sure you want to reset the current drill?',

                    onConfirm: () => {
                        this.confirmResetDrill();
                    },

                    onCancel: () => {
                        this.cancelResetDrill();
                    }
                }
            );
    }

    // ==================================================
    // CONFIRM RESET
    // ==================================================

    async confirmResetDrill() {
        if (this.resetDialog) {
            this.resetDialog.destroy();
            this.resetDialog = null;
        }

        this.drillData =
            await this.getDrillData();

        if (!this.drillData) {
            return;
        }

        if (!this.getNextDrill) {
            Phaser.Utils.Array.Shuffle(
                this.drillData
            );
        }
    
        this.currentIndex = 0;
        this.showAnswer = false;
    
        this.updateDrill();

        this.resetDrillButton.setInteractive();
    }

    // ==================================================
    // CANCEL RESET
    // ==================================================

    cancelResetDrill() {

        if (this.resetDialog) {
            this.resetDialog.destroy();
            this.resetDialog = null;
        }

        this.resetDrillButton.setInteractive();
    }

    // ==================================================
    // START OVER
    // ==================================================

    startOver() {

        if (this.startOverDialog || this.resetDialog) {
            return;
        }

        this.startOverButton.disableInteractive();

        this.startOverDialog =
            new DialogWarn(
                this.scene,
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

        if (this.startOverDialog) {
            this.startOverDialog.destroy();
            this.startOverDialog = null;
        }

        this.onStartOver();
    }

    // ==================================================
    // CANCEL START OVER
    // ==================================================

    cancelStartOver() {

        if (this.startOverDialog) {
            this.startOverDialog.destroy();
            this.startOverDialog = null;
        }

        this.startOverButton.setInteractive();
    }

    // ==================================================
    // TIMER
    // ==================================================

    startTimer() {
        if (this.timer) {
            this.timer.destroy();
            this.timer = null;
            return;
        }

        this.timer =
            new Timer(
                this.scene,
                {
                    bottomY: this.bottomY,
                    time: this.timeInSeconds,
                    onClose: () => {
                        this.timer?.destroy();
                        this.timer = null;
                    }
                }
            );
    }

    update(time, delta) {
        this.timer?.update(delta);
    }

    // ==================================================
    // DESTROY
    // ==================================================

    destroy() {

        if (this.resetDialog) {
            this.resetDialog.destroy();
            this.resetDialog = null;
        }

        if (this.startOverDialog) {
            this.startOverDialog.destroy();
            this.startOverDialog = null;
        }

        if (this.resetDrillButton) {
            this.resetDrillButton.destroy();
            this.resetDrillButton = null;
        }

        if (this.startOverButton) {
            this.startOverButton.destroy();
            this.startOverButton = null;
        }
        if (this.timer) {
            this.timer.destroy();
            this.timer = null;
        }
        this.scene.events.off(
            'update',
            this.updateHandler
        );
        this.scene.events.off(
            'shutdown',
            this.shutdownHandler
        );
    }
}