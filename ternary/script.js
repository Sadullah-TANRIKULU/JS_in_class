console.log("script.js is running...")

// let age = 12;
// result = age >= 18 
//   ? "you are eligible to vote." 
//   : "you are not";
// console.log(result);

// const n1 = 1;
// const result = n1 >= 0 
//   ? (n1 == 0 ? "zero" : `${n1} is positive`)
//   : `${n1} is negative`;
// console.log(result);

// evaluate if a human can drive a car or not
let canDrive = false;
const hasDriversLicense = true;
const hasGoodVision = true;
const isHandicapped = false;
const usingRegularCar = false;


result =
  hasDriversLicense && hasGoodVision
    ? !isHandicapped
      ? 'you can drive'
      : !usingRegularCar
      ? 'you can drive'
      : 'you cannot drive'
    : 'you cannot drive';
console.log(result);



























