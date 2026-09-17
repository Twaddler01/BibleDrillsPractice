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

// ==================================================
// CHILDREN DATA
// ==================================================

export function childrenVersesData() {
    return [
      {
        "verse_ul": "And God saw every thing",
        "verse": " that he had made, and, behold, it was very good. And the evening and the morning were the sixth day.",
        "ref": "Genesis 1:31",
        "color": "blue",
        "vers": "kjv"
      },
      {
        "verse_ul": "Every man shall give as he is able",
        "verse": ", according to the blessing of the LORD thy God which he hath given thee.",
        "ref": "Deuteronomy 16:17",
        "color": "blue",
        "vers": "kjv"
      },
      {
        "verse_ul": "And the people said unto Joshua",
        "verse": ", The LORD our God will we serve, and his voice will we obey.",
        "ref": "Joshua 24:24",
        "color": "blue",
        "vers": "kjv"
      },
      {
        "verse_ul": "Sing unto him, sing psalms",
        "verse": " unto him, talk ye of all his wondrous works.",
        "ref": "1 Chronicles 16:9",
        "color": "blue",
        "vers": "kjv"
      },
      {
        "verse_ul": "What time I am afraid",
        "verse": ", I will trust in thee.",
        "ref": "Psalm 56:3",
        "color": "blue",
        "vers": "kjv"
      },
      {
        "verse_ul": "Thy word have I hid",
        "verse": " in mine heart, that I might not sin against thee.",
        "ref": "Psalm 119:11",
        "color": "blue",
        "vers": "kjv"
      },
      {
        "verse_ul": "A good name",
        "verse": " is rather to be chosen than great riches, and loving favour rather than silver and gold.",
        "ref": "Proverbs 22:1",
        "color": "blue",
        "vers": "kjv"
      },
      {
        "verse_ul": "Also I heard the voice",
        "verse": " of the LORD, saying, Whom shall I send, and who will go for us? Then said I, Here am I; send me.",
        "ref": "Isaiah 6:8",
        "color": "blue",
        "vers": "kjv"
      },
      {
        "verse_ul": "I am the LORD",
        "verse": ", and there is none else, there is no God beside me: I girded thee, though thou hast not known me:",
        "ref": "Isaiah 45:5",
        "color": "blue",
        "vers": "kjv"
      },
      {
        "verse_ul": "Bring ye all the tithes",
        "verse": " into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the LORD of hosts, if I will not open you the windows of heaven, and pour you out a blessing, that there shall not be room enough to receive it.",
        "ref": "Malachi 3:10",
        "color": "blue",
        "vers": "kjv"
      },
      {
        "verse_ul": "Go ye therefore, and teach all nations",
        "verse": ", baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen.",
        "ref": "Matthew 28:19-20",
        "color": "blue",
        "vers": "kjv"
      },
      {
        "verse_ul": "And Jesus increased",
        "verse": " in wisdom and stature, and in favour with God and man.",
        "ref": "Luke 2:52",
        "color": "blue",
        "vers": "kjv"
      },
      {
        "verse_ul": "For the Son of man",
        "verse": " is come to seek and to save that which was lost.",
        "ref": "Luke 19:10",
        "color": "blue",
        "vers": "kjv"
      },
      {
        "verse_ul": "God is a Spirit:",
        "verse": " and they that worship him must worship him in spirit and in truth.",
        "ref": "John 4:24",
        "color": "blue",
        "vers": "kjv"
      },
      {
        "verse_ul": "By this shall all men know",
        "verse": " that ye are my disciples, if ye have love one to another.",
        "ref": "John 13:35",
        "color": "blue",
        "vers": "kjv"
      },
      {
        "verse_ul": "Neither is there salvation in any other:",
        "verse": " for there is none other name under heaven given among men, whereby we must be saved.",
        "ref": "Acts 4:12",
        "color": "blue",
        "vers": "kjv"
      },
      {
        "verse_ul": "That if thou shalt confess with thy mouth the Lord Jesus",
        "verse": ", and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.",
        "ref": "Romans 10:9",
        "color": "blue",
        "vers": "kjv"
      },
      {
        "verse_ul": "Know ye not",
        "verse": " that ye are the temple of God, and that the Spirit of God dwelleth in you?",
        "ref": "1 Corinthians 3:16",
        "color": "blue",
        "vers": "kjv"
      },
      {
        "verse_ul": "For by grace",
        "verse": " are ye saved through faith; and that not of yourselves: it is the gift of God:",
        "ref": "Ephesians 2:8",
        "color": "blue",
        "vers": "kjv"
      },
      {
        "verse_ul": "In every thing give thanks:",
        "verse": " for this is the will of God in Christ Jesus concerning you.",
        "ref": "1 Thessalonians 5:18",
        "color": "blue",
        "vers": "kjv"
      },
      {
        "verse_ul": "Let no man despise",
        "verse": " thy youth; but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity.",
        "ref": "1 Timothy 4:12",
        "color": "blue",
        "vers": "kjv"
      },
      {
        "verse_ul": "Study to shew",
        "verse": " thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.",
        "ref": "2 Timothy 2:15",
        "color": "blue",
        "vers": "kjv"
      },
      {
        "verse_ul": "But be ye doers",
        "verse": " of the word, and not hearers only, deceiving your own selves.",
        "ref": "James 1:22",
        "color": "blue",
        "vers": "kjv"
      },
      {
        "verse_ul": "Use hospitality",
        "verse": " one to another without grudging.",
        "ref": "1 Peter 4:9",
        "color": "blue",
        "vers": "kjv"
      },
      {
        "verse_ul": "And this commandment have we from him",
        "verse": ", That he who loveth God love his brother also.",
        "ref": "1 John 4:21",
        "color": "blue",
        "vers": "kjv"
      },
      {
        "verse_ul": "God saw all",
        "verse": " that he had made, and it was very good indeed. Evening came and then morning: the sixth day.",
        "ref": "Genesis 1:31",
        "color": "blue",
        "vers": "csb"
      },
      {
        "verse_ul": "Everyone must appear with a gift suited to his means",
        "verse": ", according to the blessing the lord your God has given you.",
        "ref": "Deuteronomy 16:17",
        "color": "blue",
        "vers": "csb"
      },
      {
        "verse_ul": "So the people said to Joshua",
        "verse": ", “We will worship the lord our God and obey him.”",
        "ref": "Joshua 24:24",
        "color": "blue",
        "vers": "csb"
      },
      {
        "verse_ul": "Sing to him; sing praise",
        "verse": " to him; tell about all his wondrous works!",
        "ref": "1 Chronicles 16:9",
        "color": "blue",
        "vers": "csb"
      },
      {
        "verse_ul": "When I am afraid",
        "verse": ", I will trust in you.",
        "ref": "Psalm 56:3",
        "color": "blue",
        "vers": "csb"
      },
      {
        "verse_ul": "I have treasured your word",
        "verse": " in my heart so that I may not sin against you.",
        "ref": "Psalm 119:11",
        "color": "blue",
        "vers": "csb"
      },
      {
        "verse_ul": "A good name",
        "verse": " is to be chosen over great wealth; favor is better than silver and gold.",
        "ref": "Proverbs 22:1",
        "color": "blue",
        "vers": "csb"
      },
      {
        "verse_ul": "Then I heard the voice",
        "verse": " of the Lord asking: Who will I send? Who will go for us? I said: Here I am. Send me.",
        "ref": "Isaiah 6:8",
        "color": "blue",
        "vers": "csb"
      },
      {
        "verse_ul": "I am the Lord",
        "verse": ", and there is no other; there is no God but me. I will strengthen you, though you do not know me,",
        "ref": "Isaiah 45:5",
        "color": "blue",
        "vers": "csb"
      },
      {
        "verse_ul": "Bring the full tenth",
        "verse": " into the storehouse so that there may be food in my house. Test me in this way,” says the lord of Armies. “See if I will not open the floodgates of heaven and pour out a blessing for you without measure.",
        "ref": "Malachi 3:10",
        "color": "blue",
        "vers": "csb"
      },
      {
        "verse_ul": "Go, therefore, and make disciples of all nations",
        "verse": ", baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe everything I have commanded you. And remember, I am with you always, to the end of the age.”",
        "ref": "Matthew 28:19-20",
        "color": "blue",
        "vers": "csb"
      },
      {
        "verse_ul": "And Jesus increased",
        "verse": " in wisdom and stature, and in favor with God and with people.",
        "ref": "Luke 2:52",
        "color": "blue",
        "vers": "csb"
      },
      {
        "verse_ul": "For the Son of Man",
        "verse": " has come to seek and to save the lost.”",
        "ref": "Luke 19:10",
        "color": "blue",
        "vers": "csb"
      },
      {
        "verse_ul": "God is spirit",
        "verse": ", and those who worship him must worship in Spirit and in truth.”",
        "ref": "John 4:24",
        "color": "blue",
        "vers": "csb"
      },
      {
        "verse_ul": "By this everyone will know",
        "verse": " that you are my disciples, if you love one another.”",
        "ref": "John 13:35",
        "color": "blue",
        "vers": "csb"
      },
      {
        "verse_ul": "There is salvation in no one else",
        "verse": ", for there is no other name under heaven given to people by which we must be saved.”",
        "ref": "Acts 4:12",
        "color": "blue",
        "vers": "csb"
      },
      {
        "verse_ul": "If you confess with your mouth",
        "verse": ", “Jesus is Lord,” and believe in your heart that God raised him from the dead, you will be saved.",
        "ref": "Romans 10:9",
        "color": "blue",
        "vers": "csb"
      },
      {
        "verse_ul": "Don’t you yourselves know",
        "verse": " that you are God’s temple and that the Spirit of God lives in you?",
        "ref": "1 Corinthians 3:16",
        "color": "blue",
        "vers": "csb"
      },
      {
        "verse_ul": "For you are saved by grace",
        "verse": " through faith, and this is not from yourselves; it is God’s gift –",
        "ref": "Ephesians 2:8",
        "color": "blue",
        "vers": "csb"
      },
      {
        "verse_ul": "Give thanks in everything;",
        "verse": " for this is God’s will for you in Christ Jesus.",
        "ref": "1 Thessalonians 5:18",
        "color": "blue",
        "vers": "csb"
      },
      {
        "verse_ul": "Don’t let anyone despise your youth",
        "verse": ", but set an example for the believers in speech, in conduct, in love, in faith, and in purity.",
        "ref": "1 Timothy 4:12",
        "color": "blue",
        "vers": "csb"
      },
      {
        "verse_ul": "Be diligent to present",
        "verse": " yourself to God as one approved, a worker who doesn’t need to be ashamed, correctly teaching the word of truth.",
        "ref": "2 Timothy 2:15",
        "color": "blue",
        "vers": "csb"
      },
      {
        "verse_ul": "But be doers",
        "verse": " of the word and not hearers only, deceiving yourselves.",
        "ref": "James 1:22",
        "color": "blue",
        "vers": "csb"
      },
      {
        "verse_ul": "Be hospitable",
        "verse": " to one another without complaining.",
        "ref": "1 Peter 4:9",
        "color": "blue",
        "vers": "csb"
      },
      {
        "verse_ul": "And we have this command from him:",
        "verse": " The one who loves God must also love his brother and sister.",
        "ref": "1 John 4:21",
        "color": "blue",
        "vers": "csb"
      },
      {
        "verse_ul": "In the beginning",
        "verse": " God created the heaven and the earth.",
        "ref": "Genesis 1:1",
        "color": "green",
        "vers": "kjv"
      },
      {
        "verse_ul": "Honour thy father",
        "verse": " and thy mother: that thy days may be long upon the land which the Lord thy God giveth thee.",
        "ref": "Exodus 20:12",
        "color": "green",
        "vers": "kjv"
      },
      {
        "verse_ul": "This is the day which the Lord hath made;",
        "verse": " we will rejoice and be glad in it.",
        "ref": "Psalm 118:24",
        "color": "green",
        "vers": "kjv"
      },
      {
        "verse_ul": "Thy word is a lamp unto my feet",
        "verse": ", and a light unto my path.",
        "ref": "Psalm 119:105",
        "color": "green",
        "vers": "kjv"
      },
      {
        "verse_ul": "Trust in the Lord with all thine heart;",
        "verse": " and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.",
        "ref": "Proverbs 3:5-6",
        "color": "green",
        "vers": "kjv"
      },
      {
        "verse_ul": "A soft answer turneth away wrath:",
        "verse": " but grievous words stir up anger.",
        "ref": "Proverbs 15:1",
        "color": "green",
        "vers": "kjv"
      },
      {
        "verse_ul": "For unto us a child is born, unto us a son is given:",
        "verse": " and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.",
        "ref": "Isaiah 9:6",
        "color": "green",
        "vers": "kjv"
      },
      {
        "verse_ul": "The grass withereth",
        "verse": ", the flower fadeth: but the word of our God shall stand for ever.",
        "ref": "Isaiah 40:8",
        "color": "green",
        "vers": "kjv"
      },
      {
        "verse_ul": "The Lord is good",
        "verse": ", a strong hold in the day of trouble; and he knoweth them that trust in him.",
        "ref": "Nahum 1:7",
        "color": "green",
        "vers": "kjv"
      },
      {
        "verse_ul": "Then saith Jesus unto him, Get thee hence, Satan: for it is written",
        "verse": ", Thou shalt worship the Lord thy God, and him only shalt thou serve.",
        "ref": "Matthew 4:10",
        "color": "green",
        "vers": "kjv"
      },
      {
        "verse_ul": "Let your light so shine",
        "verse": " before men, that they may see your good works, and glorify your Father which is in heaven.",
        "ref": "Matthew 5:16",
        "color": "green",
        "vers": "kjv"
      },
      {
        "verse_ul": "Judge not, and ye shall not be judged:",
        "verse": " condemn not, and ye shall not be condemned: forgive, and ye shall be forgiven.",
        "ref": "Luke 6:37",
        "color": "green",
        "vers": "kjv"
      },
      {
        "verse_ul": "And I say unto you, Ask, and it shall be given you;",
        "verse": " seek, and ye shall find; knock, and it shall be opened unto you.",
        "ref": "Luke 11:9",
        "color": "green",
        "vers": "kjv"
      },
      {
        "verse_ul": "For God so loved the world",
        "verse": ", that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
        "ref": "John 3:16",
        "color": "green",
        "vers": "kjv"
      },
      {
        "verse_ul": "This is my commandment",
        "verse": ", That ye love one another, as I have loved you.",
        "ref": "John 15:12",
        "color": "green",
        "vers": "kjv"
      },
      {
        "verse_ul": "And they said, Believe on the Lord Jesus Christ",
        "verse": ", and thou shalt be saved, and thy house.",
        "ref": "Acts 16:31",
        "color": "green",
        "vers": "kjv"
      },
      {
        "verse_ul": "I beseech you therefore, brethren, by the mercies of God",
        "verse": ", that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service.",
        "ref": "Romans 12:1",
        "color": "green",
        "vers": "kjv"
      },
      {
        "verse_ul": "And we know that all things work together for good",
        "verse": " to them that love God, to them who are the called according to his purpose.",
        "ref": "Romans 8:28",
        "color": "green",
        "vers": "kjv"
      },
      {
        "verse_ul": "Moreover it is required",
        "verse": " in stewards, that a man be found faithful.",
        "ref": "1 Corinthians 4:2",
        "color": "green",
        "vers": "kjv"
      },
      {
        "verse_ul": "And be ye kind one to another, tenderhearted",
        "verse": ", forgiving one another, even as God for Christ’s sake hath forgiven you.",
        "ref": "Ephesians 4:32",
        "color": "green",
        "vers": "kjv"
      },
      {
        "verse_ul": "And whatsoever ye do",
        "verse": ", do it heartily, as to the Lord, and not unto men.",
        "ref": "Colossians 3:23",
        "color": "green",
        "vers": "kjv"
      },
      {
        "verse_ul": "For God hath not given us the spirit of fear;",
        "verse": " but of power, and of love, and of a sound mind.",
        "ref": "2 Timothy 1:7",
        "color": "green",
        "vers": "kjv"
      },
      {
        "verse_ul": "All scripture is given by inspiration of God",
        "verse": ", and is profitable for doctrine, for reproof, for correction, for instruction in righteousness.",
        "ref": "2 Timothy 3:16",
        "color": "green",
        "vers": "kjv"
      },
      {
        "verse_ul": "If we confess our sins",
        "verse": ", he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.",
        "ref": "1 John 1:9",
        "color": "green",
        "vers": "kjv"
      },
      {
        "verse_ul": "Thou art worthy, O Lord",
        "verse": ", to receive glory and honour and power: for thou has created all things, and for thy pleasure they are and were created.",
        "ref": "Revelation 4:11",
        "color": "green",
        "vers": "kjv"
      },
      {
        "verse_ul": "In the beginning",
        "verse": ", God created the heavens and the earth.",
        "ref": "Genesis 1:1",
        "color": "green",
        "vers": "csb"
      },
      {
        "verse_ul": "Honor your father",
        "verse": " and your mother so that you may have a long life in the land that the LORD your God is giving you.",
        "ref": "Exodus 20:12",
        "color": "green",
        "vers": "csb"
      },
      {
        "verse_ul": "This is the day the LORD has made",
        "verse": "; let us rejoice and be glad in it.",
        "ref": "Psalm 118:24",
        "color": "green",
        "vers": "csb"
      },
      {
        "verse_ul": "Your word is a lamp for my feet",
        "verse": " and a light on my path.",
        "ref": "Psalm 119:105",
        "color": "green",
        "vers": "csb"
      },
      {
        "verse_ul": "Trust in the LORD with all your heart",
        "verse": ", and do not rely on your own understanding; in all your ways know him, and he will make your paths straight.",
        "ref": "Proverbs 3:5-6",
        "color": "green",
        "vers": "csb"
      },
      {
        "verse_ul": "A gentle answer turns away anger",
        "verse": ", but a harsh word stirs up wrath.",
        "ref": "Proverbs 15:1",
        "color": "green",
        "vers": "csb"
      },
      {
        "verse_ul": "For a child will be born for us, a son will be given to us",
        "verse": ", and the government will be on his shoulders. He will be named Wonderful Counselor, Mighty God, Eternal Father, Prince of Peace.",
        "ref": "Isaiah 9:6",
        "color": "green",
        "vers": "csb"
      },
      {
        "verse_ul": "The grass withers",
        "verse": ", the flower fades, but the word of our God remains forever.",
        "ref": "Isaiah 40:8",
        "color": "green",
        "vers": "csb"
      },
      {
        "verse_ul": "The Lord is good",
        "verse": ", a stronghold in a day of distress; he cares for those who take refuge in him.",
        "ref": "Nahum 1:7",
        "color": "green",
        "vers": "csb"
      },
      {
        "verse_ul": "Then Jesus told him, “Go away, Satan! For it is written",
        "verse": ": Worship the Lord your God, and serve only him.”",
        "ref": "Matthew 4:10",
        "color": "green",
        "vers": "csb"
      },
      {
        "verse_ul": "In the same way, let your light shine",
        "verse": " before others, so that they may see your good works and give glory to your Father in heaven.",
        "ref": "Matthew 5:16",
        "color": "green",
        "vers": "csb"
      },
      {
        "verse_ul": "Do not judge, and you will not be judged",
        "verse": ". Do not condemn, and you will not be condemned. Forgive, and you will be forgiven.",
        "ref": "Luke 6:37",
        "color": "green",
        "vers": "csb"
      },
      {
        "verse_ul": "So I say to you, ask, and it will be given to you",
        "verse": ". Seek, and you will find. Knock, and the door will be opened to you.",
        "ref": "Luke 11:9",
        "color": "green",
        "vers": "csb"
      },
      {
        "verse_ul": "For God so loved the world in this way",
        "verse": ": He gave his one and only Son, so that everyone who believes in him will not perish but have eternal life.",
        "ref": "John 3:16",
        "color": "green",
        "vers": "csb"
      },
      {
        "verse_ul": "This is my command",
        "verse": ": Love one another as I have loved you.",
        "ref": "John 15:12",
        "color": "green",
        "vers": "csb"
      },
      {
        "verse_ul": "They said, \"Believe in the Lord Jesus",
        "verse": ", and you will be saved - you and your household.\"",
        "ref": "Acts 16:31",
        "color": "green",
        "vers": "csb"
      },
      {
        "verse_ul": "We know that all things work together for the good of those who love God",
        "verse": ", who are called according to his purpose.",
        "ref": "Romans 8:28",
        "color": "green",
        "vers": "csb"
      },
      {
        "verse_ul": "Therefore, brothers and sisters, in view of the mercies of God",
        "verse": ", I urge you to present your bodies as a living sacrifice, holy and pleasing to God; this is your true worship.",
        "ref": "Romans 12:1",
        "color": "green",
        "vers": "csb"
      },
      {
        "verse_ul": "In this regard, it is required",
        "verse": " that managers be found faithful.",
        "ref": "1 Corinthians 4:2",
        "color": "green",
        "vers": "csb"
      },
      {
        "verse_ul": "And be kind and compassionate to one another",
        "verse": ", forgiving one another, just as God also forgave you in Christ.",
        "ref": "Ephesians 4:32",
        "color": "green",
        "vers": "csb"
      },
      {
        "verse_ul": "Whatever you do",
        "verse": ", do it from the heart, as something done for the Lord and not for people.",
        "ref": "Colossians 3:23",
        "color": "green",
        "vers": "csb"
      },
      {
        "verse_ul": "For God has not given us a spirit of fear",
        "verse": ", but one of power, love, and sound judgment.",
        "ref": "2 Timothy 1:7",
        "color": "green",
        "vers": "csb"
      },
      {
        "verse_ul": "All Scripture is inspired by God",
        "verse": " and is profitable for teaching, for rebuking, for correcting, for training in righteousness.",
        "ref": "2 Timothy 3:16",
        "color": "green",
        "vers": "csb"
      },
      {
        "verse_ul": "If we confess our sins",
        "verse": ", he is faithful and righteous to forgive us our sins and to cleanse us from all unrighteousness.",
        "ref": "1 John 1:9",
        "color": "green",
        "vers": "csb"
      },
      {
        "verse_ul": "Our Lord and God, you are worthy",
        "verse": " to receive glory and honor and power, because you have created all things, and by your will they exist and were created.",
        "ref": "Revelation 4:11",
        "color": "green",
        "vers": "csb"
      },
      {
        "verse_ul": "So God created man in his own image",
        "verse": ", in the image of God created he him; male and female created he them.",
        "ref": "Genesis 1:27",
        "color": "red",
        "vers": "kjv"
      },
      {
        "verse_ul": "Therefore shall ye keep my commandments",
        "verse": ", and do them: I am the LORD.",
        "ref": "Leviticus 22:31",
        "color": "red",
        "vers": "kjv"
      },
      {
        "verse_ul": "And thou shalt love the LORD thy God",
        "verse": " with all thine heart, and with all thy soul, and with all thy might.",
        "ref": "Deuteronomy 6:5",
        "color": "red",
        "vers": "kjv"
      },
      {
        "verse_ul": "Give thanks unto the LORD",
        "verse": ", call upon his name, make known his deeds among the people.",
        "ref": "1 Chronicles 16:8",
        "color": "red",
        "vers": "kjv"
      },
      {
        "verse_ul": "Hearken unto this, O Job",
        "verse": ": stand still, and consider the wondrous works of God.",
        "ref": "Job 37:14",
        "color": "red",
        "vers": "kjv"
      },
      {
        "verse_ul": "Let the words of my mouth",
        "verse": ", and the meditation of my heart, be acceptable in thy sight, O LORD, my strength, and my redeemer.",
        "ref": "Psalm 19:14",
        "color": "red",
        "vers": "kjv"
      },
      {
        "verse_ul": "Hear my prayer, O God",
        "verse": "; give ear to the words of my mouth.",
        "ref": "Psalm 54:2",
        "color": "red",
        "vers": "kjv"
      },
      {
        "verse_ul": "The LORD is good to all",
        "verse": ": and his tender mercies are over all his works.",
        "ref": "Psalm 145:9",
        "color": "red",
        "vers": "kjv"
      },
      {
        "verse_ul": "Hear instruction",
        "verse": ", and be wise, and refuse it not.",
        "ref": "Proverbs 8:33",
        "color": "red",
        "vers": "kjv"
      },
      {
        "verse_ul": "Even a child is known",
        "verse": " by his doings, whether his work be pure, and whether it be right.",
        "ref": "Proverbs 20:11",
        "color": "red",
        "vers": "kjv"
      },
      {
        "verse_ul": "He hath shewed thee, O man, what is good",
        "verse": "; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?",
        "ref": "Micah 6:8",
        "color": "red",
        "vers": "kjv"
      },
      {
        "verse_ul": "But I say unto you, Love your enemies",
        "verse": ", bless them that curse you, do good to them that hate you, and pray for them which despitefully use you, and persecute you.",
        "ref": "Matthew 5:44",
        "color": "red",
        "vers": "kjv"
      },
      {
        "verse_ul": "And all things, whatsoever ye",
        "verse": " shall ask in prayer, believing, ye shall receive.",
        "ref": "Matthew 21:22",
        "color": "red",
        "vers": "kjv"
      },
      {
        "verse_ul": "Heaven and earth shall pass",
        "verse": " away: but my words shall not pass away.",
        "ref": "Mark 13:31",
        "color": "red",
        "vers": "kjv"
      },
      {
        "verse_ul": "And as ye would that men",
        "verse": " should do to you, do ye also to them likewise.",
        "ref": "Luke 6:31",
        "color": "red",
        "vers": "kjv"
      },
      {
        "verse_ul": "And ye shall know",
        "verse": " the truth, and the truth shall make you free.",
        "ref": "John 8:32",
        "color": "red",
        "vers": "kjv"
      },
      {
        "verse_ul": "Greater love hath no man",
        "verse": " than this, that a man lay down his life for his friends.",
        "ref": "John 15:13",
        "color": "red",
        "vers": "kjv"
      },
      {
        "verse_ul": "But ye shall receive power",
        "verse": ", after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judea, and in Samaria, and unto the uttermost part of the earth.",
        "ref": "Acts 1:8",
        "color": "red",
        "vers": "kjv"
      },
      {
        "verse_ul": "So then every one of us",
        "verse": " shall give account of himself to God.",
        "ref": "Romans 14:12",
        "color": "red",
        "vers": "kjv"
      },
      {
        "verse_ul": "Whether therefore ye eat",
        "verse": ", or drink, or whatsoever ye do, do all to the glory of God.",
        "ref": "1 Corinthians 10:31",
        "color": "red",
        "vers": "kjv"
      },
      {
        "verse_ul": "Let all things be",
        "verse": " done decently and in order.",
        "ref": "1 Corinthians 14:40",
        "color": "red",
        "vers": "kjv"
      },
      {
        "verse_ul": "Children, obey",
        "verse": " your parents in the Lord: for this is right.",
        "ref": "Ephesians 6:1",
        "color": "red",
        "vers": "kjv"
      },
      {
        "verse_ul": "I can do all things",
        "verse": " through Christ which strengtheneth me.",
        "ref": "Philippians 4:13",
        "color": "red",
        "vers": "kjv"
      },
      {
        "verse_ul": "Wherefore, my beloved brethren, let every man be",
        "verse": " swift to hear, slow to speak, slow to wrath.",
        "ref": "James 1:19",
        "color": "red",
        "vers": "kjv"
      },
      {
        "verse_ul": "We love him",
        "verse": ", because he first loved us.",
        "ref": "1 John 4:19",
        "color": "red",
        "vers": "kjv"
      },
      {
        "verse_ul": "So God created man in his own image",
        "verse": "; he created him in the image of God; he created them male and female.",
        "ref": "Genesis 1:27",
        "color": "red",
        "vers": "csb"
      },
      {
        "verse_ul": "“You are to keep my commands",
        "verse": " and do them; I am the LORD.”",
        "ref": "Leviticus 22:31",
        "color": "red",
        "vers": "csb"
      },
      {
        "verse_ul": "“Love the LORD your God",
        "verse": " with all your heart, with all your soul, and with all your strength.”",
        "ref": "Deuteronomy 6:5",
        "color": "red",
        "vers": "csb"
      },
      {
        "verse_ul": "Give thanks to the LORD",
        "verse": "; call on his name; proclaim his deeds among the peoples.",
        "ref": "1 Chronicles 16:8",
        "color": "red",
        "vers": "csb"
      },
      {
        "verse_ul": "Listen to this, Job",
        "verse": ". Stop and consider God’s wonders.",
        "ref": "Job 37:14",
        "color": "red",
        "vers": "csb"
      },
      {
        "verse_ul": "May the words of my mouth",
        "verse": " and the meditation of my heart be acceptable to you, LORD, my rock and my Redeemer.",
        "ref": "Psalm 19:14",
        "color": "red",
        "vers": "csb"
      },
      {
        "verse_ul": "God, hear my prayer",
        "verse": "; listen to the words from my mouth.",
        "ref": "Psalm 54:2",
        "color": "red",
        "vers": "csb"
      },
      {
        "verse_ul": "The LORD is good to everyone",
        "verse": "; his compassion rests on all he has made.",
        "ref": "Psalm 145:9",
        "color": "red",
        "vers": "csb"
      },
      {
        "verse_ul": "Listen to instruction",
        "verse": " and be wise; don’t ignore it.",
        "ref": "Proverbs 8:33",
        "color": "red",
        "vers": "csb"
      },
      {
        "verse_ul": "Even a young man is known",
        "verse": " by his actions - by whether his behavior is pure and upright.",
        "ref": "Proverbs 20:11",
        "color": "red",
        "vers": "csb"
      },
      {
        "verse_ul": "Mankind, he has told each of you what is good",
        "verse": " and what it is the LORD requires of you: to act justly, to love faithfulness, and to walk humbly with your God.",
        "ref": "Micah 6:8",
        "color": "red",
        "vers": "csb"
      },
      {
        "verse_ul": "“But I tell you, love your enemies",
        "verse": " and pray for those who persecute you,”",
        "ref": "Matthew 5:44",
        "color": "red",
        "vers": "csb"
      },
      {
        "verse_ul": "“And if you believe, you will",
        "verse": " receive whatever you ask for in prayer.”",
        "ref": "Matthew 21:22",
        "color": "red",
        "vers": "csb"
      },
      {
        "verse_ul": "“Heaven and earth will pass",
        "verse": " away, but my words will never pass away.”",
        "ref": "Mark 13:31",
        "color": "red",
        "vers": "csb"
      },
      {
        "verse_ul": "“Just as you want others",
        "verse": " to do for you, do the same for them.”",
        "ref": "Luke 6:31",
        "color": "red",
        "vers": "csb"
      },
      {
        "verse_ul": "“You will know",
        "verse": " the truth, and the truth will set you free.”",
        "ref": "John 8:32",
        "color": "red",
        "vers": "csb"
      },
      {
        "verse_ul": "“No one has greater love",
        "verse": " than this: to lay down his life for his friends.”",
        "ref": "John 15:13",
        "color": "red",
        "vers": "csb"
      },
      {
        "verse_ul": "“But you will receive power",
        "verse": " when the Holy Spirit has come on you, and you will be my witnesses in Jerusalem, in all Judea and Samaria, and to the end of the earth.”",
        "ref": "Acts 1:8",
        "color": "red",
        "vers": "csb"
      },
      {
        "verse_ul": "So then, each of us",
        "verse": " will give an account of himself to God. ",
        "ref": "Romans 14:12",
        "color": "red",
        "vers": "csb"
      },
      {
        "verse_ul": "So, whether you eat",
        "verse": " or drink, or whatever you do, do everything for the glory of God.",
        "ref": "1 Corinthians 10:31",
        "color": "red",
        "vers": "csb"
      },
      {
        "verse_ul": "But everything is to be",
        "verse": " done decently and in order.",
        "ref": "1 Corinthians 14:40",
        "color": "red",
        "vers": "csb"
      },
      {
        "verse_ul": "Children, obey",
        "verse": " your parents in the Lord, because this is right.",
        "ref": "Ephesians 6:1",
        "color": "red",
        "vers": "csb"
      },
      {
        "verse_ul": "I am able to do all things",
        "verse": " through him who strengthens me.",
        "ref": "Philippians 4:13",
        "color": "red",
        "vers": "csb"
      },
      {
        "verse_ul": "My dear brothers and sisters, understand this: Everyone should be",
        "verse": " quick to listen, slow to speak, and slow to anger,",
        "ref": "James 1:19",
        "color": "red",
        "vers": "csb"
      },
      {
        "verse_ul": "We love",
        "verse": " because he first loved us.",
        "ref": "1 John 4:19",
        "color": "red",
        "vers": "csb"
      }
    ];
}

