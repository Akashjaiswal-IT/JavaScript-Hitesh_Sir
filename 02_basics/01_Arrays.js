// Creating Array
    const myHeros = [ "Ironman", "Spiderman" ];
    const mixedArray = [ "Ironman", 1, 2 ];
    const anotherArray = new Array(1, 2, 3, 4);
    console.log(mixedArray); // [ 'Ironman', 1, 2 ]
    let myArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

// operations
    myArray.push(10);
    console.log(myArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
    myArray.pop();
    console.log(myArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// unshift and shift
    // unshift -> adds elements to beginning of array
    myArray.unshift(0);
    console.log(myArray); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    // shift -> removes elements from beginning of array
    myArray.shift();
    console.log(myArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    
// Check if array includes a value
    console.log(myArray.includes(7));  // true

// Get index of a value
    console.log(myArray.indexOf(3));  // 2

// Join array elements into a string
    const newArray = myArray.join();
    console.log(myArray);   // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    console.log(newArray);  // 1,2,3,4,5,6,7,8,9

// slice and splice 
    console.log("A: ", myArray);         // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// slice does not modify the original array
    const mynum1 = myArray.slice(-8, 7); // 7th index is not included 
    console.log("B: ", myArray ,mynum1); // B:  [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]  [ 2, 3, 4, 5, 6, 7 ]

// splice modifies the original array
    const mynum2 = myArray.splice(-8, 7); // 7th index is included 
    console.log("C: ", myArray ,mynum2);  // c:  [ 1, 9 ]  [ 2, 3, 4, 5, 6, 7, 8 ]
