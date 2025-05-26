// Creating Objects

// Using Object constructor -> singleton
    const GitHub = new Object();
    GitHub.name = "GitHub";
    GitHub.yearFounded = 2008;
    console.log(GitHub); // { name: 'GitHub', yearFounded: 2008 }
    
// Using object literal (preferred)
    const GitHubUser = {};
    GitHubUser.id = "1001";
    GitHubUser.name = "Akash";
    GitHubUser.isLoggedIn = false;
    console.log(GitHubUser); // { id: '1001', name: 'Akash', isLoggedIn: false }

// Nested Objects
const regularUser = {
    email: "name@gmail.com",
    fullname:{
        firstName: "Akash",
        lastName: "Jaiswal"
    }
};
console.log(regularUser.fullname.firstName);

// Merging Objects
    const obj1 = {1: "a", 2: "b"};
    const obj2 = {3: "c", 4: "d"};
    const obj3 = {5: "e", 6: "f"};
    // Using Object.assign()
    const obj4 = Object.assign({}, obj1, obj2, obj3);
    console.log(obj4);    // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
    

    // Method 2: Using spread operator (preferred)
    const obj5 = {...obj1, ...obj2, ...obj3};
    console.log(obj5);    // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// Array of Objects (*)
    const users = [
        { id: 101, email: "user1@gmail.com" },
        { id: 102, email: "user2@gmail.com" },
        { id: 103, email: "user3@gmail.com" }
    ];
    console.log(users[1].email); // user2@gmail.com

// Object Utility Methods -> Object.keys(obj) , Object.values(obj), Object.entries(obj), etc. check them once
    console.log(Object.keys(GitHubUser));    // [ 'id', 'name', 'isLoggedIn' ]
    console.log(Object.values(GitHubUser));  // [ '1001', 'Akash', false ]
    console.log(Object.entries(GitHubUser)); // [ [ 'id', '1001' ], [ 'name', 'Akash' ], [ 'isLoggedIn', false ] ]

// Check if property exists
    console.log(GitHubUser.hasOwnProperty('isLoggedIn')); //true

// Object Destructuring
const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "Hitesh Choudhary",
};
// Destructuring with alias (different variable name)
// syntax: const { propertyName: aliasName } = object;
const { courseInstructor: instructor } = course;

console.log(course.courseInstructor); // Hitesh Choudhary
console.log(instructor); // Hitesh Choudhary

/*
    JSON Structure Example

    {
        "name": "Akash",
        "coursename": "JavaScript",
        "price": "Free"
    }

    // Array of objects
    [
        { __ : __ },
        { __ : __ },
        { __ : __ }
    ]
*/