export function childrenKeyPassagesData() {
        return [
      {
        "name": "God\'s Covenant with Abraham",
        "ref": "Genesis 12:1-3",
        "color": "blue"
      },
      {
        "name": "A Shepherd\'s Song",
        "ref": "Psalm 23",
        "color": "blue"
      },
      {
        "name": "The Suffering Servant",
        "ref": "Isaiah 53",
        "color": "blue"
      },
      {
        "name": "The Twelve Apostles",
        "ref": "Matthew 10:2-4",
        "color": "blue"
      },
      {
        "name": "The Resurrection of Jesus",
        "ref": "Matthew 28",
        "color": "blue"
      },
      {
        "name": "The parable of the Good Samaritan",
        "ref": "Luke 10:25-37",
        "color": "blue"
      },
      {
        "name": "Jesus\' First Miracle",
        "ref": "John 2:1-11",
        "color": "blue"
      },
      {
        "name": "The Work of the Holy Spirit",
        "ref": "John 16:5-15",
        "color": "blue"
      },
      {
        "name": "The Conversion of Saul",
        "ref": "Acts 9:1-30",
        "color": "blue"
      },
      {
        "name": "The Love Chapter",
        "ref": "1 Corinthians 13",
        "color": "blue"
      },
      {
        "name": "The Ten Commandments",
        "ref": "Exodus 20:3-17",
        "color": "green"
      },
      {
        "name": "A Psalm of Praise",
        "ref": "Psalm 100",
        "color": "green"
      },
      {
        "name": "The Greatness of God",
        "ref": "Isaiah 40",
        "color": "green"
      },
      {
        "name": "The Temptation of Jesus",
        "ref": "Matthew 4:1-11",
        "color": "green"
      },
      {
        "name": "The Sermon on the Mount",
        "ref": "Matthew 5-7",
        "color": "green"
      },
      {
        "name": "The Parable of the Sower",
        "ref": "Mark 4:1-20",
        "color": "green"
      },
      {
        "name": "The First Lord\'s Supper",
        "ref": "Luke 22:15-20",
        "color": "green"
      },
      {
        "name": "Jesus and Nicodemus",
        "ref": "John 3:1-21",
        "color": "green"
      },
      {
        "name": "The Crucifixion",
        "ref": "John 19",
        "color": "green"
      },
      {
        "name": "The Faith Chapter",
        "ref": "Hebrews 11",
        "color": "green"
      },
      {
        "name": "The Creation",
        "ref": "Genesis 1–2:3",
        "color": "red"
      },
      {
        "name": "The Israelites Leave Egypt",
        "ref": "Exodus 12:37-42",
        "color": "red"
      },
      {
        "name": "A Prayer for Forgiveness",
        "ref": "Psalm 51",
        "color": "red"
      },
      {
        "name": "The Baptism of Jesus",
        "ref": "Matthew 3:13-17",
        "color": "red"
      },
      {
        "name": "The Model Prayer",
        "ref": "Matthew 6:5-15",
        "color": "red"
      },
      {
        "name": "The Great Commandments",
        "ref": "Mark 12:28-34",
        "color": "red"
      },
      {
        "name": "The Birth of Jesus",
        "ref": "Luke 2:1-7",
        "color": "red"
      },
      {
        "name": "The Parable of the Prodigal Son",
        "ref": "Luke 15:11-32",
        "color": "red"
      },
      {
        "name": "The Comfort Chapter",
        "ref": "John 14",
        "color": "red"
      },
      {
        "name": "The Christian’s Armor",
        "ref": "Ephesians 6:10-20",
        "color": "red"
      }
    ];
}

