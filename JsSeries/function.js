function addTwoNumbers(a, b){
    return a+b
}
// console.log(addTwoNumbers(10, 20));

function loginUserMessage(userName){
    if(!userName){
        console.log("PLease Enter your Username");
        return
    }
    return `${userName} is just logged in..`
}

// console.log(loginUserMessage());
// console.log(loginUserMessage("shivam"));

// Function with Object
const user = {
    userName: "Shivam",
    pswd: "abc@123"
}

function handelObject(obj) {
    console.log(`your username is: ${obj.userName} and password is: ${obj.pswd}`);
    
}
// console.log(handelObject(user));
// Or
handelObject({
    userName: "ABC@gmail.com",
    pswd: "abc@123"
})

// Function with Array
const myArr = [10, 20, 30, 40, 50]

function handelArray(arr){
    return arr[2]
}
// console.log(handelArray(myArr));
// Or
console.log(handelArray([10, 20, 30, 40, 50]));