/*jslint node: true */
"use strict";

// Seed math

exports.random = x => {
    return x * Math.random();
};

exports.randomAngle = () => {
    return Math.PI * 2 * Math.random();
};

exports.randomRange = (min, max) => {
    return Math.random() * (max - min) + min;
};

exports.irandom = i => {
    let max = Math.floor(i);
    return Math.floor(Math.random() * (max + 1)); //Inclusive
};

exports.irandomRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Inclusive
};

exports.gauss = (mean, deviation) => {
    let x1, x2, w;
    do {
        x1 = 2*Math.random() - 1;
        x2 = 2*Math.random() - 1;
        w = x1 * x1 + x2 * x2;
    } while (0 == w || w >= 1);

    w = Math.sqrt(-2 * Math.log(w) / w);
    return mean + deviation * x1 * w;
};

exports.gaussInverse = (min, max, clustering) => {
    let range = max - min;
    let output = exports.gauss(0, range / clustering);

    while (output < 0) {
        output += range;
    }
    
    while (output > range) {
        output -= range;
    }
    
    return output + min;
};

exports.gaussRing = (radius, clustering) => {
    let r = exports.random(Math.PI * 2);
    let d = exports.gauss(radius, radius*clustering);
    return {
        x: d * Math.cos(r),
        y: d * Math.sin(r),
    };
};

exports.chance = prob => {
    return exports.random(1) < prob;
};

exports.dice = sides => {
    return exports.random(sides) < 1;
};

exports.choose = arr => {
    return arr[exports.irandom(arr.length - 1)];
};

exports.chooseN = (arr, n) => {
    let o = [];
    for (let i=0; i<n; i++) {
        o.push(arr.splice(exports.irandom(arr.length - 1), 1)[0]);
    }
    return o;
};

exports.chooseChance = (...arg) => {
    let totalProb = 0;
    arg.forEach(function(value) { totalProb += value; });
    let answer = exports.random(totalProb);
    for (let i=0; i<arg.length; i++) {
        if (answer<arg[i]) return i;
        answer -= arg[i];
    }
};


