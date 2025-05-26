// current date and time 
let currentDateAndTime = new Date();

console.log(currentDateAndTime); 
    // not understandable -> 2025-05-26T05:18:34.271Z

console.log(currentDateAndTime.toString()); 
    // Mon May 26 2025 05:19:55 GMT+0000 (Coordinated Universal Time)
    // but we want only selected information

console.log(currentDateAndTime.toDateString());
    // Mon May 26 2025

console.log(currentDateAndTime.toLocaleString());
    // 5/26/2025, 5:22:38 AM

console.log(typeof currentDateAndTime);
    // object


// Another way to create Date
let myCreatedDate = new Date(2025, 4, 26);
console.log(myCreatedDate.toLocaleString());    // 5/26/2025, 12:00:00 AM

myCreatedDate = new Date(2025, 4, 26, 10, 57);
console.log(myCreatedDate.toLocaleString());    // 5/26/2025, 10:57:00 AM

myCreatedDate = new Date("2025-05-26");
console.log(myCreatedDate.toLocaleString());    // 5/26/2025, 12:00:00 AM

myCreatedDate = new Date("05-26-2025");
console.log(myCreatedDate.toLocaleString());    // 5/26/2025, 12:00:00 AM

console.log(myCreatedDate.getTime());           // 1748217600000 
    // returns milliseconds from jan 1, 1970, 00:00:00 UTC (the unix epoch)

// Time stamp
let myTimeStamp = Date.now();
console.log(myTimeStamp);   // 1748237602782 (milliseconds)
console.log(Math.floor(Date.now() / 1000)); // 1748237702(seconds)

let newDate = new Date();
console.log(newDate); // Full date object -> 2025-05-26T05:39:00.777Z
console.log(newDate.getMonth() + 1); // Month (1-based) ->5
console.log(newDate.getDay()); // Day of the week -> 1 (implying monday)

console.log(
    newDate.toLocaleString('default', {
        weekday: "long",
    })
);  // Monday