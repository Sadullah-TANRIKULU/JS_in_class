
// Purpose of the this coding challenge is to write a code that given a number, returns the corresponding
// Fibonacci number.
// Learning Outcomes
// At the end of the this coding challenge, students will be able to;
// analyze a problem, identify and apply programming knowledge for appropriate solution.
// demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.
// Problem Statement
// Create a function that, given a number, returns the corresponding Fibonacci number.
// Examples:
// fibonacci(7) ➞ 21  indexteki sayıyı döndürecek
// fibonacci(12) ➞ 233
// The first number in the sequence starts at 1 (not 0)
// n = (n-1) + (n-2)
// 1,1,2,3,5,8,13,21


function fibfinder(n) {    // 1,1,2,
    if (n < 2) {
        return 1;
    } else {
        return fibfinder(n-2) + fibfinder(n-1);
    }
}

console.log(fibfinder(7));






