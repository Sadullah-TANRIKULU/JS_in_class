console.log("script.js is running...");
// Pseudocode:
// primeNumber prompt
// counter
// only divide by self and 1
// for loop(i=2;i < primeNumber;i++)
// if primeNumber % i == 0 counter += 1
// if counter > 0 "NOT prime" else "prime"

let primeNumber = Number(prompt("enter a number : "));

let counter = 0;

for(let i=2;i<primeNumber;i++) {
    if(primeNumber % i == 0) {
        counter += 1;
    }
    if (counter>0) {
        console.log(`${primeNumber}, NOT prime`);
    } else {
        console.log(`${primeNumber}, prime`);
    }
}









