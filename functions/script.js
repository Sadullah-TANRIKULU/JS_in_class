console.log("script.js is running...");


// function greetWorld() {    // this is a name function
//     console.log("Hello World!");
// }
// greetWorld(); // function declaration

// function sayHi() {
//     return 'Hi!'
// }
// function sayHi2() {
//     console.log("functionlarda console.log ile alınan output typeof vermez");
// }

// sayHi();  // return ile yazılan fonksiyon console da output vermez.
// console.log(typeof sayHi); // function
// console.log(typeof sayHi()); // string--> return sayesinde function output un tipi geldi.

// sayHi2();
// console.log(typeof sayHi2);
// console.log(typeof sayHi2()); // undefined çünkü function body de return yerine console.log ile çıktı aldık

// function sayHi(userName, company) {
//     console.log(`Hello! ${userName} of ${company}`);
//     company="Apple";
//     console.log(`Hello! ${userName} of ${company}`);
// }
// sayHi("Ali", "XiaoMi");

// let userName = "Mark"; // function ın parametrelerine tekrar bir value assign edersek function undefined oluyor.
// let company = "Clarusway";
// sayHi2(userName, company);
// console.log(company);
// sayHi("Matthew"); // iki parametreli function a tek parametre girince birincisi işlem görür.

// var anObject = { name: "Matthew" };
// console.log(anObject.name); // bunun sonucu Matthew

// function changeObject(obj) {
//     obj.name = "David";
// }
// changeObject(anObject);
// console.log(anObject); // object name leri David yapan function ile değiştirdik.

// Anonymous function
// const sayHi2 = function() {
//     return 'Hello!';
// };
// sayHi2();

// // anonymous function expression
// const sayHi = function() {
//     console.log("Hello!");
//     console.trace();
// };
// sayHi();

// const addition = function (x, y) {
//     return x+y
// }
// console.log(addition(2,3));

// const greeting = () => "Welcome to Clarusway"; // arrow function example
// console.log(greeting());

// named IIFE recursive
// (function trian(num) {
//     if (num === 1) return 1;
//     return num + trian(num-1);
// })(3);

// console.log((function trian(num) {
//     if (num === 1) return 1;
//     return num + trian(num-1);  //ilk döngüde 3 + ikincide 2 + üçüncüde if bloğuna girer 1 gelir ve recursion biter.
// })(3));


// yazdir();
// function yazdir() {
//     // console.log("merhaba");  // return yoksa void function denir
//     return "merhaba"
// }

// console.log(typeof yazdir());

// function greet(name, lastName="") {
//     console.log(`merhaba ${name} ${lastName}`);
// }

// greet("erhan", "yılmaz");  // ikinci parametre boş string idi fakat atayınca değeri getirdi.

// function calcAge(birthyear, name) {
//     // const message = `${name} is ${2022-birthyear} year old.`;
//     const message = `${name} is ${new Date().getFullYear()-birthyear} year old.`;
//     return message;
// }

// const message = calcAge("2001", "Elif");
// console.log(message);

// console.log(calcAge("2001", "Elif"));

// function oddEven(number) {
//     // return number % 2 === 0 ? `${number} is even` : `${number} is odd`;
//     return number % 2 ? `${number} is odd` : `${number} is even`; // bunda ilk kısmı alır
// }

// console.log(oddEven(5));
// console.log(oddEven(20));

// const oddEven = function(number) {   // function expression yöntemi
//     return number % 2 ? `${number} is odd` : `${number} is even`;
// }    // bu yöntemde önce tanımlama yapılır sonra invoke(call) yapılır yoksa hata veriyor.

// console.log(oddEven(5));
// console.log(oddEven(20));

// const findBigOne = function (n1, n2, n3=Number.MAX_VALUE) {
//     if (n1 > n2 && n1 > n3) {
//         return `is ${n1}`;
//     }
//     else if (n2 > n1 && n2 > n3) {
//         return `is ${n2}`;
//     } else {
//         return `is ${n3}`
//     }
// }

// console.log(`The largest number`, findBigOne(-8, -9));

// function findMax() {       // bir arkadaşın örnek çözümü
//     let max = -Infinity;
//     for (let i = 0; i < arguments.length; i++) {
//       if (arguments[i] > max) {
//         max = arguments[i];
//       }
//     }
//     return max;
//   }
//   console.log(findMax(4,5,3));

//////////////// ARROW FUNCTIONS ///////////////////////

// const topla = (a, b) => a + b;  // return gibi sonuç veriyor
// console.log(typeof topla(2, 3));   // çok satırda avantaj kalkıyor, this keyword kullanılamıyor.

// const multiply = (x, y) => x * y;
// console.log(multiply(8, 9));

// const getPower = (k, j) => {  // arrow ile curly brace kullanımı, çoklu satırda şart, return kullanmak şart, console.log olmaz
//     return k ** j;
// }
// console.log(getPower(8, 3));

// const oddEven = (n) => n % 2 ? `odd` : `even`;  // n%2 ya 1 ya 0 verir, 1 true 0 false döndürür.
// console.log(oddEven(24));

// const r = Number(prompt(`enter radius : `));
// const h = Number(prompt(`enter height : `));

// const calcVolume = (r, h) => Math.PI * r * r * h;
// console.log(`cylinder volume : `, Math.trunc(calcVolume(r, h))); // trunc ondalık kısmı atar
// console.log(`cylinder volume : `, calcVolume(r, h).toFixed(3));  // toFixed parantezindeki sayı kadar ondalık basamak getirir ama STRING e çevirir.!!!

// SORU2: kareAl, küpAl, üsAl şeklinde üç adet farklı arrow fonksiyonu tanımlayın. Bu fonksiyonların ana programdan gereken parametreleri alarak sonuçları ana programa döndürmeleri gerekmektedir.

const getSquare = (g) => (g ** 2);
console.log(getSquare(3));

const getCube = (t) => (t ** 3);
console.log(getCube(4));

const getPower = (h, p) => (h ** p);
console.log(getPower(9, 2));








