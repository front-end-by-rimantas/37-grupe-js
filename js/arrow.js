// function declaration
function sudetis(a, b) {
    return a + b;
}
console.log(7, '+', 5, '=', sudetis(7, 5));

// anonimine funkcija
const atimtis = function (a, b) {
    return a - b;
}
console.log(7, '-', 5, '=', atimtis(7, 5));

// arrow (rodykline) funkcion; pvz.: C# vadinama lambda funkcija
const daugyba = (a, b) => {
    return a * b;
}
console.log(7, '*', 5, '=', daugyba(7, 5));

// arrow funkcion:
// kai logikos bloke yra TIK 1 procedura (operacija), tai nenaudojam {} ir return
const dalyba = (a, b) => a / b;
console.log(7, '/', 5, '=', dalyba(7, 5));

// arrow funkcion:
// kai parametru bloke yra TIK 1 parametras, tai nenaudojam ()
const kvadratas = a => a ** 2;
console.log(7, '**', 2, '=', kvadratas(7));