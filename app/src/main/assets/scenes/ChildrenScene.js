// ./scenes/ChildrenScene.js
import * as data from '../data/data.js';

export default class ChildrenScene extends Phaser.Scene {

    constructor() {
        super('ChildrenScene');
        
    }

    init(selection = {}) {
        this.selection = {
            groupText: selection.groupText ?? null,
            version: selection.version ?? null,
            color: selection.color ?? null,
            call: null
        };
    }

    create() {
        
        this.currentY = 0;

        // UI references
        this.versionUI = {};
        this.colorUI = {};
        this.callUI = {};

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
        
        if (this.selection.version) {
            this.setVersion(this.selection.version);
        }
        
        if (this.selection.color) {
            this.setColor(this.selection.color);
        }
        
        this.createSwitchGroup();
    }

    createSwitchGroup() {
        const button =
            this.add.rectangle(
                this.width / 2,
                this.height - 50,
                this.width / 1.5,
                60,
                0x800000
            )
            .setOrigin(0.5)
            .setInteractive();

        const text =
            addText(this,
                button.x,
                button.y,
                'Switch to Youth Drills',
                {
                    fontSize: '24px',
                    color: '#ffffff'
                }
            )
            .setOrigin(0.5);
            
            button.on(
                'pointerdown',
                () => {
                    this.selection.call = null;
                    this.selection.groupText = 'Youth ';
                    this.scene.start('YouthScene', this.selection);
                }
            );
    }

    createHeader() {
        const banner = this.add.rectangle(
            0,
            0,
            this.width,
            80,
            0xffffff
        )
        .setOrigin(0);

         const gameTitle = addText(this,
            banner.x + banner.width / 2,
            banner.y + banner.height / 2,
            'Bible Drills Practice',
            {
                fontSize: '50px',
                color: '#000000'
            }
        )
        .setOrigin(0.5, 0.5);

        const catTitle = addText(
            this,
            this.width / 2,
            20 + gameTitle.height + 20,
            'Children\'s Bible Drills',
            {
                fontSize: '50px',
                color: '#ffffff'
            }
        )
        .setOrigin(0.5, 0);
        
        this.currentY = catTitle.y + catTitle.height + 40;
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
        
        this.changeVersionX = buttonX;
        this.changeVersionY = buttonY + buttonH;

        this.currentY =
            buttonY +
            buttonH;
    }

    setVersion(id) {
        this.setSelection(id, {
            ui: this.versionUI,
            key: 'version',
            disableOthers: true,
            edit: true
        });
    }
    
    setColor(id) {
        this.setSelection(id, {
            ui: this.colorUI,
            key: 'color',
            disableOthers: true,
            edit: true
        });
    }
    
    setCall(id) {
        this.setSelection(id, {
            ui: this.callUI,
            key: 'call'
        });
    }

    setSelection(id, options = {}) {
        const {
            ui,
            key,
            disableOthers = false,
            edit = false
        } = options;
    
        this.selection[key] = id;
    
        Object.entries(ui).forEach(([itemId, itemUI]) => {
    
            const selected = itemId === id;
    
            if (selected) {
                itemUI.bg.setFillStyle(0x008000);
                itemUI.text.setText(`✓ ${itemUI.data.text}`);
                itemUI.text.setColor('#ffffff');
            }
            else {
                itemUI.bg.setFillStyle(0x555555);
                itemUI.text.setText(itemUI.data.text);
                itemUI.text.setColor('#ffffff');
    
                if (disableOthers) {
                    itemUI.bg.disableInteractive();
                    itemUI.bg.setFillStyle(0x333333);
                    itemUI.text.setColor('#666666');
                }
            }
        });
    
        if (edit && key === 'version') {
            this.changeVersionText = this.createEditButton(
                'version',
                this.changeVersionX + 20,
                this.changeVersionY - 45,
                () => this.resetVersion()
            );
        }
        
        if (edit && key === 'color') {
            this.changeColorText = this.createEditButton(
                'color',
                this.changeColorX + 20,
                this.changeColorY - 45,
                () => this.resetColor()
            );
        }
    
        this.updateGoButton();
    }

    resetSelection(ui, key) {
    
        this.selection[key] = null;
    
        Object.values(ui).forEach(itemUI => {
            itemUI.bg.setFillStyle(0x555555);
            itemUI.bg.setInteractive();
            itemUI.text.setText(itemUI.data.text);
            itemUI.text.setColor('#ffffff');
        });
    
        this.updateGoButton();
    }

    resetVersion() {
        this.resetSelection(this.versionUI, 'version');
    }
    
    resetColor() {
        this.resetSelection(this.colorUI, 'color');
    }

    createEditButton(key, x, y, resetFunction) {
        const bg =
            this.add.rectangle(
                x,
                y,
                70,
                30,
                0x800000
            )
            .setOrigin(0)
            .setInteractive();
                
        const text = addText(
            this,
            bg.x + bg.width / 2,
            bg.y + bg.height / 2,
            'EDIT',
            {
                fontSize: '18px',
                color: '#ffffff'
            }
        )
        .setOrigin(0.5, 0.5)
        .setInteractive();
    
        text.on('pointerdown', () => {
            bg.destroy();
            text.destroy();
            resetFunction();
        });
    
        return text;
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
        
        this.changeColorX = currentX;
        this.changeColorY = buttonY + buttonH;

        this.currentY = currentY + buttonH + 20;
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
            this.width / 2 - 40;
    
        const buttonH = 60;
        const gap = 20;
    
        const callData = data.callData().filter(i => i.group === 'children');
    
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
                            fontSize: '24px',
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

    createGoButton() {
        const x = 20;
        const y = this.currentY + 40;

        this.goButton =
            this.add.rectangle(
                x,
                y,
                150,
                60,
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
        if (!this.goButton || !this.goButtonText) {
            return;
        }

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
}