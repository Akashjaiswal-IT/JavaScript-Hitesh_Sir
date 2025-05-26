// Declaring Arrays
const marvelHeros = ["Thor", "Ironman", "Spiderman"];
const dcHeros = ["Superman", "Flash", "Batman"];

// pushing one array into another
marvelHeros.push(dcHeros);      // ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
console.log(marvelHeros[3]);     // ["superman", "flash", "batman"]
console.log(marvelHeros[3][1]);  // "flash"

// Concatenation
const allHeros = marvelHeros.concat(dcHeros); // for 2 arrays only
console.log(allHeros); // ["Thor", "Ironman", "Spiderman", "Superman", "Flash", "Batman"]

// spread operator
const newAllHeros = [...marvelHeros, ...dcHeros];
// newAllHeros: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// Flattening nested arrays
const nestedArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const flatNestedArray = nestedArray.flat(Infinity);
console.log(flatNestedArray); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Check if a value is an array
console.log(Array.isArray("Akash")); // false
console.log(Array.isArray(['A', 'k', 'a', 's', 'h'])); // true

// Create an array from a string 
console.log(Array.from("Akash")); // [ 'A', 'k', 'a', 's', 'h' ]

// Create an array from an object
console.log(Array.from({name: "Akash", age: 19})); // []
console.log(Array.from(Object.keys({name: "Akash", age: 19}))); // ['name', 'age']

// Creating arrays from arguments
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]





