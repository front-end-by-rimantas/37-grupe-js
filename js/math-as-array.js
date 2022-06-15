console.clear();

const operations = [
    [(a, b) => a + b, '+'],
    [(a, b) => a - b, '-'],
    [(a, b) => a * b, '*'],
    [(a, b) => a / b, '/'],
];


const userN1 = 7;
const userN2 = 5;
const userAction = 3;

const userFunc = operations[userAction][0];
const userSym = operations[userAction][1];

const answer = userFunc(userN1, userN2);

console.log(userN1, userSym, userN2, '=', answer);