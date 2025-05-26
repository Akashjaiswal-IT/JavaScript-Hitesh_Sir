"use strict"; // for better error checking

// check alert(1+1) in browser's console
// give highest priority to readability

console.log(1+1) //better
console.log(
    1+
    1
)//although works but not preffered

console.log("Akash");
let name = "Akash";
let age = 20;
let isLoggedIn = true;

console.table({
    name, //linting warning. Its complaining that since you are not changing the value of name after the declaration, you can make it constant
    age,
    isLoggedIn
})

// Data types in JavaScript:
// number   => Numeric values (up to 2^53)
// bigint   => For very large integers
// string   => Text values ("", '', ``(back tick))
// boolean  => true or false
// null     => Represents an intentional absence of value
// undefined=> Variable declared but not assigned a value
// symbol   => Unique identifiers (I currently did not understand)
// object   => Collections of key-value pairs

console.log(typeof undefined); // Output: undefined
console.log(typeof null);      // Output: object