// ==================================================
// YOUTH DATA
// ==================================================

export function youth_IdentifyingVerses() {
    return [
        {
            vers: 'kjv',
            color: 'red',
            verse_ul: '...then ye shall be a peculiar treasure...',
            answer: 'Now therefore, if ye will obey my voice indeed, and keep my covenant, then ye shall be a peculiar treasure unto me above all people: for all the earth is mine:',
            ref: 'Exodus 19:5'
        },
        {
            vers: 'kjv',
            color: 'red',
            verse_ul: '...Trust in him at all times...',
            answer: 'Trust in him at all times; ye people, pour out your heart before him: God is a refuge for us. Selah.',
            ref: 'Psalm 62:8'
        },
        {
            vers: 'kjv',
            color: 'red',
            verse_ul: '...I will put my law in their inward parts...',
            answer: 'But this shall be the covenant that I will make with the house of Israel; After those days, saith the Lord, I will put my law in their inward parts, and write it in their hearts; and will be their God, and they shall be my people.',
            ref: 'Jeremiah 31:33'
        },
        {
            vers: 'kjv',
            color: 'red',
            verse_ul: '...Take no thought for your life...',
            answer: 'And he said unto his disciples, Therefore I say unto you, Take no thought for your life, what ye shall eat; neither for the body, what ye shall put on. The life is more than meat, and the body is more than raiment.',
            ref: 'Luke 12:22-23'
        },
        {
            vers: 'kjv',
            color: 'red',
            verse_ul: '...I am the resurrection, and the life...',
            answer: 'Jesus said unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live:',
            ref: 'John 11:25'
        },
        {
            vers: 'kjv',
            color: 'red',
            verse_ul: '...Therefore, my beloved brethren, be ye stedfast...',
            answer: 'Therefore, my beloved brethren, be ye stedfast, unmoveable, always abounding in the work of the Lord, forasmuch as ye know that your labour is not in vain in the Lord.',
            ref: '1 Corinthians 15:58'
        },
        {
            vers: 'kjv',
            color: 'red',
            verse_ul: '...against such there is no law...',
            answer: 'But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, Meekness, temperance: against such there is no law.',
            ref: 'Galatians 5:22-23'
        },
        {
            vers: 'kjv',
            color: 'red',
            verse_ul: '...Let this mind be in you, which was also in Christ Jesus...',
            answer: 'Let this mind be in you, which was also in Christ Jesus: Who, being in the form of God, thought it not robbery to be equal with God: But made himself of no reputation, and took upon him the form of a servant, and was made in the likeness of men.',
            ref: 'Philippians 2:5-7'
        },
        {
            vers: 'kjv',
            color: 'red',
            verse_ul: '...seek those things which are above...',
            answer: 'If ye then be risen with Christ, seek those things which are above, where Christ sitteth on the right hand of God. Set your affection on things above, not on things on the earth.',
            ref: 'Colossians 3:1-2'
        },
        {
            vers: 'kjv',
            color: 'red',
            verse_ul: '...But let us, who are of the day...',
            answer: 'But let us, who are of the day, be sober, putting on the breastplate of faith and love; and for an helmet, the hope of salvation. For God hath not appointed us to wrath, but to obtain salvation by our Lord Jesus Christ,',
            ref: '1 Thessalonians 5:8-9'
        },
        {
            vers: 'csb',
            color: 'red',
            verse_ul: '...you will be my own possession out of all the peoples...',
            answer: 'Now if you will carefully listen to me and keep my covenant, you will be my own possession out of all the peoples, although the whole earth is mine,',
            ref: 'Exodus 19:5'
        },
        {
            vers: 'csb',
            color: 'red',
            verse_ul: '...Trust in him at all times...',
            answer: 'Trust in him at all times, you people; pour out your hearts before him. God is our refuge. Selah.',
            ref: 'Psalm 62:8'
        },
        {
            vers: 'csb',
            color: 'red',
            verse_ul: '...I will put my teaching within them...',
            answer: '“Instead, this is the covenant I will make with the house of Israel after those days”—the LORD’s declaration. “I will put my teaching within them and write it on their hearts. I will be their God, and they will be my people.',
            ref: 'Jeremiah 31:33'
        },
        {
            vers: 'csb',
            color: 'red',
            verse_ul: '...don’t worry about your life...',
            answer: 'Then he said to his disciples: “Therefore I tell you, don’t worry about your life, what you will eat; or about the body, what you will wear. For life is more than food and the body more than clothing.',
            ref: 'Luke 12:22-23'
        },
        {
            vers: 'csb',
            color: 'red',
            verse_ul: '...I am the resurrection and the life...',
            answer: 'Jesus said to her, “I am the resurrection and the life. The one who believes in me, even if he dies, will live.',
            ref: 'John 11:25'
        },
        {
            vers: 'csb',
            color: 'red',
            verse_ul: '...Therefore, my dear brothers and sisters, be steadfast...',
            answer: 'Therefore, my dear brothers and sisters, be steadfast, immovable, always excelling in the Lord’s work, because you know that your labor in the Lord is not in vain.',
            ref: '1 Corinthians 15:58'
        },
        {
            vers: 'csb',
            color: 'red',
            verse_ul: '...The law is not against such things...',
            answer: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control. The law is not against such things.',
            ref: 'Galatians 5:22-23'
        },
        {
            vers: 'csb',
            color: 'red',
            verse_ul: '...Adopt the same attitude as that of Christ Jesus...',
            answer: 'Adopt the same attitude as that of Christ Jesus, who, existing in the form of God, did not consider equality with God as something to be exploited. Instead he emptied himself by assuming the form of a servant, taking on the likeness of humanity.',
            ref: 'Philippians 2:5-7a'
        },
        {
            vers: 'csb',
            color: 'red',
            verse_ul: '...seek the things above...',
            answer: 'So if you have been raised with Christ, seek the things above, where Christ is, seated at the right hand of God. Set your minds on things above, not on earthly things.',
            ref: 'Colossians 3:1-2'
        },
        {
            vers: 'csb',
            color: 'red',
            verse_ul: '...But since we belong to the day...',
            answer: 'But since we belong to the day, let us be self-controlled and put on the armor of faith and love, and a helmet of the hope of salvation. For God did not appoint us to wrath, but to obtain salvation through our Lord Jesus Christ,',
            ref: '1 Thessalonians 5:8-9'
        },
// No ul available
        {
            vers: 'kjv',
            color: 'green',
            verse_ul: '... Joshua 24:15',
            answer: 'And if it seem evil unto you to serve the Lord, choose you this day whom ye will serve; whether the gods which your fathers served that were on the other side of the flood, or the gods of the Amorites, in whose land ye dwell: but as for me and my house, we will serve the Lord.',
            ref: 'Joshua 24:15'
        },
        {
            vers: 'kjv',
            color: 'green',
            verse_ul: '... Psalm 37:4-5',
            answer: 'Delight thyself also in the Lord; and he shall give thee the desires of thine heart. Commit thy way unto the Lord; trust also in him; and he shall bring it to pass.',
            ref: 'Psalm 37:4-5'
        },
        {
            vers: 'kjv',
            color: 'green',
            verse_ul: '... Isaiah 14:24',
            answer: 'The Lord of hosts hath sworn, saying, Surely as I have thought, so shall it come to pass; and as I have purposed, so shall it stand.',
            ref: 'Isaiah 14:24'
        },
        {
            vers: 'kjv',
            color: 'green',
            verse_ul: '... Hosea 6:6',
            answer: 'For I desired mercy, and not sacrifice; and the knowledge of God more than burnt offerings.',
            ref: 'Hosea 6:6'
        },
        {
            vers: 'kjv',
            color: 'green',
            verse_ul: '... Matthew 7:21',
            answer: 'Not every one that saith unto me, Lord, Lord, shall enter into the kingdom of heaven; but he that doeth the will of my Father which is in heaven.',
            ref: 'Matthew 7:21'
        },
        {
            vers: 'kjv',
            color: 'green',
            verse_ul: '... John 16:33',
            answer: 'These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world.',
            ref: 'John 16:33'
        },
        {
            vers: 'kjv',
            color: 'green',
            verse_ul: '... Galatians 4:4-5',
            answer: 'But when the fulness of the time was come, God sent forth his Son, made of a woman, made under the law, To redeem them that were under the law, that we might receive the adoption of sons.',
            ref: 'Galatians 4:4-5'
        },
        {
            vers: 'kjv',
            color: 'green',
            verse_ul: '... Philippians 1:6',
            answer: 'Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ.',
            ref: 'Philippians 1:6'
        },
        {
            vers: 'kjv',
            color: 'green',
            verse_ul: '... Colossians 3:17',
            answer: 'And whatsoever ye do in word or deed, do all in the name of the Lord Jesus, giving thanks to God and the Father by him.',
            ref: 'Colossians 3:17'
        },
        {
            vers: 'kjv',
            color: 'green',
            verse_ul: '... Hebrews 12:28',
            answer: 'Wherefore we receiving a kingdom which cannot be moved, let us have grace, whereby we may serve God acceptably with reverence and godly fear.',
            ref: 'Hebrews 12:28'
        },
// No ul available
        {
            vers: 'csb',
            color: 'green',
            verse_ul: '... Joshua 24:15',
            answer: '“But if it doesn’t please you to worship the LORD, choose for yourselves today: Which will you worship – the gods your fathers worshiped beyond the Euphrates River or the gods of the Amorites in whose land you are living? As for me and my family, we will worship the LORD.”',
            ref: 'Joshua 24:15'
        },
        {
            vers: 'csb',
            color: 'green',
            verse_ul: '... Psalm 37:4-5',
            answer: 'Take delight in the LORD, and he will give you your heart’s desires. Commit your way to the LORD; trust in him, and he will act,',
            ref: 'Psalm 37:4-5'
        },
        {
            vers: 'csb',
            color: 'green',
            verse_ul: '... Isaiah 14:24',
            answer: 'The LORD of Armies has sworn: As I have purposed, so it will be; as I have planned it, so it will happen.',
            ref: 'Isaiah 14:24'
        },
        {
            vers: 'csb',
            color: 'green',
            verse_ul: '... Hosea 6:6',
            answer: 'For I desire faithful love and not sacrifice, the knowledge of God rather than burnt offerings.',
            ref: 'Hosea 6:6'
        },
        {
            vers: 'csb',
            color: 'green',
            verse_ul: '... Matthew 7:21',
            answer: '“Not everyone who says to me, ‘Lord, Lord,’ will enter the kingdom of heaven, but only the one who does the will of my Father in heaven.”',
            ref: 'Matthew 7:21'
        },
        {
            vers: 'csb',
            color: 'green',
            verse_ul: '... John 16:33',
            answer: '“I have told you these things so that in me you may have peace. You will have suffering in this world. Be courageous! I have conquered the world."',
            ref: 'John 16:33'
        },
        {
            vers: 'csb',
            color: 'green',
            verse_ul: '... Galatians 4:4-5',
            answer: 'When the time came to completion, God sent his Son, born of a woman, born under the law, to redeem those under the law, so that we might receive adoption as sons.',
            ref: 'Galatians 4:4-5'
        },
        {
            vers: 'csb',
            color: 'green',
            verse_ul: '... Philippians 1:6',
            answer: 'I am sure of this, that he who started a good work in you will carry it on to completion until the day of Christ Jesus.',
            ref: 'Philippians 1:6'
        },
        {
            vers: 'csb',
            color: 'green',
            verse_ul: '... Colossians 3:17',
            answer: 'And whatever you do, in word or in deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him.',
            ref: 'Colossians 3:17'
        },
        {
            vers: 'csb',
            color: 'green',
            verse_ul: '... Hebrews 12:28',
            answer: 'Therefore, since we are receiving a kingdom that cannot be shaken, let us be thankful. By it, we may serve God acceptably, with reverence and awe,',
            ref: 'Hebrews 12:28'
        },
// No ul available
        {
            vers: 'kjv',
            color: 'blue',
            verse_ul: '... Job 19:25',
            answer: 'For I know that my redeemer liveth, and that he shall stand at the latter day upon the earth.',
            ref: 'Job 19:25'
        },
        {
            vers: 'kjv',
            color: 'blue',
            verse_ul: '... Psalm 139:14',
            answer: 'I will praise thee; for I am fearfully and wonderfully made: marvellous are thy works; and that my soul knoweth right well.',
            ref: 'Psalm 139:14'
        },
        {
            vers: 'kjv',
            color: 'blue',
            verse_ul: '... Isaiah 40:31',
            answer: 'But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.',
            ref: 'Isaiah 40:31'
        },
        {
            vers: 'kjv',
            color: 'blue',
            verse_ul: '... Luke 9:23',
            answer: 'And he said to them all, If any man will come after me, let him deny himself, and take up his cross daily, and follow me.',
            ref: 'Luke 9:23'
        },
        {
            vers: 'kjv',
            color: 'blue',
            verse_ul: '... Acts 20:32',
            answer: 'And now, brethren, I commend you to God, and to the word of his grace, which is able to build you up, and to give you an inheritance among all them which are sanctified.',
            ref: 'Acts 20:32'
        },
        {
            vers: 'kjv',
            color: 'blue',
            verse_ul: '... Romans 6:23',
            answer: 'For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.',
            ref: 'Romans 6:23'
        },
        {
            vers: 'kjv',
            color: 'blue',
            verse_ul: '... Philippians 1:27',
            answer: 'Only let your conversation be as it be-cometh the gospel of Christ: that whether I come and see you, or else be absent, I may hear of your affairs, that ye stand fast in one spirit, with one mind striving together for the faith of the gospel;',
            ref: 'Philippians 1:27'
        },
        {
            vers: 'kjv',
            color: 'blue',
            verse_ul: '... Colossians 2:8',
            answer: 'Beware lest any man spoil you through philosophy and vain deceit, after the tradition of men, after the rudiments of the world, and not after Christ.',
            ref: 'Colossians 2:8'
        },
        {
            vers: 'kjv',
            color: 'blue',
            verse_ul: '... Hebrews 11:6',
            answer: 'But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.',
            ref: 'Hebrews 11:6'
        },
        {
            vers: 'kjv',
            color: 'blue',
            verse_ul: '... Revelation 1:8',
            answer: 'I am Alpha and Omega, the beginning and the ending, saith the Lord, which is, and which was, and which is to come, the Almighty.',
            ref: 'Revelation 1:8'
        },
// No ul available
        {
            vers: 'csb',
            color: 'blue',
            verse_ul: '... Job 19:25',
            answer: 'But I know that my Redeemer lives, and at the end he will stand on the dust.',
            ref: 'Job 19:25'
        },
        {
            vers: 'csb',
            color: 'blue',
            verse_ul: '... Psalm 139:14',
            answer: 'I will praise you because I have been remarkably and wondrously made. Your works are wondrous, and I know this very well.',
            ref: 'Psalm 139:14'
        },
        {
            vers: 'csb',
            color: 'blue',
            verse_ul: '... Isaiah 40:31',
            answer: 'but those who trust in the LORD will renew their strength; they will soar on wings like eagles; they will run and not become weary, they will walk and not faint.',
            ref: 'Isaiah 40:31'
        },
        {
            vers: 'csb',
            color: 'blue',
            verse_ul: '... Luke 9:23',
            answer: 'Then he said to them all, “If anyone wants to follow after me, let him deny himself, take up his cross daily, and follow me.',
            ref: 'Luke 9:23'
        },
        {
            vers: 'csb',
            color: 'blue',
            verse_ul: '... Acts 20:32',
            answer: '"And now I commit you to God and to the word of his grace, which is able to build you up and to give you an inheritance among all who are sanctified.',
            ref: 'Acts 20:32'
        },
        {
            vers: 'csb',
            color: 'blue',
            verse_ul: '... Romans 6:23',
            answer: 'For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.',
            ref: 'Romans 6:23'
        },
        {
            vers: 'csb',
            color: 'blue',
            verse_ul: '... Philippians 1:27',
            answer: 'Just one thing: As citizens of heaven, live your life worthy of the gospel of Christ. Then, whether I come and see you or am absent, I will hear about you that you are standing firm in one spirit, in one accord, contending together for the faith of the gospel.',
            ref: 'Philippians 1:27'
        },
        {
            vers: 'csb',
            color: 'blue',
            verse_ul: '... Colossians 2:8',
            answer: 'Be careful that no one takes you captive through philosophy and empty deceit based on human tradition, based on the elements of the world, rather than Christ.',
            ref: 'Colossians 2:8'
        },
        {
            vers: 'csb',
            color: 'blue',
            verse_ul: '... Hebrews 11:6',
            answer: 'Now without faith it is impossible to please God, since the one who draws near to him must believe that he exists and that he rewards those who seek him.',
            ref: 'Hebrews 11:6'
        },
        {
            vers: 'csb',
            color: 'blue',
            verse_ul: '... Revelation 1:8',
            answer: '"I am the Alpha and the Omega," says the Lord God, "the one who is, who was, and who is to come, the Almighty."',
            ref: 'Revelation 1:8'
        }
    ];
}

