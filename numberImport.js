const suma = require('./js/number-parsing.js');

const n1 = 7;
const n2 = 5;

console.log(suma(n1, n2));
console.log(suma('7', 5));
console.log(suma('7', '5'));
console.log(suma(7, '5'));
console.log(suma(7, 'a'));
console.log(suma('a', 5));
console.log(suma(7, '5a'));
console.log(suma('5a', 5));