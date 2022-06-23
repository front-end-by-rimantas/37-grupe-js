console.clear();

const person = {
    name: 'Petras',
    age: 99,
    isMarried: true,
    children: [
        {
            name: 'Bart',
            age: 50,
        },
        {
            name: 'Liza',
            age: 60,
        },
    ]
}

// const name = person.name;
// const isMarried = person.isMarried;
// const age = person.age;

const { age, children, ...otherInfo } = person;
const [bart, liza] = children;
const { age: bartAge, name: bartName } = bart;
const { age: lizaAge, name: lizaName } = liza;

console.log('BART AGE:', bartAge);
console.log('LIZA AGE:', lizaAge);

console.log('BART NAME:', bartName);
console.log('LIZA NAME:', lizaName);

console.log(age);
console.log(children);
console.log(otherInfo);

console.log(bart);
console.log(liza);


const marks = [1, 2, 3, 4, 5, 6, 7];

// const first = marks[0];
const fourth = marks[3];

const [first, second, ...other] = marks;

console.log(first);
console.log(second);
console.log(other);

console.log('####################');

function info(...params) {
    return `info: ${params.length}`;
}

console.log(info());
console.log(info(undefined));
console.log(info(1));
console.log(info(1, undefined));
console.log(info(1, 2));
console.log(info(1, 2, 'labas'));
console.log(info(1, 2, 'labas', true));


console.log('################');
function biggest(...list) {         // rest
    return Math.max(...list);       // spread
}

console.log(biggest(2, 4));
console.log(biggest(22, 4));
console.log(biggest(7));
console.log(biggest(7, 8, -4, 9));


function example(firstname, lastname, ...otherStuff) {
    console.log(firstname);
    console.log(lastname);
    console.log(otherStuff);
    return '------------';
}

console.log(example('Petras', 'Petraitis'));
console.log(example('Petras', 'Petraitis', 1, 2, 2));