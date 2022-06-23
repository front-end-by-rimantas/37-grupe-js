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