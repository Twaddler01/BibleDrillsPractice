// ./scenes/ChildrenScene.js
import * as data from '../data/data.js';

export default class ChildrenScene extends Phaser.Scene {

    constructor() {
        super('ChildrenScene');

        this.currentY = 0;

        // UI references
        this.versionUI = {};
        this.callUI = {};
        this.colorUI = {};

        // Layout information
        this.versionPos = {};
        this.callPos = {};
        this.colorPos = {};

        // Actual selections
        this.selection = {
            version: null,
            call: null
        };
    }

    create() {
const test = data.childrenVersesData();
test.forEach(item => {
    //jp(item.color);
});


        this.selection = {
            version: null,
            color: null,
            call: null
        };

        this.width = this.scale.width;
        this.height = this.scale.height;

        // Complete background
        this.add.rectangle(
            0,
            0,
            this.width,
            this.height,
            0x111111
        )
        .setOrigin(0);

        this.createHeader();
    }

    createHeader() {
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

        // Start Over
        this.startOverButton = this.add.rectangle(
            this.width / 2,
            20 + catTitle.height + 20 + gameTitle.height + 40,
            300,
            60,
            0x555555
        )
        .setOrigin(0.5, 0)
        .setInteractive();

        addText(
            this,
            this.startOverButton.x,
            this.startOverButton.y + this.startOverButton.height / 2,
            'START OVER',
            {
                fontSize: '36px',
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
        
        this.selectVersionUI();
    }

    // ==================================================
    // VERSION
    // ==================================================

    selectVersionUI() {

        const versionText =
            addText(
                this,
                20,
                this.startOverButton.y + 200,
                'Translation:',
                {
                    fontSize: '36px',
                    color: '#ffffff'
                }
            )
            .setOrigin(0);

        const buttonY =
            versionText.y +
            versionText.height +
            20;

        const buttonW = 160;
        const buttonH = 60;
        const gap = 20;

        this.versionPos = {
            x: 20,
            y: buttonY,
            w: buttonW,
            h: buttonH
        };

        let buttonX = this.versionPos.x;

        data.versionData().forEach(item => {

            const bg =
                this.add.rectangle(
                    buttonX,
                    buttonY,
                    buttonW,
                    buttonH,
                    0x555555
                )
                .setOrigin(0)
                .setInteractive();

            const text =
                addText(
                    this,
                    buttonX + buttonW / 2,
                    buttonY + buttonH / 2,
                    item.text,
                    {
                        fontSize: '24px',
                        color: '#ffffff'
                    }
                )
                .setOrigin(0.5);

            this.versionUI[item.id] = {
                bg: bg,
                text: text,
                data: item
            };

            bg.on(
                'pointerdown',
                () => {
                    this.setVersion(item.id);
                    this.selectColorUI();
                }
            );

            buttonX += buttonW + gap;
        });

        this.currentY =
            buttonY +
            buttonH;
    }


    setVersion(id) {

        this.selection.version = id;

        const selected = this.versionUI[id];

        Object.entries(this.versionUI).forEach(
            ([versionId, ui]) => {

                // Keep selected
                if (versionId === id) {

                    ui.bg.setPosition(
                        this.versionPos.x,
                        this.versionPos.y
                    );

                    ui.bg.setFillStyle(0x008000);

                    ui.bg.disableInteractive();

                    ui.text.setText(
                        `✓ ${ui.data.text}`
                    );

                    ui.text.setPosition(
                        this.versionPos.x +
                        this.versionPos.w / 2,

                        this.versionPos.y +
                        this.versionPos.h / 2
                    );

                    return;
                }

                // Remove other versions
                ui.bg.destroy();
                ui.text.destroy();

                delete this.versionUI[versionId];
            }
        );
    }


    getVersion() {
        return this.selection.version ?? null;
    }

    // ==================================================
    // COLOR
    // ==================================================

    selectColorUI() {
        let currentY =
            this.currentY +
            20;

        addText(
            this,
            20,
            currentY,
            'Color:',
            {
                fontSize: '36px',
                color: '#ffffff'
            }
        )
        .setOrigin(0);
    
        currentY += 40;
        
        const buttonW =
            this.width / 3 - 60;

        const buttonH = 60;
        const gap = 20;

        this.colorPos = {
            x: 20,
            y: currentY,
            w: buttonW,
            h: buttonH,
            gap: gap
        };
        
        let currentX = 20;
        const buttonY = currentY + 20;
        
        data.colors().forEach(item => {
            const bg =
                this.add.rectangle(
                    currentX,
                    buttonY,
                    buttonW,
                    buttonH,
                    0x555555
                )
                .setOrigin(0)
                .setInteractive();

            const text =
                addText(
                    this,
                    currentX + buttonW / 2,
                    buttonY + buttonH / 2,
                    item.text,
                    {
                        fontSize: '24px',
                        color: '#ffffff'
                    }
                )
                .setOrigin(0.5);

            this.colorUI[item.id] = {
                bg: bg,
                text: text,
                data: item
            };

            bg.on(
                'pointerdown',
                () => {
                    this.practiceTypeUI();
                }
            );
            
             currentX += buttonW + 20;
        });
        
        this.currentY = currentY + buttonH + 20;
    }

    // ==================================================
    // PRACTICE TYPE
    // ==================================================

    practiceTypeUI() {

        let currentY =
            this.currentY +
            20;

        addText(
            this,
            20,
            currentY,
            'Practice Type:',
            {
                fontSize: '36px',
                color: '#ffffff'
            }
        )
        .setOrigin(0);

        currentY += 40 + 20;

        const buttonW =
            this.width / 2 - 40;

        const buttonH = 60;
        const gap = 20;

        this.callPos = {
            x: 20,
            y: currentY,
            w: buttonW,
            h: buttonH
        };

        data.callData().forEach(
            (item, index) => {

                const col = index % 2;
                const row = Math.floor(index / 2);

                const x =
                    20 +
                    col * (buttonW + gap);

                const y =
                    currentY +
                    row * (buttonH + gap);

                const bg =
                    this.add.rectangle(
                        x,
                        y,
                        buttonW,
                        buttonH,
                        0x555555
                    )
                    .setOrigin(0)
                    .setInteractive();

                const text =
                    addText(
                        this,
                        x + buttonW / 2,
                        y + buttonH / 2,
                        item.text,
                        {
                            fontSize: '24px',
                            color: '#ffffff'
                        }
                    )
                    .setOrigin(0.5);

                this.callUI[item.id] = {
                    bg: bg,
                    text: text,
                    data: item
                };

                bg.on(
                    'pointerdown',
                    () => {
                        this.setCall(item.id);
                    }
                );
            }
        );

        this.currentY =
            currentY +
            Math.ceil(
                data.callData().length / 2
            ) * (buttonH + gap);
    }


    setCall(id) {

        this.selection.call = id;

        Object.entries(this.callUI).forEach(
            ([callId, ui]) => {

                // Keep selected
                if (callId === id) {

                    ui.bg.setPosition(
                        this.callPos.x,
                        this.callPos.y
                    );

                    ui.bg.setFillStyle(0x008000);

                    ui.bg.disableInteractive();

                    ui.text.setText(
                        `✓ ${ui.data.text}`
                    );

                    ui.text.setPosition(
                        this.callPos.x +
                        this.callPos.w / 2,

                        this.callPos.y +
                        this.callPos.h / 2
                    );

                    return;
                }

                // Remove other choices
                ui.bg.destroy();
                ui.text.destroy();

                delete this.callUI[callId];
            }
        );

        this.showGoButton();
    }

    showGoButton() {
        const x = 20;
    
        const y =
            this.callPos.y +
            this.callPos.h +
            40;
    
        const goButton =
            this.add.rectangle(
                x,
                y,
                150,
                70,
                0x555555
            )
            .setOrigin(0)
            .setInteractive();
    
        addText(
            this,
            x + goButton.width / 2,
            y + goButton.height / 2,
            'GO',
            {
                fontSize: '40px',
                color: '#ffffff'
            }
        )
        .setOrigin(0.5);
    
        goButton.on(
            'pointerdown',
            () => {
                // Start drills
                this.startDrill();
            }
        );
    }

    startDrill() {
        switch (this.selection.call) {
        
            case 'completionCall':
                this.scene.start('CompletionCallScene', this.selection);
                break;
        
            case 'quotationCall':
                this.scene.start('QuotationCallScene', this.selection);
                break;
        
            case 'keyPassagesCall':
                this.scene.start('KeyPassagesCallScene', this.selection);
                break;
        
            case 'bookCall':
                this.scene.start('BookCallScene', this.selection);
                break;
        }
    }

    // ==================================================
    // START OVER
    // ==================================================

    startOver() {
        this.scene.restart();
    }
}