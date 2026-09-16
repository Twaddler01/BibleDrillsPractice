// ./scenes/BootScene.js
import * as fn from '../data/data.js';

export default class BootScene extends Phaser.Scene {

    constructor() {
        super('BootScene');

        // Selections
        this.selection = {
            groupText: null,
            version: null,
            color: null,
            call: null
        };
    }

    create() {

        this.width = this.scale.width;
        this.height = this.scale.height;

        // Background
        this.add.rectangle(
            0,
            0,
            this.width,
            this.height,
            0x111111
        )
        .setOrigin(0);

        const banner = this.add.rectangle(
            0,
            0,
            this.width,
            80,
            0xffffff
        )
        .setOrigin(0);

         addText(this,
            banner.x + banner.width / 2,
            banner.y + banner.height / 2,
            'Bible Drills Practice',
            {
                fontSize: '50px',
                color: '#000000'
            }
        )
        .setOrigin(0.5, 0.5);

        // Title
        addText(
            this,
            this.width / 2,
            this.height * 0.3,
            'Choose Drill Type:',
            {
                fontSize: '50px',
                color: '#ffffff'
            }
        )
        .setOrigin(0.5, 0);

        // Children button
        const childrenButton = addText(
            this,
            this.width / 2,
            this.height * 0.45,
            'Children',
            {
                fontSize: '40px',
                color: '#ffffff',
                backgroundColor: '#555555',
                padding: {
                    x: 30,
                    y: 15
                }
            }
        )
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true });

        childrenButton.on('pointerdown', () => {
            this.selection.groupText = 'Children\'s ';
            this.scene.start('ChildrenScene', this.selection);
        });

        addText(this,
            this.width / 2,
            childrenButton.y + childrenButton.height / 2 + 10,
            'Grades 4, 5 and 6',
            {
                fontSize: '24px',
                color: '#ffffff',
            }
        )
        .setOrigin(0.5, 0);

        // Youth button
        const youthButton = addText(
            this,
            this.width / 2,
            this.height * 0.60,
            'Youth',
            {
                fontSize: '40px',
                color: '#ffffff',
                backgroundColor: '#555555',
                padding: {
                    x: 30,
                    y: 15
                }
            }
        )
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true });

        youthButton.on('pointerdown', () => {
            this.selection.groupText = 'Youth ';
            this.scene.start('YouthScene', this.selection);
        });

        addText(this,
            this.width / 2,
            youthButton.y + youthButton.height / 2 + 10,
            'Grades 7, 8 and 9',
            {
                fontSize: '24px',
                color: '#ffffff',
            }
        )
        .setOrigin(0.5, 0);
        
        /*fn.openExternalPage(
            'https://www.biblegateway.com/passage/?search=' +
            encodeURIComponent('John 3:16') +
            '&version=CSB'
        );*/

    }
}