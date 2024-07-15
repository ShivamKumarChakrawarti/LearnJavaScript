const  mySym = Symbol("I am Symbol")

const obj = {
    name: "shivam",
    "anotherName": "satyam",
    [mySym]: "I am Symbol",
    age: 23,
    email: "shivam@google.com",
    isLogined: false,
    location: "Pune"
}
// console.log(obj.name);
// console.log(obj["name"]);
// console.log(obj.anotherName);
// console.log(obj["anotherName"]);
// console.log(obj["email"]);
// console.log(typeof obj[mySym]);

// Destructuring of object
const obj1 = {
    course: "Java",
    price: "70$",
    courseInstructor: "KK"
}

console.log(obj1.courseInstructor);
// If we have multiple statements and we want to optimize code then we use destructuring

const {courseInstructor: instructor, course: C} = obj1
console.log(instructor, C);//we dont need to write obj1.courseInstructor again again.