exports.chooseBotName = () => {
    return exports.choose([
        'Pro',
        'UwU',
        'prowo',
        'Seasons',
'[CKY] [F-22] [M-80] [K9]',
'Argon',
'fishe',
'frogge',
'fromgus',
'keep crying kid',
'im not racist.. BUT',
'm',
'BAN SOANK',
'hunters bad',
'salt',
'd',
        'spank',
        'War',
'Peace',
        'kek',
        'Xene',
'Nylnn',
        'Nerd!',
        'kill me if ur gay',
        'Reddit moment!',
'redditor',
        'h',
        'lad',
':madman:',
        'Real CX!!1',
':bruh:',
        'gamer',
'Bro momento',
'corp x fann!',
        'prorammergod69',
        'oO',
'*teleports behind you*',
'weeb',
'jUan :v el crAk mX+-',
'mexico',
'oleg',
        'Ah, yes.',
        'hamburger',
        'xXxGODxXx',
        'Y?',
        '[F-22]',
        '[MG] Spin2team',
        'Hello!',
        'Satan',
        'anime',
        'STOP!',
'plox',
'spare me',
        'arras gang',
        'froge',
'fromge is best',
'praise froge',
        'USA!!!!',
'murica',
        'hmmm',
        'danger',
        'tearie',
'critical',
'name',
'eXtremE',
'Time to stop',
'Whale',
'Cats > Dogs',
'DIE NOOBS',
'noobkiller69',
'No mercy',
'mercy pls',
'lolololooolo',
        'khan',
        'Winter',
'oreo',
'owo',
'tf2',
'ball shooter',
      'god',
        'Summer',
        'Fall',
        'Spring',
        'E',
        'Stalin',
        'YEETUS',
        ':thinking:',
        'Discord',
'baguette man',
        'normie',
        'X',
'Y',
'Z',
        '.',
        'Zhen',
        'No',  
'yedd',
'Rooster',
'[AI]',
'sunny sunnington',
'School sucks!',
'Momente',
'You are going to brazil',
'Omori',
'ena',
'moony moonington',
'oh no no no',
'aubrey',
'mari',
'hero',
'basil',
'its a trap!',
'fucking hell',
'CHEESE AND RICE, MOONY!',
'anblfkmvbad',
'z34i3nobwwq',
'nerd',
'Fuq of hunter',
'pls gib tokn lo',
'sneezons',
'iwant bt',
'the gamer',
'poggers fish',
'can i have owner',
'im the pope',
'momen',
'bro what',
'lmofa',
'altar boy',
'OwO UwU',
'fehfheiewfihiwfefwe',

'nose',
'bruh momento',
'bruh moment',
'bruh monument',
'bruh mosaic',
'bruh momentum',
'I dont use',
'(I HAVE NO SOUL)',
'real NYLNN!!!!!! omg',
'tesla4kids',
'nonbinary',
'binary but not',
'the v o i d',
'void',
'nb rights',
'enby',
'tesla4toddy',
'tesla',
'kaq',
'khanqueror fan',
'rog',
'GIVE DEV OR DIE',
'doxxer',
'CEO of racism',
':gigi',
'mc',
'hypixel',
'gd',
'Abolish gender!',
'Trans rights!',
'murder',
'ggez',
'ban! ban!',
'hi',
'shit i forgot a semicolon',
'easter egg lo',
'new AI name',
'hail auto-trapper',
'tenebrous',
'r a m b a r',
'bar milk',
'doid',
'stop, mortal',
'you have entered the drone bone zone',
'bonk',
'GEORY DAH',
'geometry dash',
'anime addict',
'not nylnn',
'weddle > nylnn',
'nylnn > weddle',
'galo',
':jimoth',
'CEO of die',
'sinx fan',
'bottle of salt',
'jimothy',
'oh lawd',
'a frogge',
'jeus',
'politics',
'corrupt politician',
'lol xd lmao',
'dipepe',
'arrasss',
'ok and?',
'eggs',
'america joke here',
'BUNGER',
'fren!',
'fren',
'no memes allowed',
'fog pog',
'you are going to basil',
'acid trip',
'hunter',
'i love hunting',
'kale',
'emotions',
'phon',
'WTF BRO',
'womsy',
'splatoon',
'xd',
'another easter egg',
'g.lessreload, g.lessreload,',
'feelings',
'low self esteem',
'in trouble',
'shovel',
'testbed misc',
'turt',
'attack helicopter',
'it s e e k s',
'mmmm myes pet froge',
'hilarity ensues',
'yourself xdddd',
'disocrd',
'snoz',
'where did i go wrong?',
'wha',
'wh',
'm o o n y',
'ENA',
'TURRON',
'hourglass dog',
'froggo',
'doggo',
'hourglass frog',
'it watches',
'do not sleep',
'sco',
'cookie tank when',
'dot dot dot',
'how many ai names',
'add more ais',
'i like ya cut g',
'anime plot twist',
'discord mod',
'anime pfp',
'gg no re',
'how the',
'UPDATE WHEN',
'diep is best',
'tankster',
's',
'elder guardian',
'nebtoon2',
'fjork',
'spjoone',
'njapkin,',
'utensils',
'i forgor',
'cgu',
'whal cube',
'chlomaki',
'ater',
'spinner',
'osu gamer',
'i rember',
'greek question mark',
'i am real nigerian prince',
'sussy',
'among us?',
'fnf whitty',
'funny bomb man',
'madness combat',
'HAAAANK',
'reference here',
'walter white',
'breaking bad',
'memoca',
      'macarona',
      'jesse pinkman',
      'sakuzyo fan',
      'maze fortress',
      'dm me orang',
      'terrar gamer',
      'skeletron prime',
      'suggest a tank',
      'this is a cry for help',
      'kurotsuno',
      'lobco',
      'heavy metal',
      'spy tf2 script',

    ]);
};

exports.chooseBossName = (code, n) => {
    switch (code) {
    case 'a':
    return exports.chooseN([
         'Archimedes',
        'Akilina',
        'Anastasios',
        'Athena',
        'Alkaios',
        'Amyntas',
        'Aniketos',
        'Artemis',
        'Anaxagoras',
        'Apollon',
'Allan',
'Iris',
'Bianca',
'Jimothy',
    ], n);
    case 'castle':
    return exports.chooseN([
        'Berezhany',
        'Lutsk',
        'Dobromyl',
        'Akkerman',
        'Palanok',
        'Zolochiv',
        'Palanok',
        'Mangup',
'Newton',
        'Olseko',
        'Brody',
        'Isiaslav',
        'Kaffa',
        'Bilhorod',
'Ginger',
    ], n);
    default: return 'God';
    }
};
