export default class DialogWarn {

    constructor(scene, options = {}) {

        this.scene = scene;

        this.width =
            options.width ??
            scene.scale.width;

        this.height =
            options.height ??
            scene.scale.height;

        this.elements = [];

        this.onWarn = options.onWarn ?? 
            'Are you sure you want to start over?\n\nCurrent drill progress will be reset.';

        this.onConfirm =
            options.onConfirm ?? (() => {});

        this.onCancel =
            options.onCancel ?? (() => {});

        this.create();
    }


    // ==================================================
    // CREATE
    // ==================================================

    create() {
    
        const boxW = this.width - 80;
        const boxX = this.width / 2;
        const boxY = this.height / 2;
    
        const padding = 30;
        const messageWidth = boxW - padding * 2;
    
        const buttonH = 60;
        const buttonGap = 35;
    
        // ==================================================
        // MESSAGE
        // ==================================================
    
        const message = this.addElement(
            addText(
                this.scene,
                boxX,
                0,
                this.onWarn,
                {
                    fontSize: '32px',
                    color: '#ffffff',
                    align: 'center',
                    wordWrap: {
                        width: messageWidth
                    }
                }
            )
            .setOrigin(0.5)
            .setDepth(101)
        );
    
    
        // ==================================================
        // MEASURE MESSAGE
        // ==================================================
    
        const messageH = message.displayHeight;
    
    
        // ==================================================
        // CALCULATE BOX
        // ==================================================
    
        const topPadding = 30;
        const bottomPadding = 30;
    
        const boxH =
            topPadding +
            messageH +
            buttonGap +
            buttonH +
            bottomPadding;
    
    
        const topY = boxY - boxH / 2;
    
        const messageY =
            topY +
            topPadding +
            messageH / 2;
    
        const buttonY =
            topY +
            topPadding +
            messageH +
            buttonGap +
            buttonH / 2;
    
    
        // ==================================================
        // POSITION MESSAGE
        // ==================================================
    
        message.setPosition(
            boxX,
            messageY
        );
    
    
        // ==================================================
        // BACKGROUND
        // ==================================================
    
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
        );
    
    
        // ==================================================
        // YES
        // ==================================================
    
        const yesButton = this.addElement(
            this.scene.add.rectangle(
                boxX - 100,
                buttonY,
                160,
                buttonH,
                0x008000
            )
            .setOrigin(0.5)
            .setInteractive()
            .setDepth(101)
        );
    
        this.addElement(
            addText(
                this.scene,
                yesButton.x,
                yesButton.y,
                'YES',
                {
                    fontSize: '32px',
                    color: '#ffffff'
                }
            )
            .setOrigin(0.5)
            .setDepth(102)
        );
    
    
        // ==================================================
        // CANCEL
        // ==================================================
    
        const cancelButton = this.addElement(
            this.scene.add.rectangle(
                boxX + 100,
                buttonY,
                160,
                buttonH,
                0x555555
            )
            .setOrigin(0.5)
            .setInteractive()
            .setDepth(101)
        );
    
        this.addElement(
            addText(
                this.scene,
                cancelButton.x,
                cancelButton.y,
                'CANCEL',
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
    
        yesButton.on(
            'pointerdown',
            () => {
                this.onConfirm();
            }
        );
    
        cancelButton.on(
            'pointerdown',
            () => {
                this.onCancel();
            }
        );
    }

    // ==================================================
    // ELEMENTS
    // ==================================================

    addElement(element) {
        this.elements.push(element);
        return element;
    }


    // ==================================================
    // DESTROY
    // ==================================================

    destroy() {
        this.elements.forEach(
            element => element?.destroy()
        );
        this.elements = [];
    }
}