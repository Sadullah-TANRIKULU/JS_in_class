// Pseudocode:
// 2 input from user
// +, -, /, *
// return

// let operator = prompt("enter operator(+, -, /, *) : ");
// let num1 = Number(prompt("enter first number : "));
// let num2 = Number(prompt("enter second number : "));

let operator = document.getElementById("operator");
console.log(operator);



function add(num1, num2, operator) {
    let result;
    if (operator === "+") {
        result = num1 + num2;
        return result;
    } else {
        alert("pls, operator should be +");
    }
}

function minus(num1, num2, operator) {
    let result;
    if (operator === "-") {
        result = num1 - num2;
        return result;
    } else {
        alert("pls, operator should be -");
    }
}

function divide(num1, num2, operator) {
    let result;
    if (operator === "/") {
        result = num1 / num2;
        return result;
    } else {
        alert("pls, operator should be /");
    }
}

function multiple(num1, num2, operator) {
    let result;
    if (operator === "*") {
        result = num1 * num2;
        return result;
    } else {
        alert("pls, operator should be *");
    }
}
function process() {
    
    if (operator === "+") {
        return add(num1, num2, operator);
    } 
    else if (operator === "-") {
        return minus(num1, num2, operator);
    }
    else if (operator === "/") {
        return divide(num1, num2, operator);
    }
    else if (operator === "*") {
        return multiple(num1, num2, operator);
    }
    else {
        alert("pls, try again");
    }
    
}




// console.log(process());







