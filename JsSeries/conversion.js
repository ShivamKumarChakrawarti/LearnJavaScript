let age = 33
age = "33abc" 
// This will print string.
console.log(typeof age);

console.log(typeof(age));

let num = Number(age)
console.log(typeof num);
console.log(num);

// "33"=>33
//"33abc"=>NaN
// true => 1 false =>0
//1=>true, 0=>false
//""=>false
//"abc"=>true