// Declaring Numbers
const score = 10; 
const balance = new Number(100); // Creating Number object

// Most useful - Convert number to string and get its length and other string methods
balance.toString().length // 3
// Format number to fixed decimal places
balance.toFixed(2)        // "100.00"

// Precision Handling
const Number1 = 12.8966;
const Number2 = 123.8966;
const Number3 = 1234.8966;
Number1.toPrecision(3)    // "12.9"
Number2.toPrecision(3)    // "123"
Number3.toPrecision(3)    // "1.23e+3" - scientific notation

// Locale String Formatting
const money = 1000000;
money.toLocaleString() // "1,000,000" (default locale US)
// Format number with Indian locale commas
money.toLocaleString('en-IN') // "10,00,000"

// +++++++++++++ Maths +++++++++++++++++++++++++++++
console.log(Math.abs(-4));           // Absolute value: 4
console.log(Math.round(4.6));        // Rounds to nearest integer: 5
console.log(Math.ceil(4.2));         // Rounds up: 5
console.log(Math.floor(4.9));        // Rounds down: 4
console.log(Math.min(4, 3, 6, 8));   // Minimum value: 3
console.log(Math.max(4, 3, 6, 8));   // Maximum value: 8

// Random Numbers
console.log(Math.random()); // Random number between 0 and 1 (1 - exclusive)
console.log((Math.random() * 10) + 1); // Random number between 1 and 10 (both - inclusive)
console.log(Math.floor(Math.random() * 10) + 1); // Random integer between 1 and 10 (both - inclusive)

// Random Number in a Range
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random integer between min and max (both - inclusive)
