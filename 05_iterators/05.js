// ========== BASIC forEach with ARRAY ==========
const coding = ["js", "ruby", "java", "python", "cpp"];

// Using anonymous function
coding.forEach(function (val) {
    // console.log(val);  
});

// Using arrow function
coding.forEach((item) => {
    // console.log(item);  
});

// Using named function
function printMe(item) {
    // console.log(item);
}
coding.forEach(printMe);

// Accessing index and full array
coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    }
]

myCoding.forEach( (item) => {
    // console.log(item.languageName);
} )
