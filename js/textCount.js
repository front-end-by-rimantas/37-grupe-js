console.clear();

const texts = [
    '',
    'labas',
    'labas rytas',
    'labas rytas Lietuva',
    ' labas',
    'labas ',
    ' labas ',
    '                 labas',
    'labas  ',
    '  labas  ',
    'labas         rytas',
    '         labas         rytas         ',
];

function wordCount(str) {
    const words = str
        .split(' ')
        .filter(w => w !== '');

    return words.length;
}

for (const text of texts) {
    const count = wordCount(text);
    console.log(count, `"${text}"`);
}