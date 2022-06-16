function suma(a, b) {
    const initialAsize = ('' + a).length;
    const initialBsize = ('' + b).length;

    a = parseFloat(a);
    b = parseFloat(b);

    const afterAsize = ('' + a).length;
    const afterBsize = ('' + b).length;

    if (isNaN(a) || initialAsize !== afterAsize) {
        return 'ERROR: Pirmas parametras yra ne tikras skaicius';
    }
    if (isNaN(b) || initialBsize !== afterBsize) {
        return 'ERROR: Antras parametras yra ne tikras skaicius';
    }

    return a + b;
}

module.exports = suma;