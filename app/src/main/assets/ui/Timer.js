// ./ui/Timer.js

export default class Timer {

    constructor(scene, options = {}) {

        this.scene = scene;

        this.width =
            options.width ??
            scene.scale.width;

        this.height =
            options.height ??
            scene.scale.height;

        this.bottomY = 
            options.bottomY + 40 ?? 100;

        // Time in seconds
        this.startTime =
            options.time ?? 10;

        this.time =
            this.startTime;

        this.expired = false;
        this.paused = false;

        this.elements = [];

        this.onClose =
            options.onClose ?? (() => {});

        this.onComplete =
            options.onComplete ?? (() => {});

        this.create();
    }


    // ==================================================
    // CREATE
    // ==================================================

    create() {

        const boxW = this.width - 80;
        const boxH = 220;

        this.popupWidth = boxW;
        this.popupHeight = boxH;

        const boxX = this.width / 2;
        const boxY = this.bottomY - boxH;

        const buttonH = 60;

        // ==================================================
        // BACKGROUND
        // ==================================================

        this.background = 
            this.addElement(
                this.scene.add.rectangle(
                    boxX,
                    boxY,
                    boxW,
                    boxH,
                    0x333333
                )
                .setOrigin(0.5)
                .setDepth(100)
                .setStrokeStyle(1, 0xffffff)
            );

        this.dragHandle =
            this.addElement(
                this.scene.add.rectangle(
                    boxX,
                    boxY,
                    boxW,
                    boxH,
                    0xffffff,
                    0
                )
                .setOrigin(0.5)
                .setInteractive({ draggable: true })
                .setDepth(101)
            );

        this.dragHandle.on(
            'drag',
            (pointer, dragX, dragY) => {
        
                this.setPosition(
                    dragX,
                    dragY
                );
        
            }
        );

        this.addElement(
            addText(
                this.scene,
                boxW / 2,
                boxY - boxH / 2 + 10,
                'TIMER',
                {
                    fontSize: '24px',
                    color: '#ffffff'
                }
            )
            .setOrigin(0)
            .setDepth(102)
        );

        // ==================================================
        // CLOSE X
        // ==================================================

        this.addElement(
            this.scene.add.rectangle(
                boxX + boxW / 2 - 35,
                boxY - boxH / 2 + 30,
                30,
                30,
                0xE72107
            )
            .setOrigin(0.5)
            .setDepth(102)
            .setStrokeStyle(1, 0xffffff)
        );

        const closeButton =
            this.addElement(
                addText(
                    this.scene,
                    boxX + boxW / 2 - 35,
                    boxY - boxH / 2 + 30,
                    'X',
                    {
                        fontSize: '32px',
                        color: '#ffffff'
                    }
                )
                .setOrigin(0.5)
                .setInteractive()
                .setDepth(103)
            );


        // ==================================================
        // TIME
        // ==================================================

        this.timeText =
            this.addElement(
                addText(
                    this.scene,
                    boxX,
                    boxY - 25,
                    '',
                    {
                        fontSize: '64px',
                        color: '#ffffff'
                    }
                )
                .setOrigin(0.5)
                .setDepth(102)
            );

        this.updateTimeText();

        // ==================================================
        // PAUSE
        // ==================================================

        const pauseButton =
            this.addElement(
                this.scene.add.rectangle(
                    boxX - 100,
                    boxY + 65,
                    160,
                    buttonH,
                    0x008000
                )
                .setOrigin(0.5)
                .setInteractive()
                .setDepth(102)
            );

        this.pauseText =
            this.addElement(
                addText(
                    this.scene,
                    pauseButton.x,
                    pauseButton.y,
                    'PAUSE',
                    {
                        fontSize: '32px',
                        color: '#ffffff'
                    }
                )
                .setOrigin(0.5)
                .setDepth(102)
            );


        // ==================================================
        // RESET
        // ==================================================

        const resetButton =
            this.addElement(
                this.scene.add.rectangle(
                    boxX + 100,
                    boxY + 65,
                    160,
                    buttonH,
                    0x555555
                )
                .setOrigin(0.5)
                .setInteractive()
                .setDepth(102)
            );

        this.addElement(
            addText(
                this.scene,
                resetButton.x,
                resetButton.y,
                'RESET',
                {
                    fontSize: '32px',
                    color: '#ffffff'
                }
            )
            .setOrigin(0.5)
            .setDepth(102)
        );


        // ==================================================
        // EVENTS
        // ==================================================

        closeButton.on(
            'pointerdown',
            () => {
                this.onClose();
            }
        );

        pauseButton.on(
            'pointerdown',
            () => {
                if (this.paused) {
                    this.resume();
                } else {
                    this.pause();
                }
            }
        );

        resetButton.on(
            'pointerdown',
            () => {
                this.reset();
            }
        );
    }


    // ==================================================
    // UPDATE
    // ==================================================

    update(delta) {

        if (this.paused)
            return;

        if (this.time <= 0) {
            return;
        }

        // Phaser delta is milliseconds
        this.time -= delta / 1000;

        if (this.time < 0)
            this.time = 0;

        this.updateTimeText();

        if (this.time <= 0) {
            this.time = 0;
            this.pause();
        
            if (!this.expired) {
                this.expired = true;
                this.timeExpired();
            }
        }
    }

    // ==================================================
    // TIME DISPLAY
    // ==================================================

    updateTimeText() {
        this.timeText.setText(
            this.formatTime(this.time)
        );
    }

    formatTime(seconds) {
        return Math.max(
            0,
            seconds
        ).toFixed(1);
    }


    // ==================================================
    // PAUSE
    // ==================================================

    pause() {
        this.paused = true;
        this.pauseText.setText('RESUME');
    }


    // ==================================================
    // RESUME
    // ==================================================

    resume() {
        if (this.time <= 0)
            return;
        this.paused = false;
        this.pauseText.setText('PAUSE');
    }


    // ==================================================
    // RESET
    // ==================================================

    reset() {
        this.time = this.startTime;
        this.expired = false;
        this.paused = false;
        this.pauseText.setText('PAUSE');
        this.updateTimeText();
    }


    // ==================================================
    // ELEMENTS
    // ==================================================

    addElement(element) {
        this.elements.push(element);
        return element;
    }

    // For dragging
    setPosition(x, y) {
        const halfW = this.popupWidth / 2;
        const halfH = this.popupHeight / 2;
    
        x = Phaser.Math.Clamp(
            x,
            halfW,
            this.width - halfW
        );
    
        y = Phaser.Math.Clamp(
            y,
            halfH,
            this.height - halfH
        );
    
        const dx = x - this.background.x;
        const dy = y - this.background.y;
    
        this.elements.forEach(
            element => {
    
                if (!element)
                    return;
    
                element.x += dx;
                element.y += dy;
    
            }
        );
    }

    // ==================================================
    // EXPIRED EFFECT
    // ==================================================

    timeExpired() {
        this.onComplete();

        const flash =
            this.scene.add.rectangle(
                this.width / 2,
                this.height / 2,
                this.width,
                this.height,
                0xff0000,
                0.35
            )
            .setDepth(200);
    
        this.scene.tweens.add({
            targets: flash,
            alpha: 0,
            duration: 800,
            ease: 'Power2',
            onComplete: () => {
                flash.destroy();
            }
        });

        const text =
            this.scene.add.text(
                this.width / 2,
                this.height / 2,
                'TIME!',
                {
                    fontSize: '96px',
                    color: '#ff0000',
                    fontStyle: 'bold'
                }
            )
            .setOrigin(0.5)
            .setDepth(201);
    
        this.scene.tweens.add({
            targets: text,
            scale: 1.3,
            alpha: 0,
            duration: 800,
            ease: 'Power2',
            onComplete: () => {
                text.destroy();
            }
        });
    }

    // ==================================================
    // DESTROY
    // ==================================================

    destroy() {

        this.elements.forEach(
            element => element?.destroy()
        );

        this.elements = [];

        this.timeText = null;
        this.pauseText = null;
    }
}

/*

import Timer from '../../ui/Timer.js';

startTimer() {

    this.timer =
        new Timer(
            this,
            {
                time: 10,
                onClose: () => {
                    this.timer.destroy();
                    this.timer = null;
                }
            }
        );
}

update(time, delta) {
    this.timer?.update(delta);
}

*/