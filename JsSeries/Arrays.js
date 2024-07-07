const arr = [3,5,6,7,8,3,1,2]
// console.log(arr);
console.log(arr.length);
console.log(arr[4]);

// Arrays methods

arr.push(10)
// console.log(arr);

arr.pop()
// console.log(arr);

arr.unshift(9)
// console.log(arr);

// console.log(arr);
arr.shift()
// console.log(arr);

// console.log(arr.includes(3));
// console.log(arr.indexOf(5));
// console.log(arr.indexOf(20));

console.log("A ", arr);
// // Slice method give the result range between 1 to 4 it means that inculding 1 but excluding 4 and original array can not changed.
console.log(arr.slice(1, 4));
console.log("B ", arr);

// In the case of splice original array can changed and its including 1 to 4 charcter.
console.log(arr.splice(1, 4));
console.log("C", arr);

// This method converts array to strings
console.log(arr.toLocaleString());
