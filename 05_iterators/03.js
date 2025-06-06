// for of

// ["", "", ""]
// [{}, {}, {}]

// ========== FOR...OF with ARRAY ==========
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);  // Outputs each number: 1 2 3 4 5
}

// ========== FOR...OF with STRING ==========
const greetings = "Hello world!";

for (const char of greetings) {
    console.log(`Each char is ${char}`);  // Outputs each character of the string
}

// ========== FOR...OF with MAP =============

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('USA', "United States") // overwrite

console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// ========== INVALID: FOR...OF directly on OBJECT =======
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
};

// This won't work because objects are not iterable with for...of
// for (const [key, value] of myObject) {
//     console.log(key, ':', value);
// }

// Correct way: Convert object to iterable using Object.entries()
for (const [key, value] of Object.entries(myObject)) {
    console.log(`${key} : ${value}`);
}
