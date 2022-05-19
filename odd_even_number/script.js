// Check if a number is odd or even in JavaScript
// Print “Number is even” if the number is divisible by 2.
// Else print “Number is odd” if the number returns a remainder when divided by 2.
//


// const num = parseInt(prompt(" enter a number is it even or odd? : "));
// let isEvenOrOdd = function() {
//     if (num % 2 === 0) {
//         console.log("it is even");
//     } else {
//         document.write("it is odd");
//     }
// }
// isEvenOrOdd();

//Check if input variable is a number or not
//Print “Variable is not a number” if isNaN() returns true.
//Else print “Variable is a valid number” if isNaN() returns false.

// const num = prompt(" enter sth is it number or not? : ");

// function isNumber(num) {
//     if (isNaN(num)) {
//         console.log("Variable is not a number");
//     } else {
//         console.log("Variable is a valid number")
//     }
// }
// isNumber("string");


// Pseuocode:
// number tespit eden fonksiyon
// prompt from user default çıktısı
// her elemanı loop ile kontrol
// [1,2,3,4,5,6,7,8,9,0] bunda var mı yok mu?
// if whole elements of input is in array => number
// else not number

const num = "99abc";

// 8clarusway
let arrayControl = "0123456789";
let emptyArray =[];

for (let i = 0; i < num.length; i++) {
    const element = num[i];
    let boolValue = arrayControl.includes(element);
    emptyArray.push(boolValue);
}
console.log(emptyArray);
for (let i = 0; i < emptyArray.length; i++) {
    const newElement = emptyArray[i];
    if (newElement) {
        console.log("it is a NUMBER");
    } else {
        console.log("it is NOT a number");
    }
    
}


