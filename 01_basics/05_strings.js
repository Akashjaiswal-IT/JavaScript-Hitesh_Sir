// declaring variables
    const name = "Akash";
    let age = 20;

// String interpolation
    console.log(`Hi Everyone, my name is ${name} and I'm ${age} year old`);
    console.log(name, typeof name)         // Akash string

// Creating string object
    const newName = new String("Arjun");
    console.log(newName, typeof newName);  // [String: 'Arjun'] object

// string operations
    const fullName = "Akash Jaiswal";
    console.log(fullName);                 // Akash Jaiswal
    console.log(fullName.charAt(6));       // J
    console.log(fullName.indexOf('i'));    // 8
    console.log(fullName.substring(1, 9))  // (not including 9) // kash Jai
    console.log(fullName.slice(-7,9));     //(not including 9). // Jai
    
    const newString = "     Akash       ";
    console.log(newString);                //'      Akash       ' ('...' for reference)
    console.log(newString.trim());         // Akash
    
    const url = "https://akash.com/akash%20jaiswal";
    console.log(url.replace('%20','-'));   // https://akash.com/akash-jaiswal
    console.log(url.includes('Akash'));    // false
    console.log(url.includes('akash'));    // true
    console.log(url.split('/'));           // [ 'https:', '', 'akash.com', 'akash%20jaiswal' ]