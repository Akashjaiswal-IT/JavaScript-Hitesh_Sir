// Object with a method using 'this'
const user = {
    username: "Akash",
    age: 20,
    welcomeMessage: function() {
        console.log(`Hi ${this.username} , welcome to website`);
        console.log(this); // 'this' refers to the user object
    }
}

user.welcomeMessage()
user.username = "Arjun"
user.welcomeMessage()

// 'this' in global scope (in Node.js, it's an empty object)
console.log(this);

// Regular function: 'this' is undefined in strict mode or global object otherwise
// works only inside objects
function intro(){
    let username = "Akash"
    // console.log(`I'm ${username}`);
    console.log(`I'm ${this.username}`);
}
intro()

// Function expression: behaves like regular function
// const chai = function () {
//     let username = "Akash"
//     console.log(this.username);
// }

// Arrow function: 'this' is lexically scoped (inherits from parent scope)
const chai = () => {
    let username = "Akash"
    console.log(this); // {} -- 'this' does NOT refer to the function or object
}
chai()

// Arrow function variations for adding two numbers
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
   
// Implicit return
// const addTwo = (num1, num2) =>  num1 + num2

// Parentheses for implicit return
// const addTwo = (num1, num2) => ( num1 + num2 )

// Returning an object (wrap in parentheses)
const functname = (num1, num2) => ({username: "Akash"})
console.log(functname(3, 4)) // Output: { username: 'Akash' }

// Array forEach example (uncomment to use)
const myArray = [1, 2, 3, 4, 5]
myArray.forEach((item) => {
    console.log(item)
});
myArray.forEach(function(item) {
    console.log(item)
});
