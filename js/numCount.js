console.clear();

/**
 * Skaiciuje esanciu skaitmenu kiekis
 * @param {*} n Skaicius
 * @returns {number} Skaitmenu kiekis
 */
function numCount(n) {
    if (typeof n !== 'number'
        || !isFinite(n)) {
        return 'ERROR: turi buti skaicius';
    }

    const numAsString = '' + n;
    let size = numAsString.length;

    // eliminuojame minusa
    if (n < 0) {
        size--;
    }

    // eliminuojame kableli
    if (n % 1 !== 0) {
        size--;
    }

    return size;
}

console.log(numCount(1), '->', 1);
console.log(numCount(5), '->', 1);
console.log(numCount(69), '->', 2);
console.log(numCount(58456298), '->', 8);

console.log(numCount(-1), '->', 1);
console.log(numCount(-5), '->', 1);
console.log(numCount(-69), '->', 2);
console.log(numCount(-58456298), '->', 8);

console.log(numCount(1.13), '->', 3);
console.log(numCount(5.13), '->', 3);
console.log(numCount(69.13), '->', 4);
console.log(numCount(58456298.13), '->', 10);

console.log(numCount(-1.13), '->', 3);
console.log(numCount(-5.13), '->', 3);
console.log(numCount(-69.13), '->', 4);
console.log(numCount(-58456298.13), '->', 10);

console.log(numCount('labas rytas'));
console.log(numCount(undefined));
console.log(numCount());
console.log(numCount(null));
console.log(numCount(true));
console.log(numCount('0'));
console.log(numCount(NaN));
console.log(numCount(Infinity));
console.log(numCount(-Infinity));