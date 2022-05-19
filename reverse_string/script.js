// At the end of the this coding challenge, students will be able to;

// analyze a problem, identify and apply programming knowledge for appropriate solution.

// demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.

// Problem Statement
// Write a function that takes an array of characters and reverses the letters in place.

// Examples:

// reverse("Clarusway Rocks!") ➞ !skcoR yawsuralC

// reverse("Happy") ➞ yppaH

// FIRST WAY
// const sentence = `Clarusway Rocks!`;

// let revtext = sentence.split(``).reverse().join(``);
// console.log(revtext);


// SECOND WAY
const sentence = `Clarusway Rocks!`;

let revText = sentence.split(``);
let empty = new Array;
let result;

for (let i = revText.length - 1; i >= 0; i--) {
    const element = revText[i];
    empty.push(element);
    result = empty.join(``);
}
console.log(result);










