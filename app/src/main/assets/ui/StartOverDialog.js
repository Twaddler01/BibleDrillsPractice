export default class StartOverDialog {

    constructor(scene, options = {}) {

        this.scene = scene;

        this.width =
            options.width ??
            scene.scale.width;

        this.height =
            options.height ??
            scene.scale.height;

        this.elements = [];

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
        const boxH = 260;

        const boxX = this.width / 2;
        const boxY = this.height / 2;


        // Background
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


        // Message
        this.addElement(
            addText(
                this.scene,
                boxX,
                boxY - 70,
                'Are you sure you want to start over?\n\nCurrent drill progress will be reset.',
                {
                    fontSize: '32px',
                    color: '#ffffff',
                    align: 'center',
                    wordWrap: {
                        width: boxW - 40
                    }
                }
            )
            .setOrigin(0.5)
            .setDepth(101)
        );


        // YES
        const yesButton = this.addElement(
            this.scene.add.rectangle(
                boxX - 100,
                boxY + 80,
                160,
                60,
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


        // CANCEL
        const cancelButton = this.addElement(
            this.scene.add.rectangle(
                boxX + 100,
                boxY + 80,
                160,
                60,
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