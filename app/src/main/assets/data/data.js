// ../data/data.js

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

export function colors() {
    return [
        { id: 'red', text: 'Red' },
        { id: "green", text: 'Green' },
        { id: 'blue', text: 'Blue' }
    ];
}

export function callData() {
    return [
        // Children
        {
            id: 'completionCall',
            text: 'Completion Call',
            group: 'children'
        },
        {
            id: 'quotationCall',
            text: 'Quotation Call',
            group: 'children'
        },
        {
            id: 'keyPassagesCall',
            text: 'Key Passages Call',
            group: 'children'
        },
        {
            id: 'bookCall',
            text: 'Book Call',
            group: 'children'
        },
        // Youth
        {
            id: 'identifyingVersesDrill',
            text: 'Identifying Verses Drill',
            group: 'youth'
        },
        {
            id: 'scriptureSearchingDrill',
            text: 'Scripture Searching Drill',
            group: 'youth'
        },
        {
            id: 'doctrinalDril',
            text: 'Doctrinal Dril',
            group: 'youth'
        },
        {
            id: 'bibleAnswersDrill',
            text: 'Bible Answers Drill',
            group: 'youth'
        },
        {
            id: 'bookDrill',
            text: 'Book Drill',
            group: 'youth'
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