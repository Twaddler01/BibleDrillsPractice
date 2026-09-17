// ./scenes/YouthScene.js
import * as data from '../data/data.js';
import DialogWarn from '../ui/DialogWarn.js';

export default class YouthScene extends Phaser.Scene {

    constructor() {
        super('YouthScene');

    }

    init(selection) {
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

        this.createHeader();
        this.createSwitchGroup();
        
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
    }

    createSwitchGroup() {
        const button =
            this.add.rectangle(
                this.width / 2,
                this.currentY,
                this.width / 2,
                40,
                0x800000
            )
            .setOrigin(0.5)
            .setInteractive();

        const text =
            addText(this,
                button.x,
                button.y,
                'Switch to Children\'s Drills',
                {
                    fontSize: '24px',
                    color: '#ffffff'
                }
            )
            .setOrigin(0.5);
            
            button.on(
                'pointerdown',
                () => {
                    this.switchDrill(button);
                }
            );
            
        this.currentY += button.height + 20;
    }

    switchDrill(button) {
        
        button.disableInteractive();
        
        this.switchDialog =
            new DialogWarn(
                this,
                {
                    onWarn:
                        'Are you sure you want to switch to Children\'s Drills?',

                    onConfirm: () => {
                        this.confirmSwitch(button);
                    },

                    onCancel: () => {
                        this.cancelSwitch(button);
                    }
                }
            );
    }

    confirmSwitch(button) {
        if (this.switchDialog) {
            this.switchDialog.destroy();
            this.switchDialog = null;
        }
        
        this.selection.call = null;
        this.selection.groupText = 'Children\'s ';
        this.scene.start('ChildrenScene', this.selection);

        button.setInteractive();
    }

    cancelSwitch(button) {
        if (this.switchDialog) {
            this.switchDialog.destroy();
            this.switchDialog = null;
        }
        
        button.setInteractive();
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
            'Youth Bible Drills',
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

        this.currentY = currentY + buttonH;
    }

    // ==================================================
    // PRACTICE TYPE
    // ==================================================

    practiceTypeUI() {
        const GAP = 40;
        let currentY = this.currentY + GAP;
        
        const spacerY = currentY;
        // Spacer
        this.add.rectangle(
            10,
            spacerY,
            this.width - 20,
            1,
            0x777777
        )
        .setOrigin(0);

        const typeTitle = addText(this,
            20,
            currentY + GAP,
            'Practice Type:',
            {
                fontSize: '36px',
                color: '#ffffff'
            }
        )
        .setOrigin(0);
        
        // Get actual rendered top
        const bounds = typeTitle.getBounds();
        
        // Move it so its ACTUAL top is exactly 40px below spacer
        typeTitle.y += (spacerY + 40) - bounds.top;
    
        currentY += typeTitle.height + GAP + 20;
  
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