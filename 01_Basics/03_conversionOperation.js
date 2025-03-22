//let score = 33
let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// let isLoggedIn = 1
// let isLoggedIn = ""
let isLoggedIn = "Tania"

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

// 1 => true; 0 => false
// "" => false
// "string" => true

let someNumber = 10

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// *********************Operation********************* 

let value = 3

let negValue = -value


//console.log(negValue);

// console.log(2+2) 
// console.log(2-3)
// console.log(2*6)
// console.log(3/2) 
// console.log(2**8)
// console.log(2%3)

let str1 ="Hello" 
let str2 = "Tania"

let str3 = str1 + str2
console.log(str3);

console.log( "1" + 2);
console.log(2 + "1");
console.log( "1" + 2 + 2);
console.log( 1 + 6 + "7");



console.log( ( 3 + 4) * 5 / 3);

console.log(+true);
console.log(+"");

let num1, num2, num3;
// num1 = num2 = num3 = 2+7

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
