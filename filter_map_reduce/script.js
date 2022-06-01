//If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the //positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.
// Pseudocode:
// n'e bir değeri ata
// positive olcak
// n'e kadar olan sayıların factorial ı
// n! = (n-1)*(n-2)*(n-3)...
// n-(n-1)


// const n = 5;

// let result = 1;

// if(n > 0) {
// for (let i = n; i > 0; i--) {
//     result *= i;
// }
// } else {
//     console.log('enter a positive integer');
// }

// console.log(result);

// faktoriyel sorusu (map, fill ve reduce ile çözülecek)

// const input = 0;

//   const array = new Array(input).fill(null);
//   // array is [null, null, null, null, null, null]

//   console.log(array
//   .map(function(currentValue, index) {   // index sıfırdan başladığı için return i + 1 yaptı
//     return index + 1;
//   })
//   .reduce(function(accumulator, currentValue) {
//     return accumulator * currentValue;
//   }));


//   // or written with Arrow function
//   new Array(input)
//   .fill(null)
//   .map((currentValue, index) => index + 1)
//   .reduce((accumulator, currentValue) => accumulator * currentValue);



//=============>
// Calculate the mean and median values of the number elements from the input array.
// Pseudocode:
// bir array oluştur
// array içindeki sayıları topla ve eleman sayısına böl
// virgülden sonra 1 değer al trunc, ceil, floor, round, toFixed
// mean : ortalama, median: sayı miktarının bir fazlasının ikiye bölümüdür
// array length tek sayı ise (length+1)/2 , array length çift sayı ise ortadaki iki değerin aritmetik ortalamasını al

// const array = [20, 15, 10, 5, 78, 36, 3, 6, 4, 45];
// let result = 0;
// for (const iterator of array) {
//     result += iterator
// }
// console.log(Math.floor(result / array.length)); // mean

// if (array.length % 2 !== 0) {
//     console.log(array[((array.length + 1) / 2) - 1]);
// } else {
//     x = array.slice((array.length / 2) - 1, (array.length / 2) + 1);
//     console.log(x);
// }
// console.log((x[0] + x[1]) / 2); // median

// fiyatlar array in her bir fiyata 10% zam
// Pseudocode:
// her bir fiyata ulaşcaz
// her fiyatı 1.1 çarp, 10% zam için
// array değişecek

// prices = [250, 600, 320, 120, 73];

// prices.forEach((x, i, arr) => arr[i] = (x * 1.1).toFixed(2));
// console.log(prices);

// prices 90 dan büyük olanları tek tek yazdır
// pseudocode:
// forEach kullanılabilir

// console.log(prices.filter((x) => x > 90));


// prices 110 dan küçük olanları 10% artır ve konsola yazdır
// pseudocode:
// filter

// const prices = [250, 600, 320, 120, 73];
// const empty = new Array;

// prices
// .filter((x) => x < 110)
// .map((x) => x * 1.1)
// .forEach((x) => empty.push(x.toFixed(2)));

// console.log(empty);



// prices 4000 den düşük olanlara 25% zam yap veayrı array olarak sakla
// pseudocode:
// her elemanı al
// 1.25 25% zam
// empty new Array

// const prices = [25000, 3900, 3200, 120000, 73000];
// const wempty = [];

// prices
// .filter((x) => x < 4000)
// .map((x) => Math.round(x * 1.25))
// .forEach((x) => wempty.push(x));

// console.log(wempty);



// annualSalary toplamını forEach ve reduce ile çöz
// const annualSalary = [25000, 3900, 3200, 120000, 73000];
// let sum = 0;
// annualSalary.forEach((v) => sum += v);
// console.log(sum);
// console.log(annualSalary);

// const annualSalary = [25000, 3900, 3200, 120000, 73000];
// //===========2nd way==================
// // reduce yöntemi --> orjinal array i değiştirmez.

// // let a = annualSalary.reduce((x, y) => x + y);
// // console.log(a);

// let b = annualSalary.reduce(price);

// function price(j,k) {
//     return j + k;
// }
// price();

// console.log(b);



// The goal of this exercise is to convert a string to a new string where each character in the new string is "("
// if that character appears only once in the original string,
// or ")" if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.
// Examples:
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// pseudocode:
// her karaktere bir (
// birden fazlaysa )
// replace
// her karakteri iterasyona sok
// aynısı varsa replace

// let str1 = "recede";

// str1 = str1.toLowerCase();
// let result = [];

// str1.split("").forEach(function (char) {
//     console.log(str1.split(char));
//   if (str1.split(char).length > 2) {
//     result.push(")");
//   } else {
//     result.push("(");
//   }
// });
// console.log(result.join(""));


// If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0. (filter ve reduce ile çözülecek)

// const input = [20, -12, 65, 140, -90];

// console.log(input.filter((v, i, arr) => arr.length > 0 && v > 0).reduce((x, y) => x + y));


  // console.log(input
  // .filter(function(num) {
  //   return num > 0;
  // })
  // .reduce(function(accumulator, currentValue) {
  //   return accumulator + currentValue;
  // }, 0));

  // // or written with Arrow function 
  // input.filter(num => num > 0)
  // .reduce((accumulator, currentValue) => accumulator + currentValue, 0);





//=============>
// Calculate the mean and median values of the number elements from the input array.
// Pseudocode:
// bir array oluştur
// array içindeki sayıları topla ve eleman sayısına böl
// virgülden sonra 1 değer al trunc, ceil, floor, round, toFixed
// mean : ortalama, median: sayı miktarının bir fazlasının ikiye bölümüdür
// array length tek sayı ise (length+1)/2 , array length çift sayı ise ortadaki iki değerin aritmetik ortalamasını al

// const array = [12, 46, 32, 64, 20];
// let result = 0;
// for (const iterator of array) {
//     result += iterator
// }
// console.log(Math.floor(result / array.length)); // mean

// if (array.length % 2 !== 0) {
//     console.log(array[((array.length + 1) / 2) - 1]);
// } else {
//     x = array.slice((array.length / 2) - 1, (array.length / 2) + 1);
//     console.log(x);
    
// }
// console.log((x[0] + x[1]) / 2); // median


// mean ve median sorusu (reduce, sort ve abs ile çözülecek)

// let sum = array.reduce((x, y) => x + y);
// let mean = sum / array.length;
// console.log(mean);

// const input = [12, 46, 32, 64, 20];
//   input.sort((a, b) => a - b);

//   console.log(input
//   .reduce((accumulator, currentValue, index, array) => {

//     accumulator.mean += currentValue /  array.length;

//     if(Math.abs(index + 1  - array.length / 2) < 1) { 
//       accumulator.median = currentValue 
//     }

//     return accumulator;
//   }, { mean: 0, median: 0 })); // 34.8, 32


// Count the occurrences of distinct elements in the given 2D array. 
// The given input is an array, the elements of which are arrays of strings. 
// The result is an object whose property names are the values from the arrays 
// and their value is the number of their occurrences. (reduce ve flat ile çözülecek)
// pseudocode:
// 
// const input = [
//   ['a', 'b', 'c', 'a'],
//   ['c', 'd', 'f', 'f'],
//   ['d', 'f', 'g', 'c'],
// ];
// result
// {
//   a: 1,
//   b: 1,
//   c: 2,
//   d: 2,
//   f: 2,
//   g: 1,
// }
// const array = input.flat();
// console.log(array);
// let countedArray = array.reduce(function(prev, current) {
//   if (current in prev) {
//     prev[current]++
//   } else {
//     prev[current] = 1
//   }
//   return prev
// }, {});
// console.log(countedArray);



// The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials. (map, split ve join ile çözülecek)






