export function youth_bibleAnswersVerses() {
    return [
        {
            vers: 'kjv',
            color: 'red',
            question: 'AM I ALONE?',
            answer: 'Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.',
            ref: 'Joshua 1:9'
        },
        {
            vers: 'kjv',
            color: 'red',
            question: 'WHO SHOULD I TRUST?',
            answer: 'Trust ye in the Lord for ever: for in the LORD JEHOVAH is everlasting strength:',
            ref: 'Isaiah 26:4'
        },
        {
            vers: 'kjv',
            color: 'red',
            question: 'WHAT ARE THE RESULTS OF SEEKING GOOD?',
            answer: 'Seek good, and not evil, that ye may live: and so the LORD, the God of hosts, shall be with you, as ye have spoken.',
            ref: 'Amos 5:14'
        },
        {
            vers: 'kjv',
            color: 'red',
            question: 'WHAT DOES JESUS REQUIRE OF ME?',
            answer: 'Then said Jesus unto his disciples, If any man will come after me, let him deny himself, and take up his cross, and follow me.',
            ref: 'Matthew 16:24'
        },
        {
            vers: 'kjv',
            color: 'red',
            question: 'HOW DID GOD SHOW HIS LOVE TO ME?',
            answer: 'But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.',
            ref: 'Romans 5:8'
        },
        {
            vers: 'kjv',
            color: 'red',
            question: 'WHO LIVES IN ME?',
            answer: 'I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me: and the life which I now live in the flesh I live by the faith of the Son of God, who loved me, and gave himself for me.',
            ref: 'Galatians 2:20'
        },
        {
            vers: 'kjv',
            color: 'red',
            question: 'WHO DID CHRIST JESUS COME TO SAVE?',
            answer: 'This is a faithful saying, and worthy of all acceptation, that Christ Jesus came into the world to save sinners; of whom I am chief.',
            ref: '1 Timothy 1:15'
        },
        {
            vers: 'kjv',
            color: 'red',
            question: 'HOW CAN I RESIST THE DEVIL?',
            answer: 'Submit yourselves therefore to God. Resist the devil, and he will flee from you.',
            ref: 'James 4:7'
        },
        {
            vers: 'kjv',
            color: 'red',
            question: 'HOW CAN I MINISTER TO OTHERS?',
            answer: 'As every man hath received the gift, even so minister the same one to another, as good stewards of the manifold grace of God.',
            ref: '1 Peter 4:10'
        },
        {
            vers: 'kjv',
            color: 'red',
            question: 'WHO IS JESUS?',
            answer: 'Whosoever shall confess that Jesus is the Son of God, God dwelleth in him, and he in God.',
            ref: '1 John 4:15'
        },
        {
            vers: 'csb',
            color: 'red',
            question: 'AM I ALONE?',
            answer: 'Haven’t I commanded you: be strong and courageous? Do not be afraid or discouraged, for the LORD your God is with you wherever you go.”',
            ref: 'Joshua 1:9'
        },
        {
            vers: 'csb',
            color: 'red',
            question: 'WHO SHOULD I TRUST?',
            answer: 'Trust in the LORD forever, because in the LORD, the LORD himself, is an everlasting rock!',
            ref: 'Isaiah 26:4'
        },
        {
            vers: 'csb',
            color: 'red',
            question: 'WHAT ARE THE RESULTS OF SEEKING GOOD?',
            answer: 'Pursue good and not evil so that you may live, and the LORD, the God of Armies, will be with you as you have claimed.',
            ref: 'Amos 5:14'
        },
        {
            vers: 'csb',
            color: 'red',
            question: 'WHAT DOES JESUS REQUIRE OF ME?',
            answer: 'Then Jesus said to his disciples, “If anyone wants to follow after me, let him deny himself, take up his cross, and follow me.',
            ref: 'Matthew 16:24'
        },
        {
            vers: 'csb',
            color: 'red',
            question: 'HOW DID GOD SHOW HIS LOVE TO ME?',
            answer: 'But God proves his own love for us in that while we were still sinners, Christ died for us.',
            ref: 'Romans 5:8'
        },
        {
            vers: 'csb',
            color: 'red',
            question: 'WHO LIVES IN ME?',
            answer: 'I have been crucified with Christ, and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.',
            ref: 'Galatians 2:20'
        },
        {
            vers: 'csb',
            color: 'red',
            question: 'WHO DID CHRIST JESUS COME TO SAVE?',
            answer: 'This saying is trustworthy and deserving of full acceptance: “Christ Jesus came into the world to save sinners” - and I am the worst of them.',
            ref: '1 Timothy 1:15'
        },
        {
            vers: 'csb',
            color: 'red',
            question: 'HOW CAN I RESIST THE DEVIL?',
            answer: 'Therefore, submit to God. Resist the devil, and he will flee from you.',
            ref: 'James 4:7'
        },
        {
            vers: 'csb',
            color: 'red',
            question: 'HOW CAN I MINISTER TO OTHERS?',
            answer: 'Just as each one has received a gift, use it to serve others, as good stewards of the varied grace of God.',
            ref: '1 Peter 4:10'
        },
        {
            vers: 'csb',
            color: 'red',
            question: 'WHO IS JESUS?',
            answer: 'Whoever confesses that Jesus is the Son of God - God remains in him and he in God.',
            ref: '1 John 4:15'
        },
        {
            vers: 'kjv',
            color: 'green',
            question: 'WHO KNOWS MY HEART?',
            answer: 'Search me, O God, and know my heart: try me, and know my thoughts: And see if there be any wicked way in me, and lead me in the way everlasting.',
            ref: 'Psalm 139:23-24'
        },
        {
            vers: 'kjv',
            color: 'green',
            question: 'WHAT GOOD IS WISDOM?',
            answer: 'Happy is the man that findeth wisdom, and the man that getteth understanding.',
            ref: 'Proverbs 3:13'
        },
        {
            vers: 'kjv',
            color: 'green',
            question: 'WHAT SHOULD I SEEK?',
            answer: 'But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.',
            ref: 'Matthew 6:33'
        },
        {
            vers: 'kjv',
            color: 'green',
            question: 'HOW SHOULD I LOVE GOD?',
            answer: 'And he answering said, Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy strength, and with all thy mind; and thy neighbour as thyself.',
            ref: 'Luke 10:27'
        },
        {
            vers: 'kjv',
            color: 'green',
            question: 'HOW CAN I GET TO HEAVEN?',
            answer: 'Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.',
            ref: 'John 14:6'
        },
        {
            vers: 'kjv',
            color: 'green',
            question: 'WHO IS A SINNER?',
            answer: 'For all have sinned, and come short of the glory of God.',
            ref: 'Romans 3:23'
        },
        {
            vers: 'kjv',
            color: 'green',
            question: 'HOW SHOULD I TALK?',
            answer: 'Let no corrupt communication proceed out of your mouth, but that which is good to the use of edifying, that it may minister grace unto the hearers.',
            ref: 'Ephesians 4:29'
        },
        {
            vers: 'kjv',
            color: 'green',
            question: 'HOW DOES THE GOSPEL COME TO ME?',
            answer: 'For our gospel came not unto you in word only, but also in power, and in the Holy Ghost, and in much assurance; as ye know what manner of men we were among you for your sake.',
            ref: '1 Thessalonians 1:5'
        },
        {
            vers: 'kjv',
            color: 'green',
            question: 'WHAT CAN I OFFER GOD?',
            answer: 'By him therefore let us offer the sacrifice of praise to God continually, that is, the fruit of our lips giving thanks to his name.',
            ref: 'Hebrews 13:15'
        },
        {
            vers: 'kjv',
            color: 'green',
            question: 'HOW SHOULD I GROW?',
            answer: 'But grow in grace, and in the knowledge of our Lord and Saviour Jesus Christ. To him be glory both now and for ever. Amen.',
            ref: '2 Peter 3:18'
        },
        {
            vers: 'csb',
            color: 'green',
            question: 'WHO KNOWS MY HEART?',
            answer: 'Search me, God, and know my heart; test me and know my concerns. See if there is any offensive way in me; lead me in the everlasting way.',
            ref: 'Psalm 139:23-24'
        },
        {
            vers: 'csb',
            color: 'green',
            question: 'WHAT GOOD IS WISDOM?',
            answer: 'Happy is a man who finds wisdom and who acquires understanding,',
            ref: 'Proverbs 3:13'
        },
        {
            vers: 'csb',
            color: 'green',
            question: 'WHAT SHOULD I SEEK?',
            answer: 'But seek first the kingdom of God and his righteousness, and all these things will be provided for you.',
            ref: 'Matthew 6:33'
        },
        {
            vers: 'csb',
            color: 'green',
            question: 'HOW SHOULD I LOVE GOD?',
            answer: 'He answered, “Love the Lord your God with all your heart, with all your soul, with all your strength, and with all your mind;” and “your neighbor as yourself.”',
            ref: 'Luke 10:27'
        },
        {
            vers: 'csb',
            color: 'green',
            question: 'HOW CAN I GET TO HEAVEN?',
            answer: 'Jesus told him, “I am the way, the truth, and the life. No one comes to the Father except through me.”',
            ref: 'John 14:6'
        },
        {
            vers: 'csb',
            color: 'green',
            question: 'WHO IS A SINNER?',
            answer: 'For all have sinned and fall short of the glory of god.',
            ref: 'Romans 3:23'
        },
        {
            vers: 'csb',
            color: 'green',
            question: 'HOW SHOULD I TALK?',
            answer: 'No foul language should come from your mouth, but only what is good for building up someone in need, so that it gives grace to those who hear.',
            ref: 'Ephesians 4:29'
        },
        {
            vers: 'csb',
            color: 'green',
            question: 'HOW DOES THE GOSPEL COME TO ME?',
            answer: 'because our gospel did not come to you in word only, but also in power, in the Holy Spirit, and with full assurance. You know how we lived among you for your benefit,',
            ref: '1 Thessalonians 1:5'
        },
        {
            vers: 'csb',
            color: 'green',
            question: 'WHAT CAN I OFFER GOD?',
            answer: 'Therefore, through him let us continually offer up to God a sacrifice of praise, that is, the fruit of lips that confess his name.',
            ref: 'Hebrews 13:15'
        },
        {
            vers: 'csb',
            color: 'green',
            question: 'HOW SHOULD I GROW?',
            answer: 'But grow in the grace and knowledge of our Lord and Savior Jesus Christ. To him be the glory both now and to the day of eternity.',
            ref: '2 Peter 3:18'
        },
        {
            vers: 'kjv',
            color: 'blue',
            question: 'WHAT DOES GOD SAY ABOUT HOLINESS?',
            answer: 'And ye shall be holy unto me: for I the LORD am holy, and have severed you from other people, that ye should be mine.',
            ref: 'Leviticus 20:26'
        },
        {
            vers: 'kjv',
            color: 'blue',
            question: 'WHAT HAPPENS WHEN GOD’S PEOPLE PRAY?',
            answer: 'If my people, which are called by my name, shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear from heaven, and will forgive their sin, and will heal their land.',
            ref: '2 Chronicles 7:14'
        },
        {
            vers: 'kjv',
            color: 'blue',
            question: 'WHAT DOES GOD SAY ABOUT ALCOHOL?',
            answer: 'Wine is a mocker, strong drink is raging: and whosoever is deceived thereby is not wise.',
            ref: 'Proverbs 20:1'
        },
        {
            vers: 'kjv',
            color: 'blue',
            question: 'HOW SHOULD I TREAT OTHERS?',
            answer: 'And the King shall answer and say unto them, Verily I say unto you, Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me.',
            ref: 'Matthew 25:40'
        },
        {
            vers: 'kjv',
            color: 'blue',
            question: 'HOW CAN I BE SAVED?',
            answer: 'For whosoever shall call upon the name of the Lord shall be saved.',
            ref: 'Romans 10:13'
        },
        {
            vers: 'kjv',
            color: 'blue',
            question: 'WHAT CAN I LEARN FROM DIFFICULTIES?',
            answer: 'And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness. Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me.',
            ref: '2 Corinthians 12:9'
        },
        {
            vers: 'kjv',
            color: 'blue',
            question: 'HOW CAN I FIGHT THE DEVIL?',
            answer: 'Finally, my brethren, be strong in the Lord, and in the power of his might. Put on the whole armour of God, that ye may be able to stand against the wiles of the devil.',
            ref: 'Ephesians 6:10-11'
        },
        {
            vers: 'kjv',
            color: 'blue',
            question: 'WHAT THINGS SHOULD I THINK ABOUT?',
            answer: 'Finally, brethren, whatsoever things are true, whatsoever things are honest, whatsoever things are just, whatsoever things are pure, whatsoever things are lovely, whatsoever things are of good report; if there be any virtue, and if there be any praise, think on these things.',
            ref: 'Philippians 4:8'
        },
        {
            vers: 'kjv',
            color: 'blue',
            question: 'WHAT IS FAITH?',
            answer: 'Now faith is the substance of things hoped for, the evidence of things not seen.',
            ref: 'Hebrews 11:1'
        },
        {
            vers: 'kjv',
            color: 'blue',
            question: 'HOW LONG DOES GOD’S WORD LAST?',
            answer: 'But the word of the Lord endureth for ever. And this is the word which by the gospel is preached unto you.',
            ref: '1 Peter 1:25'
        },
        {
            vers: 'csb',
            color: 'blue',
            question: 'WHAT DOES GOD SAY ABOUT HOLINESS?',
            answer: 'You are to be holy to me because I, the LORD, am holy, and I have set you apart from the nations to be mine.',
            ref: 'Leviticus 20:26'
        },
        {
            vers: 'csb',
            color: 'blue',
            question: 'WHAT HAPPENS WHEN GOD’S PEOPLE PRAY?',
            answer: 'and my people, who bear my name, humble themselves, pray and seek my face, and turn from their evil ways, then I will hear from heaven, forgive their sin, and heal their land.',
            ref: '2 Chronicles 7:14'
        },
        {
            vers: 'csb',
            color: 'blue',
            question: 'WHAT DOES GOD SAY ABOUT ALCOHOL?',
            answer: 'Wine is a mocker, beer is a brawler; whoever goes astray because of them is not wise.',
            ref: 'Proverbs 20:1'
        },
        {
            vers: 'csb',
            color: 'blue',
            question: 'HOW SHOULD I TREAT OTHERS?',
            answer: '“And the King will answer them, ‘Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.’“',
            ref: 'Matthew 25:40'
        },
        {
            vers: 'csb',
            color: 'blue',
            question: 'HOW CAN I BE SAVED?',
            answer: 'For everyone who calls on the name of the Lord will be saved.',
            ref: 'Romans 10:13'
        },
        {
            vers: 'csb',
            color: 'blue',
            question: 'WHAT CAN I LEARN FROM DIFFICULTIES?',
            answer: 'But he said to me, “My grace is sufficient for you, for my power is perfected in weakness.” Therefore, I will most gladly boast all the more about my weaknesses, so that Christ’s power may reside in me.',
            ref: '2 Corinthians 12:9'
        },
        {
            vers: 'csb',
            color: 'blue',
            question: 'HOW CAN I FIGHT THE DEVIL?',
            answer: 'Finally, be strengthened by the Lord and by his vast strength. Put on the full armor of God so that you can stand against the schemes of the devil.',
            ref: 'Ephesians 6:10-11'
        },
        {
            vers: 'csb',
            color: 'blue',
            question: 'WHAT THINGS SHOULD I THINK ABOUT?',
            answer: 'Finally brothers and sisters, whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable—if there is any moral excellence and if there is anything praiseworthy—dwell on these things.',
            ref: 'Philippians 4:8'
        },
        {
            vers: 'csb',
            color: 'blue',
            question: 'WHAT IS FAITH?',
            answer: 'Now faith is the reality of what is hoped for, the proof of what is not seen.',
            ref: 'Hebrews 11:1'
        },
        {
            vers: 'csb',
            color: 'blue',
            question: 'HOW LONG DOES GOD’S WORD LAST?',
            answer: 'but the word of the Lord endures forever. And this word is the gospel that was proclaimed to you.',
            ref: '1 Peter 1:25'
        }
    ];
}

