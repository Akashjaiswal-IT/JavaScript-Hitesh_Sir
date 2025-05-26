// Function declaration 
function sayMyName() {
    console.log("A");
    console.log("K");
    console.log("A");
    console.log("S");
    console.log("H");
}
sayMyName();

// Function to add two numbers and return the result
function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result;
    return (number1 + number2);
}

const result = addTwoNumbers( 1, 1 );
console.log("Result: ", result);

function loginUserMessage(username) { // can also provide default value like username = "Guest"
    if (!username) {  // If false
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Akash"));  
    // -> Akash just logged in
console.log(loginUserMessage());  
    // -> Please enter a username 
    // -> undefined

// value1 and value2 collects 1st Two arguments ] & num1 collects rest of arguments as an array
function totalPrice(value1, value2, ...num1) {
    return num1;
}
console.log(totalPrice(100, 200, 300, 400));

const user = {
    username: "Akash",
    age: 20
}

// Function to handle an object and print its properties
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
}
handleObject(user);

// passing an object directly to the function
handleObject({
    username: "Arjun",
    age: 21
})

// Function to return the second value from an array
function returnSecondValue(getArray) {
    return getArray[1];
}
const myNewArray = [200, 400, 100, 600]
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 2000, 500, 1000]));