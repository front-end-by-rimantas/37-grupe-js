console.clear();

const family = [
    {
        name: 'Petras',
        age: 99,
        children: [
            {
                name: 'Juozas',
                age: 44,
                children: [
                    {
                        name: 'Styvas',
                        age: 105,
                    },
                    {
                        name: 'Maryte',
                        age: 87,
                        children: [],
                    },
                ],
            },
            {
                name: 'Ona',
                age: 67,
                children: [],
            },
        ],
    },
    {
        name: 'Maryte',
        age: 87,
        children: [
            {
                name: 'Jonas',
                age: 50,
            },
            {
                name: 'Zose',
                age: 100,
            },
        ],
    },
];

function oldest(list) {
    let age = -1;
    for (const person of list) {
        if (person.age > age) {
            age = person.age;
        }
        if (person.children && person.children.length > 0) {
            const oldestChild = oldest(person.children);
            if (oldestChild > age) {
                age = oldestChild;
            }
        }
    }
    return age;
}

console.log(oldest(family)); // Styvas is 105 years old.