export function youth_doctrinalVerses() {
    return [
        {
            vers: 'kjv',
            color: 'red',
            question: 'THE LORD’S DAY',
            answer: 'Remember the sabbath day, to keep it holy.',
            ref: 'Exodus 20:8'
        },
        {
            vers: 'kjv',
            color: 'red',
            question: 'EDUCATION',
            answer: 'Thus saith the LORD, thy Redeemer, the Holy One of Israel; I am the LORD thy God which teacheth thee to profit, which leadeth thee by the way that thou shouldest go.',
            ref: 'Isaiah 48:17'
        },
        {
            vers: 'kjv',
            color: 'red',
            question: 'LAST THINGS',
            answer: 'And this gospel of the kingdom shall be preached in all the world for a witness unto all nations; and then shall the end come.',
            ref: 'Matthew 24:14'
        },
        {
            vers: 'kjv',
            color: 'red',
            question: 'GOD',
            answer: 'And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.',
            ref: 'John 1:14'
        },
        {
            vers: 'kjv',
            color: 'red',
            question: 'RELIGIOUS LIBERTY',
            answer: 'Then Peter and the other apostles answered and said, We ought to obey God rather than men.',
            ref: 'Acts 5:29'
        },
        {
            vers: 'kjv',
            color: 'red',
            question: 'EVANGELISM AND MISSIONS',
            answer: 'And how shall they preach, except they be sent? as it is written, How beautiful are the feet of them that preach the gospel of peace, and bring glad tidings of good things!',
            ref: 'Romans 10:15'
        },
        {
            vers: 'kjv',
            color: 'red',
            question: 'STEWARDSHIP',
            answer: 'Upon the first day of the week let every one of you lay by him in store, as God hath prospered him, that there be no gatherings when I come.',
            ref: '1 Corinthians 16:2'
        },
        {
            vers: 'kjv',
            color: 'red',
            question: 'THE CHURCH',
            answer: 'Saying, I will declare thy name unto my brethren, in the midst of the church will I sing praise unto thee.',
            ref: 'Hebrews 2:12'
        },
        {
            vers: 'kjv',
            color: 'red',
            question: 'GRACE',
            answer: 'Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need.',
            ref: 'Hebrews 4:16'
        },
        {
            vers: 'kjv',
            color: 'red',
            question: 'SCRIPTURE',
            answer: 'Knowing this first, that no prophecy of the scripture is of any private interpretation. For the prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost.',
            ref: '2 Peter 1:20-21'
        },
        {
            vers: 'csb',
            color: 'red',
            question: 'THE LORD’S DAY',
            answer: 'Remember the Sabbath day, to keep it holy:',
            ref: 'Exodus 20:8'
        },
        {
            vers: 'csb',
            color: 'red',
            question: 'EDUCATION',
            answer: 'This is what the LORD, your Redeemer, the Holy One of Israel says: I am the LORD your God, who teaches you for your benefit, who leads you in the way you should go.',
            ref: 'Isaiah 48:17'
        },
        {
            vers: 'csb',
            color: 'red',
            question: 'LAST THINGS',
            answer: 'This good news of the kingdom will be proclaimed in all the world as a testimony to all nations, and then the end will come.',
            ref: 'Matthew 24:14'
        },
        {
            vers: 'csb',
            color: 'red',
            question: 'GOD',
            answer: 'The Word became flesh and dwelt among us. We observed his glory, the glory as the one and only Son from the Father, full of grace and truth.',
            ref: 'John 1:14'
        },
        {
            vers: 'csb',
            color: 'red',
            question: 'RELIGIOUS LIBERTY',
            answer: 'Peter and the apostles replied, “We must obey God rather than people.',
            ref: 'Acts 5:29'
        },
        {
            vers: 'csb',
            color: 'red',
            question: 'EVANGELISM AND MISSIONS',
            answer: 'And how can they preach unless they are sent? As it is written: How beautiful are the feet of those who bring good news.',
            ref: 'Romans 10:15'
        },
        {
            vers: 'kjv',
            color: 'green',
            question: 'EVANGELISM AND MISSIONS',
            answer: 'But the Lord said unto me, Say not, I am a child: for thou shalt go to all that I shall send thee, and whatsoever I command thee thou shalt speak.',
            ref: 'Jeremiah 1:7'
        },
        {
            vers: 'kjv',
            color: 'green',
            question: 'LAST THINGS',
            answer: 'For the Son of man shall come in the glory of his Father with his angels; and then he shall reward every man according to his works.',
            ref: 'Matthew 16:27'
        },
        {
            vers: 'kjv',
            color: 'green',
            question: 'SALVATION',
            answer: 'But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name.',
            ref: 'John 1:12'
        },
        {
            vers: 'kjv',
            color: 'green',
            question: 'EDUCATION',
            answer: 'But the Comforter, which is the Holy Ghost, whom the Father will send in my name, he shall teach you all things, and bring all things to your remembrance, whatsoever I have said unto you.',
            ref: 'John 14:26'
        },
        {
            vers: 'kjv',
            color: 'green',
            question: 'THE CHURCH',
            answer: 'And they continued stedfastly in the apostles’ doctrine and fellowship, and in breaking of bread, and in prayers.',
            ref: 'Acts 2:42'
        },
        {
            vers: 'kjv',
            color: 'green',
            question: 'BAPTISM',
            answer: 'Therefore we are buried with him by baptism into death: that like as Christ was raised up from the dead by the glory of the Father, even so we also should walk in newness of life.',
            ref: 'Romans 6:4'
        },
        {
            vers: 'kjv',
            color: 'green',
            question: 'MAN',
            answer: 'For since by man came death, by man came also the resurrection of the dead. For as in Adam all die, even so in Christ shall all be made alive.',
            ref: '1 Corinthians 15:21-22'
        },
        {
            vers: 'kjv',
            color: 'green',
            question: 'THE SCRIPTURES',
            answer: 'For the word of God is quick, and powerful, and sharper than any two-edged sword, piercing even to the dividing asunder of soul and spirit, and of the joints and marrow, and is a discerner of the thoughts and intents of the heart.',
            ref: 'Hebrews 4:12'
        },
        {
            vers: 'kjv',
            color: 'green',
            question: 'THE KINGDOM',
            answer: 'Hearken, my beloved brethren, Hath not God chosen the poor of this world rich in faith, and heirs of the kingdom which he hath promised to them that love him?',
            ref: 'James 2:5'
        },
        {
            vers: 'kjv',
            color: 'green',
            question: 'GOD',
            answer: 'This then is the message which we have heard of him, and declare unto you, that God is light, and in him is no darkness at all.',
            ref: '1 John 1:5'
        },
        {
            vers: 'csb',
            color: 'green',
            question: 'EVANGELISM AND MISSIONS',
            answer: 'Then the LORD said to me: Do not say, “I am only a youth,” for you will go to everyone I send you to and speak whatever I tell you.',
            ref: 'Jeremiah 1:7'
        },
        {
            vers: 'csb',
            color: 'green',
            question: 'LAST THINGS',
            answer: 'For the Son of Man is going to come with his angels in the glory of his Father, and then he will reward each according to what he has done.',
            ref: 'Matthew 16:27'
        },
        {
            vers: 'csb',
            color: 'green',
            question: 'SALVATION',
            answer: 'But to all who did receive him, he gave them the right to be children of God, to those who believe in his name,',
            ref: 'John 1:12'
        },
        {
            vers: 'csb',
            color: 'green',
            question: 'EDUCATION',
            answer: 'But the Counselor, the Holy Spirit, whom the Father will send in my name, will teach you all things and remind you of everything I have told you.',
            ref: 'John 14:26'
        },
        {
            vers: 'csb',
            color: 'green',
            question: 'THE CHURCH',
            answer: 'They devoted themselves to the apostles’ teaching, to the fellowship, to the breaking of bread, and to prayer.',
            ref: 'Acts 2:42'
        },
        {
            vers: 'csb',
            color: 'green',
            question: 'BAPTISM',
            answer: 'Therefore we were buried with him by baptism into death, in order that, just as Christ was raised from the dead by the glory of the Father, so we too may walk in newness of life.',
            ref: 'Romans 6:4'
        },
        {
            vers: 'csb',
            color: 'green',
            question: 'MAN',
            answer: 'For since death came through a man, the resurrection of the dead also comes through a man. For just as in Adam all die, so also in Christ all well be made alive.',
            ref: '1 Corinthians 15:21-22'
        },
        {
            vers: 'csb',
            color: 'green',
            question: 'THE SCRIPTURES',
            answer: 'For the word of God is living and effective and sharper than any double-edged sword, penetrating as far as the separation of soul and spirit, joints and marrow. It is able to judge the thoughts and intentions of the heart.',
            ref: 'Hebrews 4:12'
        },
        {
            vers: 'csb',
            color: 'green',
            question: 'THE KINGDOM',
            answer: 'Listen, my dear brothers and sisters: Didn’t God choose the poor in this world to be rich in faith and heirs of the kingdom that he has promised to those who love him?',
            ref: 'James 2:5'
        },
        {
            vers: 'csb',
            color: 'green',
            question: 'GOD',
            answer: 'This is the message we have heard from him and declare to you: God is light, and there is absolutely no darkness in him.',
            ref: '1 John 1:5'
        },
        {
            vers: 'kjv',
            color: 'blue',
            question: 'THE CHRISTIAN AND SOCIAL CONCERNS',
            answer: 'And now, Israel, what doth the LORD thy God require of thee, but to fear the LORD thy God, to walk in all his ways, and to love him, and to serve the LORD thy God with all thy heart and with all thy soul,',
            ref: 'Deuteronomy 10:12'
        },
        {
            vers: 'kjv',
            color: 'blue',
            question: 'EDUCATION',
            answer: 'Shew me thy ways, O LORD; teach me thy paths. Lead me in thy truth, and teach me: for thou art the God of my salvation; on thee do I wait all the day.',
            ref: 'Psalm 25:4-5'
        },
        {
            vers: 'kjv',
            color: 'blue',
            question: 'LAST THINGS',
            answer: 'But of that day and hour knoweth no man, no, not the angels of heaven, but my Father only.',
            ref: 'Matthew 24:36'
        },
        {
            vers: 'kjv',
            color: 'blue',
            question: 'THE KINGDOM',
            answer: 'And saying, The time is fulfilled, and the kingdom of God is at hand: repent ye, and believe the gospel.',
            ref: 'Mark 1:15'
        },
        {
            vers: 'kjv',
            color: 'blue',
            question: 'COOPERATION',
            answer: 'That they all may be one; as thou, Father, art in me, and I in thee, that they also may be one in us: that the world may believe that thou hast sent me.',
            ref: 'John 17:21'
        },
        {
            vers: 'kjv',
            color: 'blue',
            question: 'STEWARDSHIP',
            answer: 'I have shewed you all things, how that so labouring ye ought to support the weak, and to remember the words of the Lord Jesus, how he said, It is more blessed to give than to receive.',
            ref: 'Acts 20:35'
        },
        {
            vers: 'kjv',
            color: 'blue',
            question: 'THE LORD’S SUPPER',
            answer: 'For as often as ye eat this bread, and drink this cup, ye do shew the Lord’s death till he come.',
            ref: '1 Corinthians 11:26'
        },
        {
            vers: 'kjv',
            color: 'blue',
            question: 'GRACE',
            answer: 'In whom we have redemption through his blood, the forgiveness of sins, according to the riches of his grace.',
            ref: 'Ephesians 1:7'
        },
        {
            vers: 'kjv',
            color: 'blue',
            question: 'THE LORD’S DAY',
            answer: 'Let the word of Christ dwell in you richly in all wisdom; teaching and admonishing one another in psalms and hymns and spiritual songs, singing with grace in your hearts to the Lord.',
            ref: 'Colossians 3:16'
        },
        {
            vers: 'kjv',
            color: 'blue',
            question: 'GOD',
            answer: 'For there is one God, and one mediator between God and men, the man Christ Jesus.',
            ref: '1 Timothy 2:5'
        },
        {
            vers: 'csb',
            color: 'blue',
            question: 'THE CHRISTIAN AND SOCIAL CONCERNS',
            answer: '“And now, Israel, what does the LORD your God ask of you except to fear the LORD your God by walking in all his ways, to love him, and to worship the LORD your God with all your heart and all your soul?”',
            ref: 'Deuteronomy 10:12'
        },
        {
            vers: 'csb',
            color: 'blue',
            question: 'EDUCATION',
            answer: 'Make your ways known to me, LORD; teach me your paths. Guide me in your truth and teach me, for you are the God of my salvation; I wait for you all day long.',
            ref: 'Psalm 25:4-5'
        },
        {
            vers: 'csb',
            color: 'blue',
            question: 'LAST THINGS',
            answer: '“Now concerning that day and hour no one knows—neither the angels of heaven nor the Son—except the Father alone.”',
            ref: 'Matthew 24:36'
        },
        {
            vers: 'csb',
            color: 'blue',
            question: 'THE KINGDOM',
            answer: '“The time is fulfilled, and the kingdom of God has come near. Repent and believe the good news!”',
            ref: 'Mark 1:15'
        },
        {
            vers: 'csb',
            color: 'blue',
            question: 'COOPERATION',
            answer: 'May they all be one, as you, Father, are in me and I am in you. May they also be in us, so that the world may believe you sent me.',
            ref: 'John 17:21'
        },
        {
            vers: 'csb',
            color: 'blue',
            question: 'STEWARDSHIP',
            answer: 'In every way I’ve shown you that it is necessary to help the weak by laboring like this and to remember the words of the Lord Jesus, because he said, ‘It is more blessed to give than to receive.’”',
            ref: 'Acts 20:35'
        },
        {
            vers: 'csb',
            color: 'blue',
            question: 'THE LORD’S SUPPER',
            answer: 'For as often as you eat this bread and drink the cup, you proclaim the Lord’s death until he comes.',
            ref: '1 Corinthians 11:26'
        },
        {
            vers: 'csb',
            color: 'blue',
            question: 'GRACE',
            answer: 'In him we have redemption through his blood, the forgiveness of our trespasses, according to the riches of his grace.',
            ref: 'Ephesians 1:7'
        },
        {
            vers: 'csb',
            color: 'blue',
            question: 'THE LORD’S DAY',
            answer: 'Let the word of Christ dwell richly among you, in all wisdom teaching and admonishing one another through psalms, hymns, and spiritual songs, singing to God with gratitude in your hearts.',
            ref: 'Colossians 3:16'
        },
        {
            vers: 'csb',
            color: 'blue',
            question: 'GOD',
            answer: 'For there is one God and one mediator between God and humanity, the man Christ Jesus.',
            ref: '1 Timothy 2:5'
        }
    ];
}

