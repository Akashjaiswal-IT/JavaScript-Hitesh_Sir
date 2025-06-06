// Truthy values:
// "0", "false", " ", [], {}, function(){}

// Falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Falsy and Truthy Check
const userEmail = [];

if (userEmail) {
    console.log("Got user email");  // This runs because an empty array is truthy
} else {
    console.log("Don't have user email");
}

// Check if array is actually empty
if (userEmail.length === 0) {
    console.log("Don't have user email");
} else{
    console.log("Got user email")
}


// Check if object is empty
const Obj = {};

if (Object.keys(Obj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??)
// Returns the first defined (not null/undefined) value

let val1;
val1 = null ?? 10 ?? 20;

console.log(val1);  // Output: 10


// Ternary Operator Example
const iceTeaPrice = 100;

iceTeaPrice <= 80
    ? console.log("Less than or equal to 80")
    : console.log("More than 80");
