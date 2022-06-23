console.clear();

const students = [
    { name: 'Petras', marks: [10, 9, 8, 7, 6] },
    { name: 'Maryte', marks: [7, 8, 7, 8, 6] },
    { name: 'Jonas', marks: [1, 2, 3, 4, 5] },
    { name: 'Ona', marks: [10, 10, 10, 10, 10, 10, 10, 10] },
];

for (let s = 0; s < students.length; s++) {
    const { name, marks } = students[s];
    let totalSum = 0;
    for (let m = 0; m < marks.length; m++) {
        const mark = marks[m];
        totalSum += mark;
    }

    console.log(`${name} vidurkis yra ${totalSum / marks.length}.`);
}

console.log('-------------');

for (const { name, marks } of students) {
    let totalSum = 0;
    for (const mark of marks) {
        totalSum += mark;
    }

    console.log(`${name} vidurkis yra ${totalSum / marks.length}.`);
}

console.log('###############');

for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 15) {
        for (let s = 0; s < 60; s += 10) {
            console.log(`${h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`);
        }
    }
}