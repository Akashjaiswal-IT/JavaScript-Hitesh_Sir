// comparison operators and type coercion.

// behavior of `null` and `undefined` in comparisons.
// null comparisons
    console.log(null > 0);           // false
    console.log(null == 0);          // false: null only equals undefined
    console.log(null == undefined);  // true
    console.log(null >= 0);          // true: null coerces to 0 because of '>' next it check =, so 0 >= 0

// undefined comparisons
    console.log(undefined == 0);  // false: undefined only equals null
    console.log(undefined > 0);   // false
    console.log(undefined >= 0);  // false: undefined is not comparable to numbers; it remains undefined, so undefined >= 0
 
// Compares numbers and strings using relational operators (`>`, `>=`, `<`, `==`, `!=`).
   console.log("5" > 3);            // true: "5" is coerced to 5
   console.log("100" >= 100);       // true: "100" is coerced to 100
   console.log("apple" > "banana"); // false: lexicographical comparison
   console.log(2 == "2");           // true: "2" is coerced to 2
   console.log(2 != "3");           // true: "3" is coerced to 3, 2 != 3
   console.log("2" === 2);          // false: strict equality, no type coercion
   console.log("2" !== 2);          // true: strict inequality, different types
   // Uses strict equality (`===`) to compare values without type coercion.
    