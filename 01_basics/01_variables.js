"use strict"; //<-this allow only newer version of js 

//use only 'const' and 'let' for declaring a variable 
//use clearer word for variable name 

const AccountId = 100; // value 'cannot' be changed later
// ; -> semicolon doesnot create an impact but can be considered good programming practice
let AccountCity = "Raipur"; // value 'can' be changed later 

console.log("Id: ", AccountId)
console.log("City: ", AccountCity)

let accountEmail; // undefined by default
console.log(typeof(accountEmail))

//updating variable name
// AccountId = 101; // not possible
AccountCity = "Jaipur" // possible

console.log("Id: ", AccountId)
console.log("City: ", AccountCity)

//for tabular format 
console.table({  //
    AccountId,
    AccountCity
})

// Prefer not to use var for declaring variable because of issue in block scope and functional scope

