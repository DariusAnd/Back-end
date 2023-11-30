console.clear();
console.log('Welcome to magic farm');

const farm = [
    'Cow',
    'Pig',
    'Chicken',
    'Dog',
    'Cat',
    'Cow',
    'Horse',
    'Sheep',
    'Goat',
    'Cow',
    'Duck',
    'Cat',
    'Turkey',
];

// Kindergarden

let cowsSum1 = 0;
for (let i = 0; i < farm.length; i++) {
    if (farm[i] === 'Cow') {
        cowsSum1++;
    }
}
console.log(`cowsSum1:`, cowsSum1);

// Middle School

let cowsSum2 = 0;
for (const animal of farm) {
    if (animal === 'Cow') {
        cowsSum2++;
    }
}
console.log(`cowsSum2:`, cowsSum2);

// High school

let cowsSum3 = 0;
farm.forEach(animal => animal === 'Cow' ? cowsSum3++ : null);
console.log(`cowsSum3:`, cowsSum3);

// University

let cowsSum4 = 0;
farm.forEach(animal => animal === 'Cow' && cowsSum4++);
console.log(`cowsSum4:`, cowsSum4);

const farm2 = [
    {name: 'Cow', age: 5},
    {name: 'Pig', age: 3},
    {name: 'Chicken', age: 1},
    {name: 'Dog', age: 2},
    {name: 'Cat', age: 4},
    {name: 'Cow', age: 7},
    {name: 'Horse', age: 6},
    {name: 'Sheep', age: 6},
    {name: 'Goat', age: 3},
    {name: 'Cow', age: 2},
    {name: 'Duck', age: 1},
    {name: 'Cat', age: 6},
    {name: 'Turkey', age: 8}
];

//Kindergarden

let cowsAgeSum1 = 0;
for (let i = 0; i < farm2.length; i++) {
    if (farm2[i].name === 'Cow') {
        cowsAgeSum1 += farm2[i].age;
    }
}
console.log('cowsAgeSum1:', cowsAgeSum1);

// Middle School

let cowsAgeSum2 = 0;
for (const animal of farm2) {
    if (animal.name === 'Cow') {
        cowsAgeSum2 += animal.age;
    }
}
console.log('cowsAgeSum2:', cowsAgeSum2);

// High school

let cowsAgeSum3 = 0;
farm2.forEach(animal => animal.name === 'Cow' ? cowsAgeSum3 += animal.age : null);
console.log('cowsAgeSum3:', cowsAgeSum3);

// University

let cowsAgeSum4 = 0;
farm2.forEach(animal => animal.name === 'Cow' && (cowsAgeSum4 += animal.age));
console.log('cowsAgeSum4:', cowsAgeSum4);

let A = 5;
let B = A; // by value

A = 10;

console.log('A', A);
console.log('B', B);

let C = { value: 5 };
let D = C; // by reference

C.value = 10;

console.log('C', C);
console.log('D', D);

let E = 12;
let F = 12;

console.log(E == F);

let G = { value: 12 };
let H = { value: 12 };

console.log(G == H);
console.log('===================================');

// rest and spread

// ,,,,,,,,,,, => [] rest
// {} => ,,,,,,,,,,,, spread

const sum = (...numbers) => {
    console.log('numbers:', numbers);
    let result = 0;
    for (const number of numbers) {
        result += number;
    }
    console.log('result:', result);
}

sum(5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23);

let V = { value: 5 };
let I = { ...V };   //value by value
// 3 taskai ant objekto - noriu 'praspredinti'
// 3 taskai ant grupes kintamuju - noriu 'surestinti'

V.value = 10; 

console.log('V:', V);
console.log('I:', I);

console.log('===================================');
// Dekonstruktinimas
//Masyve - pgl eiles tvarka
//Objekte - pgl key

const mas1 = [1, 2, 3, 4, 5];
const obj1 = { value: 5, name: 'Vasya', age: 25 };

const [T, M] = mas1;
const { age, what} = obj1;

console.log('T:', T);
console.log('M:', M);

console.log('age:', age);
console.log('what:', what);