// for loop

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);  // cannot access element

// nested loop
for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop : ${i}`);
   for (let j = 1; j <= 10; j++) {
    // console.log(`Outer loop : ${i} & Inner loop : ${j}`);
    // console.log(i + '*' + j + ' = ' + i*j );
   }
}

let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);   
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}