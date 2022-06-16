function suma(a, b) {
    a = +a;
    b = +b;

    if (isNaN(a)) {
        return 'ERROR: Pirmas parametras yra ne tikras skaicius';
    }
    if (isNaN(b)) {
        return 'ERROR: Antras parametras yra ne tikras skaicius';
    }

    return a + b;
}

module.exports = suma;