// const array = [`kalem`, `silgi`, `mouse`, `screen`, `glasses`, 9, 20, 62, 3.14, -48, true, false];

// sadece number olanları 3 ile çarpalım
// stringleri slice la


// 

//*-------------- ÖDEV -------------------
//* fiyatlar dizisinde her bir fiyata %10 zam yapalım.
// fiyatlar = [250, 600, 300, 950, 155];

// fiyatlar.forEach((element, index, arr) => {
//     return arr[index] = Math.ceil(element*0.1) + element;
        
// });

// console.log(fiyatlar);

// array.forEach((value, i, arr) => {
//     if (typeof value === typeof Number()) {
//         arr[i] = value * 3;
//     }        
// });
// console.log(array);


// const fiyatlar = [100, 250, 50, 89];

// fiyatlar.filter((x) => x > 90).forEach((x) => console.log(x));

// fiyatlar.filter((x) => x < 110).map((x) => x * 1.1).forEach((x) => console.log(x.toFixed(2)));

// const empty = [];
// const annualSalary = [3000, 4000, 5000, 6000, 4050, 3250, 1000];
// annualSalary.filter((x) => x < 4000).map((x) => x * 1.5).forEach((x) => empty.push(x));
// console.log(empty);

//=====>
// Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence.  

// const input = 'Every developer likes to mix kubernetes and javascript';
// result 'E3y d7r l3s to mix k8s and j8t'

// Pseudocode:
// her kelimeye eriş veya bir array içine at split-> array, for
// her kelimenin ilk harfini al array[0].slice(), 
// her kelimenin son harfini (array[0].slice(length-1))
// arada kalan harfleri saydır , replace<->length 
// array i stringe dönüştür, join

// const array = input.split(` `);

// const empty = [];

// for (let i = 0; i < array.length; i++) {
//     if(array[i].length > 3) {
//         y = array[i][0] + ((array[i].length)-2) + (array[i][array[i].length-1]);
//         empty.push(y);
//     } else {
//         empty.push(array[i]);
//     }   
// }
// console.log(empty);

// =========================================================================
// Pseudecode:

// array.filter((x) => x.length < 4).forEach((x) => empty.push(x));
// array.filter((x) => x.length <= 3 ? empty.push(x) : x)      

// array.filter((x) => x.length > 3).map((x) => x.slice(0,1) + (x.length-2) + x.slice(-1)).forEach((x) => empty.push(x))   
// slice(-1) string ve array de son index i verir

// console.log(empty.join(' '));










