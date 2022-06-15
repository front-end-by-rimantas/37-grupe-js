console.clear();

const people = [
    {
        name: 'Petras',
        age: 99,
        isMarried: true,
        marks: [10, 2, 8, 4, 6],
    },
    {
        name: 'Maryte',
        age: 87,
        isMarried: false,
        marks: [10, 2, 8, 4, 6],
    },
    {
        name: 'Jonas',
        age: 66,
        isMarried: false,
        marks: [10, 2, 8, 4, 6],
    },
    {
        name: 'Ona',
        age: 17,
        isMarried: true,
        marks: [10, 2, 8, 4, 6],
    },
];

const pn = people[3]['name'];
const pa = people[3]['age'];
const pm = people[3]['marks'][0];
const ps = people[3]['isMarried'];

const pn2 = people[3].name;
const pa2 = people[3].age;
const pm2 = people[3].marks[0];
const ps2 = people[3].isMarried;

console.log(pn);
console.log(pa);
console.log(pm);
console.log(ps);

console.log(pn2);
console.log(pa2);
console.log(pm2);
console.log(ps2);

const students = [
    {
        name: 'Petras',
        dob: 2015,
        marks: [],
        gender: true,
        responsibleHumans: [
            {
                name: 'Jonas',
                status: 'parent',
                dob: 1999,
                phone: [
                    4859624856,
                    4859624857,
                ],
                email: [
                    'jonas@jonas.jonas',
                    'jonas2@jonas2.jonas2',
                ],
                address: {
                    country: 'LTU',
                    city: 'Vilnius',
                    street: 'Verkiu g.',
                    buildingNr: 1,
                    appartmentNr: 13,
                }
            },
            {
                name: 'Maryte',
                status: 'parent',
                dob: 1999,
                phone: [
                    4859624856,
                    4859624857,
                    4859624858,
                    4859624859,
                ],
                email: [
                    'maryte@maryte.maryte',
                    'maryte2@maryte2.maryte2',
                ],
                address: {
                    country: 'LTU',
                    city: 'Vilnius',
                    street: 'Verkiu g.',
                    buildingNr: 1,
                    appartmentNr: 13,
                }
            },
            {
                name: 'Ona',
                status: 'parent',
                dob: 1999,
                phone: [
                    4859624856,
                ],
                email: [
                    'Ona@Ona.Ona',
                    'Ona2@Ona2.Ona2',
                ],
                address: {
                    country: 'LTU',
                    city: 'Vilnius',
                    street: 'Verkiu g.',
                    buildingNr: 1,
                    appartmentNr: 13,
                }
            },
        ]
    }
];

const respHumans = students[0].responsibleHumans;

console.log('-------------------');
let nr = 0;
for (const human of respHumans) {
    console.log(++nr, ')', human.name);

    for (const phone of human.phone) {
        console.log('-', phone);
    }
}

console.log('-------------------');
for (let i = 0; i < respHumans.length; i++) {
    const human = respHumans[i];
    console.log(i + 1, ')', human.name);

    for (let j = 0; j < human.phone.length; j++) {
        const phone = human.phone[j];
        console.log('-', phone);
    }
}

console.log(
    students[0].responsibleHumans[1].address.street,
    students[0].responsibleHumans[1].address.buildingNr,
);