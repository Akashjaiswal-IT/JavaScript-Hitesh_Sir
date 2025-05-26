// Object literal or Singleton class
// singleton 
// Only one instance exists
const Singleton = {
  name: "Singleton",
  getName() {
    return `I'm ${this.name}`;
  }
};
console.log(Singleton.getName()); // I'm singleton

// Object.create -> singleton-like structure
const obj1 = Object.create(Singleton);
const obj2 = Object.create(Singleton);
console.log(obj1.getName()); // I'm singleton
console.log(obj2.getName()); // I'm singleton
console.log(obj1 === obj2);  // false (different objects)
console.log(Object.getPrototypeOf(obj1) === Singleton); // true since obj1 and obj2 inherit from Singleton
// Object.getPrototypeOf(object) -> "Who is this object inheriting from?"

// object literals -> using curly braces {}.
// Symbol for unique property key -> used to create 'unique' and 'immutable' (cannot be changed) identifiers
const mySymbol = Symbol("key")

// Object literal with various properties and a symbol as a key
const JsUser = {
    name: "Akash",
    "full name": "Akash Jaiswal",
    [mySymbol]: "mykey",
    age: 20,
    location: "Raipur",
    email: "Akash@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Saturday", "Sunday"]
}

// Accessing properties
console.log(JsUser.email)        // can be accessed with dot notation -> Akash@google.com (output)
console.log(JsUser["email"])     // since email is a string -> Akash@google.com (output)
console.log(JsUser["full name"]) // cannot access with dot notation -> Akash Jaiswal (output)
console.log(JsUser[mySymbol])    // cannot access with dot notation -> mykey (output)

// Modifying properties
JsUser.email = "Akash@chatgpt.com"
Object.freeze(JsUser) // makes object immutable 
console.log(JsUser.email); // Akash@chatgpt.com

JsUser.email = "Akash@microsoft.com"
console.log(JsUser.email); // Akash@chatgpt.com

let AnotherUser = {
    name: "Akash",
    age: 20,
    email: "Akash@akash.in"
}
// Adding methods to the object
AnotherUser.greetingOne = function(){
    console.log("Hello JS user");
}
AnotherUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`);
}

// Calling methods
console.log(AnotherUser.greetingOne());
    // Hello JS user
    // undefined
console.log(AnotherUser.greetingTwo());
    // Hello Akash
    // undefined
console.log(AnotherUser);
    // {
    //   name: 'Akash',
    //   age: 20,
    //   email: 'Akash@akash.in',
    //   greetingOne: [Function (anonymous)],
    //   greetingTwo: [Function (anonymous)]
    // }
