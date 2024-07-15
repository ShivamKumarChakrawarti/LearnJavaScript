function addTwoNumbers(a, b){
    return a+b
}
console.log(addTwoNumbers(10, 20));

function loginUserMessage(userName){
    if(!userName){
        console.log("PLease Enter your Username");
        return
    }
    return `${userName} is just logged in..`
}

// console.log(loginUserMessage());
console.log(loginUserMessage("shivam"));