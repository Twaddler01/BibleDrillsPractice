// ../data/data.js

export function callData() {
    return [
        {
            id: 'completionCall',
            text: 'Completion Call'
        },
        {
            id: 'quotationCall',
            text: 'Quotation Call'
        },
        {
            id: 'keyPassagesCall',
            text: 'Key Passages Call'
        },
        {
            id: 'bookCall',
            text: 'Book Call'
        }
    ];
}


export function versionData() {
    return [
        {
            id: 'kjv',
            text: 'KJV'
        },
        {
            id: 'csb',
            text: 'CSB'
        }
    ];
}

export function getBooks(section) {

    const otBooks = [
        'Genesis',
        'Exodus',
        'Leviticus',
        'Numbers',
        'Deuteronomy',
        'Joshua',
        'Judges',
        'Ruth',
        '1 Samuel',
        '2 Samuel',
        '1 Kings',
        '2 Kings',
        '1 Chronicles',
        '2 Chronicles',
        'Ezra',
        'Nehemiah',
        'Esther',
        'Job',
        'Psalms',
        'Proverbs',
        'Ecclesiastes',
        'Song of Solomon',
        'Isaiah',
        'Jeremiah',
        'Lamentations',
        'Ezekiel',
        'Daniel',
        'Hosea',
        'Joel',
        'Amos',
        'Obadiah',
        'Jonah',
        'Micah',
        'Nahum',
        'Habakkuk',
        'Zephaniah',
        'Haggai',
        'Zechariah',
        'Malachi'
    ];

    const ntBooks = [
        'Matthew',
        'Mark',
        'Luke',
        'John',
        'Acts',
        'Romans',
        '1 Corinthians',
        '2 Corinthians',
        'Galatians',
        'Ephesians',
        'Philippians',
        'Colossians',
        '1 Thessalonians',
        '2 Thessalonians',
        '1 Timothy',
        '2 Timothy',
        'Titus',
        'Philemon',
        'Hebrews',
        'James',
        '1 Peter',
        '2 Peter',
        '1 John',
        '2 John',
        '3 John',
        'Jude',
        'Revelation'
    ];

    if (section === 'ot') {
        return otBooks;
    }

    if (section === 'nt') {
        return ntBooks;
    }

    return [
        ...otBooks,
        ...ntBooks
    ];
}