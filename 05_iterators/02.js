// ========== WHILE LOOP ==========

// Count from 0 to 10 in steps of 2
let index = 0;

while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index += 2;
}

// ========== WHILE LOOP WITH ARRAY ==========

let myArray = ['flash', 'batman', 'superman'];

let arrIndex = 0;

while (arrIndex < myArray.length) {
    console.log(`Value is ${myArray[arrIndex]}`);
    arrIndex++;
}

// ========== DO...WHILE LOOP ==========

let score = 11;

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);
