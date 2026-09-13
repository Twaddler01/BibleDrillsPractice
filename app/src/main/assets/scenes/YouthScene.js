// ./scenes/YouthScene.js
import * as data from '../data/data.js';

export default class YouthScene extends Phaser.Scene {

    constructor() {
        super('YouthScene');

    }

    create() {

        this.currentY = 0;

        // UI references
        this.versionUI = {};
        this.colorUI = {};
        this.callUI = {};

        // Actual selections
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
        this.selectVersionUI();
        this.selectColorUI();
        this.practiceTypeUI();
        this.createGoButton();
    }

    createHeader() {
        const catTitle = addText(
            this,
            this.width / 2,
            20,
            'Youth Bible Drills',
            {
                fontSize: '50px',
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
                fontSize: '50px',
                color: '#ffffff'
            }
        )
        .setOrigin(0.5, 0);
        
        this.currentY = gameTitle.y + gameTitle.height + 40;

    }

    // ==================================================
    // VERSION
    // ==================================================

    selectVersionUI() {

        const versionText =
            addText(
                this,
                20,
                this.currentY,
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
        let buttonX = 20;

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
    
        Object.entries(this.versionUI).forEach(
            ([versionId, ui]) => {
    
                const selected =
                    versionId === id;
    
                if (selected) {
                    ui.bg.setFillStyle(0x008000);
                    ui.text.setText(`✓ ${ui.data.text}`);
                }
                else {
                    ui.bg.setFillStyle(0x555555);
                    ui.text.setText(ui.data.text);
                }
            }
        );
    
        this.updateGoButton();
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

        const colorTitle = 
            addText(this,
                20,
                currentY,
                'Color:',
                {
                    fontSize: '36px',
                    color: '#ffffff'
                }
            )
            .setOrigin(0);
    
        currentY += 40 + 20;
        
        const buttonW =
            this.width / 3 - 60;

        const buttonH = 60;
        const gap = 20;

        let currentX = 20;
        const buttonY = currentY;
        
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
                    this.setColor(item.id);
                }
            );
            
             currentX += buttonW + 20;
        });
        
        this.currentY = currentY + buttonH + 20;
    }

    setColor(id) {
        this.selection.color = id;
    
        Object.entries(this.colorUI).forEach(
            ([colorId, ui]) => {
    
                const selected =
                    colorId === id;
    
                if (selected) {
                    ui.bg.setFillStyle(0x008000);
                    ui.text.setText(`✓ ${ui.data.text}`);
                }
                else {
                    ui.bg.setFillStyle(0x555555);
                    ui.text.setText(ui.data.text);
                }
            }
        );
    
        this.updateGoButton();
    }

    // ==================================================
    // PRACTICE TYPE
    // ==================================================

    practiceTypeUI() {
        let currentY = this.currentY;
    
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
            this.width / 2 - 30;
    
        const buttonH = 60;
        const gap = 20;
    
        const callData = data.callData().filter(i => i.group === 'youth');
    
        callData.forEach(
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
                            fontSize: '20px',
                            color: '#ffffff'
                        }
                    )
                    .setOrigin(0.5);
    
                this.callUI[item.id] = {
                    bg,
                    text,
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
    
        // Bottom of the practice-type buttons
        this.currentY =
            currentY +
            Math.ceil(callData.length / 2) *
            (buttonH + gap);
    }

    setCall(id) {
        this.selection.call = id;
    
        Object.entries(this.callUI).forEach(
            ([callId, ui]) => {
    
                const selected =
                    callId === id;
    
                if (selected) {
                    ui.bg.setFillStyle(0x008000);
                    ui.text.setText(`✓ ${ui.data.text}`);
                }
                else {
                    ui.bg.setFillStyle(0x555555);
                    ui.text.setText(ui.data.text);
                }
            }
        );
    
        this.updateGoButton();
    }

    createGoButton() {
        const x = 20;
        const y = this.currentY + 40;

        this.goButton =
            this.add.rectangle(
                x,
                y,
                150,
                70,
                0x008000
            )
            .setOrigin(0)
            .setInteractive();
    
        this.goButtonText = addText(
            this,
            x + this.goButton.width / 2,
            y + this.goButton.height / 2,
            'GO',
            {
                fontSize: '40px',
                color: '#ffffff'
            }
        )
        .setOrigin(0.5);
    
        this.goButton.on(
            'pointerdown',
            () => {
                if (!this.isSelectionComplete()) {
                    return;
                }
    
                this.startDrill();
            }
        );
    
        this.updateGoButton();
    }

    isSelectionComplete() {
        return Object.values(this.selection)
            .every(value => value !== null);
    }

    updateGoButton() {
        const enabled =
            this.isSelectionComplete();
    
        this.goButton.setFillStyle(
            enabled ? 0x008000 : 0x333333
        );
        
        this.goButtonText.setColor(
            enabled ? '#ffffff' : '#666666'
        );
    
        if (enabled) {
            this.goButton.setInteractive();
        }
        else {
            this.goButton.disableInteractive();
        }
    }

    startDrill() {
        
        switch (this.selection.call) {
        
            case 'identifyingVersesDrill':
                this.scene.start('IdentifyingVersesDrillScene', this.selection);
                break;
        
            case 'scriptureSearchingDrill':
                this.scene.start('ScriptureSearchingDrillScene', this.selection);
                break;
        
            case 'doctrinalDril':
                this.scene.start('DoctrinalDrilScene', this.selection);
                break;
                
            case 'bibleAnswersDrill':
                this.scene.start('BibleAnswersDrill', this.selection);
                break;
                
            case 'bookDrill':
                this.scene.start('BookDrillScene', this.selection);
                break;
        }
    }
}