export async function getRandomKJVVerse() {

    const response = await fetch(
        'https://bible-api.com/data/kjv/random'
    );

    if (!response.ok) {
        throw new Error(`Bible API error: ${response.status}`);
    }

    const data = await response.json();

    const verseData = [];
    
    verseData.push({
        ref: data.random_verse.book + ' ' + data.random_verse.chapter + ':' + data.random_verse.verse,
        verse: data.random_verse.text
    });

    return verseData;
}

// ==================================================
// FUNCTIONS
// ==================================================

// BROWSER EXTERNAL PAGE
export function openExternalPage(url) {

    // Android APK
    if (window.Android?.openUrl) {
        window.Android.openUrl(url);
        return;
    }

    // Browser
    openBrowserOverlay(url);
}

// HELPER ^
function openBrowserOverlay(url) {

    // Don't create another popup if one is already open.
    if (document.getElementById('external-page-overlay')) {
        return;
    }

    // --------------------------------------------------
    // Backdrop
    // --------------------------------------------------

    const overlay =
        document.createElement('div');

    overlay.id =
        'external-page-overlay';

    Object.assign(overlay.style, {
        position: 'fixed',
        inset: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.45)',
        zIndex: '99999',

        // Prevent the Phaser canvas underneath
        // from receiving touch interaction.
        touchAction: 'none'
    });

    // --------------------------------------------------
    // Popup
    // --------------------------------------------------

    const popup =
        document.createElement('div');

    popup.id =
        'external-page-popup';

    Object.assign(popup.style, {
        position: 'absolute',

        width: '80vw',
        height: '80vh',

        left: '50%',
        top: '50%',

        transform: 'translate(-50%, -50%)',

        background: '#fff',

        overflow: 'hidden',

        boxSizing: 'border-box',

        borderRadius: '4px',

        boxShadow:
            '0 4px 20px rgba(0, 0, 0, 0.5)',

        touchAction: 'auto'
    });

    // --------------------------------------------------
    // Web page
    // --------------------------------------------------

    const iframe =
        document.createElement('iframe');

    iframe.src = url;

    iframe.setAttribute(
        'allowfullscreen',
        ''
    );

    Object.assign(iframe.style, {
        display: 'block',

        width: '100%',
        height: '100%',

        border: 'none',

        margin: '0',
        padding: '0'
    });

    // --------------------------------------------------
    // Close button
    // --------------------------------------------------

    const closeButton =
        document.createElement('button');

    closeButton.type =
        'button';

    closeButton.textContent =
        '×';

    closeButton.setAttribute(
        'aria-label',
        'Close'
    );

    Object.assign(closeButton.style, {
        position: 'absolute',

        top: '0',
        right: '0',

        width: '50px',
        height: '50px',

        padding: '0',
        margin: '0',

        border: 'none',

        background: '#333',
        color: '#fff',

        fontSize: '32px',
        lineHeight: '50px',

        textAlign: 'center',

        cursor: 'pointer',

        zIndex: '2',

        touchAction: 'manipulation'
    });

    // --------------------------------------------------
    // Close
    // --------------------------------------------------

    function closePopup() {
        overlay.remove();
    }

    closeButton.addEventListener(
        'click',
        closePopup
    );

    // --------------------------------------------------
    // Optional: tap backdrop to close
    // --------------------------------------------------

    overlay.addEventListener(
        'pointerdown',
        (event) => {

            if (event.target === overlay) {
                closePopup();
            }
        }
    );

    // --------------------------------------------------
    // Escape key
    // --------------------------------------------------

    document.addEventListener(
        'keydown',
        function handleEscape(event) {

            if (event.key !== 'Escape') {
                return;
            }

            closePopup();

            document.removeEventListener(
                'keydown',
                handleEscape
            );
        }
    );

    // --------------------------------------------------
    // Build popup
    // --------------------------------------------------

    popup.appendChild(iframe);
    popup.appendChild(closeButton);

    overlay.appendChild(popup);

    document.body.appendChild(overlay);
}