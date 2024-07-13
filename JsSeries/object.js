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
console.log(obj.name);
console.log(obj["name"]);
console.log(obj.anotherName);
console.log(obj["anotherName"]);
console.log(obj["email"]);
console.log(typeof obj[mySym]);