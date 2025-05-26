// type conversion and operations in JS.

//string to number
let name = "Akash" ;
let nameNumber = Number(name) ;

console.log(typeof(nameNumber)) // number
console.log(nameNumber) // NaN

/*
Examples:
"33" => 33
"33abc" => NaN
true => 1; false => 0
*/

// Number to String
let number = 1;
let numberString = String(number);

console.log(typeof numberString) // String
console.log(numberString) // "1" but shows as 1 in Terminal

//++++++++++++++++ Operation +++++++++++++++++++++++++++
let value = 3;
let negValue = -value;
console.log(negValue) //-3

// Arithmetic operations
console.log(2 + 2); // 4
console.log(2 - 2); // 0
console.log(2 * 2); // 4
console.log(2 ** 3); // 8 (exponentiation/power)
console.log(2 / 3); // 0.666...(upto 16 decimal places)
console.log(2 % 3); // 2 (remainder)

// string operations - concatenation
let string1 = "Hi";
let string2 = " Akash";
let string3 = string1 + string2 ;
console.log(string1," +",string2, "=", string3); // Hi  +  Akash = Hi Akash

/*
Type coercion in JavaScript means the automatic or implicit conversion of values 
from one data type to another (such as strings to numbers, numbers to strings, etc.) when performing operations.
*/
// Type coercion in operations
console.log("1" + 2);     // "12"
console.log(1 + "2");     // "12"
console.log("1" + 2 + 2); // "122"
console.log(1 + 2 + "2"); // "32" *

// Operator precedence and grouping
console.log((3 + 4) * 5 % 3); // 2
// Always group elements for proper readability and functioning


// Old Man told to never use this 
// Unary plus operator
console.log(+true);  // 1
console.log(+"");    // 0
console.log(+null);  // 0

//multiple variable assignment together
let num1 = num2 = num3 = 2 + 2;
console.log(num1, num2, num3) // 4 4 4

// Increment operator

    // Prefix increment
    let a = 5;
    let b = ++a; // a is incremented first, then assigned to b
    console.log(a, b); // 6 6

    // Postfix increment
    let x = 5;
    let y = x++; // x is assigned to y first, then incremented
    console.log(x, y); // 6 5

// Reference: https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion