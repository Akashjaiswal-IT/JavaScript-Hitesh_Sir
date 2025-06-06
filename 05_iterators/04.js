// ========== FOR...IN with OBJECT ==========
const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
};

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// ========== FOR...IN with ARRAY ==========
const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    console.log(programming[key]);
}


// ========== FOR...IN with MAP (Invalid) ==========
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India"); // overwrite

// Invalid: for...in doesn't work with Map
for (const key in map) {
    console.log(key);  // Won't log anything
}

// Correct way: Use for...of with destructuring
for (const [key, value] of map) {
    console.log(`${key} : ${value}`);
}







