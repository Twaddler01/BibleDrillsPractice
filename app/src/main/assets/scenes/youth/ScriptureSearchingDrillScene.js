// ./scenes/youth/ScriptureSearchingDrillScene.js.js
import * as fn from '../../data/data.js';
import DrillLayout from '../../ui/DrillLayout.js';

export default class ScriptureSearchingDrillScene extends Phaser.Scene {

    constructor() {
        super('ScriptureSearchingDrillScene');
        
        this.refText = null;
        this.verseText = null;
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
        
                    getDrillData: async () => {
                        return [
                            await this.getRandomVerse()
                        ];
                    },
        
                    createContent: () => {
                        this.createDrillUI();
                    },
        
                    updateContent: (
                        currentDrill,
                        showAnswer
                    ) => {
                        this.updateDrillUI(
                            currentDrill,
                            showAnswer
                        );
                    },
        
                    onStartOver: () => {
                        this.scene.start('YouthScene', this.selection);
                    },
                    
                    timeInSeconds: 8,
                    
                    getNextDrill: () => {
                        return this.getRandomVerse();
                    },
                    
                    maxDrills: 10
                }
            );
        
        this.drillLayout.start();
    }

    async getRandomVerse() {
        const data = await fn.getRandomKJVVerse();
        
        // Remove any new line characters from API
        data[0].verse =
            data[0].verse.replace(/\s*\n\s*/g, ' ');

        //console.log(`Ref: ${data[0].ref}`);
        //console.log(`Verse: ${data[0].verse}`);

        return data[0];
    }

    createDrillUI() {
        const startY =
            this.drillLayout.bottomY;
    
        this.refText =
            addText(
                this,
                20,
                startY,
                '',
                {
                    fontSize: '30px',
                    color: '#ffffff',
                    wordWrap: {
                        width: this.width - 40
                    }
                }
            )
            .setOrigin(0);
    
        this.verseText =
            addText(
                this,
                20,
                startY + 80,
                '',
                {
                    fontSize: '30px',
                    color: '#ffff00',
                    wordWrap: {
                        width: this.width - 40
                    }
                }
            )
            .setOrigin(0);
    }

    updateDrillUI(currentDrill, showAnswer) {
        const csb = this.selection.version === 'csb';
        
        this.refText.setText(
            currentDrill.ref
        );

        this.verseText.setVisible(
            showAnswer
        );

        // Remove previous CSB click handler
        this.verseText.off('pointerdown');

        if (csb) {
            const url = 
                'https://www.biblegateway.com/passage/?search=' +
                encodeURIComponent(currentDrill.ref) +
                '&version=CSB';
            
            this.verseText.setText('VIEW CSB VERSE');
            this.verseText.setInteractive();
            this.verseText.on(
                'pointerdown',
                () => {
                    fn.openExternalPage(url);
                }
            );
            return;
        }

        this.verseText.setText(
            currentDrill.verse
        );
    }

}