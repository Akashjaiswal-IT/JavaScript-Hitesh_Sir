var c = 300 // -> never use var
let a = 300
if (true) {  // {} -> scope
    let a = 10
    const b = 20
    c = 400 
    console.log("INNER:", a);
}
console.log(a); // 300
// console.log(b); error: b is not defined
console.log(c); // 400

function one(){
    const username = "Hitesh Sir";
    function two(){
        const website = "YouTube"
        console.log(username);
        console.log(website);
    }
    // console.log(website); // -> error: website is not defined
    two()
}
one()

if (true) {
    const username = "Akash"
    if (username === "Akash") {  // or true
        const website = " is logged in GitHub"
        console.log(username + website);
    }
    // console.log(website); // -> error: website is not defined
}
// console.log(username); // -> error: username is not defined


// Hoisting
/* 
    Variable and function are moved to the top of their containing scope during the compile phase.
    1.Compilation Phase: 
        - Function declarations are hoisted with their definitions to the top of their scope.
        - Variables declared with `let` and `const` are hoisted to the top of their scope but are not initialized until their declaration is reached.
        - Variables declared with `var` are hoisted with their definitions to the top of their scope but initialized to `undefined`.
        - Function expressions and arrow functions are not hoisted.
    2.Execution Phase: It runs the code line by line. 
*/

// (*) Interesting
    // Allowed
    console.log(addone(5))
    function addone(num){
        return num + 1 ;
    }
    /*
    // Not allowed
    addTwo(5)
    const addTwo = function(num){
        return num + 2 ;
    }
    // Error: Cannot access 'addTwo' before initialization
    */
   // Allowed
   const addTwo = function(num){
       return num + 2 ;
   }
   console.log(addTwo(5));
   