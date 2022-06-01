console.log("%cscript.js is running...", `color: lightblue; background-color: brown`);
// console.log("%creinvent yourself",
// `color: brown;
// background-color: lightblue;`);
// document.write("reinvent yourself");
// window.alert("reinvent yourself");
// window.prompt("reinvent yourself", "input");
// window.confirm("do you want to reinvent yourself?");
// //This is a single-line comment.
//             /*This is
//             a multi-line 
//             comment*/
// a = 3;       
// console.log(a); // undefined (not an error)      
// var a;
// console.log(b);      
// let b; // Uncaught ReferenceError: a is not defined

// var a = 4; // 4
// var a = 2; // 2
// // let a = 5;
// // let a = 3; // error
// let aValue;
// console.log(typeof aValue);
// aValue = null;
// console.log(typeof aValue);
// aValue = 42;
// console.log(typeof aValue);
// aValue = "Clarusway", 'Clarusway', `Clarusway`;
// console.log(typeof aValue);
// aValue = true;
// console.log(typeof aValue);
// aValue = 1234567891234567891234567890n;
// console.log(typeof aValue);
// aValue = Symbol("Clarusway");
// console.log(typeof aValue);
// aValue = { firstName: "John", lastName: "Doe" };
// console.log(typeof aValue);

// let age;
// console.log(age);  // undefined
// console.log(userName);  // is not defined

// let num1 = 015;
// let num2 = 025;
// let result = num1 + num2;
// console.log(`result is ${result}`);  // sonuç 40 olmadı çünkü 0 ile başlaması ve 8 den küçük sayı değerleri octal sistem anlamına gelir. 
                                     // Yani 8 tabanında topladı. 8**0 * 5 + 8**1 * 1 + 8**2 * 0 = 5 + 8 + 0 = 13(015 in octal değeri)

// let firstName = `David Moses`;
// let surName = 'HENDERSON';
// let myHomeTown = "Denizli";
// // let mySentence = firstName+ " " + surName + " " + myHomeTown;
// console.log(`I'm ${firstName} ${surName}. I'm from ${myHomeTown}.`);  // backtick kullanımı
// console.log("I'm " + firstName + " " + surName + ". I'm from " + myHomeTown + ".");  // quotes kullanımı

// console.log(Boolean("Hello World!"));
// console.log(Boolean([]));  // boş array python da false js de true :)
// console.log(Boolean('0')); //true
// console.log(Boolean(""));
// console.log('Boolean(0) : ', Boolean(0));
// console.log(Boolean(-0));
// console.log(Boolean(null));  //false
// let x;
// console.log(Boolean(x));  // value assign edilmemiş ama variable olarak define edilmiş sonuç false

// let Sym1 = Symbol("Sym");
// let Sym2 = Symbol("Sym");
// console.log(Sym1 === Sym2);  // unique identify yaptığı için aynı tanımlama === conmpare operand ıyla FALSE sonuç verdi.

// const myLaptop = new Object();  // object oluşturma yöntem 1
// myLaptop.make = 'HP';
// myLaptop.model = 'Spectre';
// myLaptop.year = '2022';
// myLaptop.color = 'lightgray';
// console.log("My laptop info : ",  myLaptop);

// const myCup = {                        // object oluşturma yöntem 2 (JSON file mantığı, python da dictionary gibi)
//     make:'Paşabahçe',
//     design: 'Palto Tasarım',
//     color: 'brown',
//     height: '10 cm',
// }
// console.log("My cup info : ",  myCup);

// var num = [7, 12, 143, 54, 37]
// num.sort(function (a,b) {
//     return b - a                  // a-b küçükten büyüğe anlamında
// })
// console.log(num);

// let x = " Clarusway ";
// y = x.length;
// console.log(x.length);   // boşlukları da sayıyor.

// let w1 = "Hi ";
// let w2 = "Community!";
// let newWord = w1.concat("ANGULAR " + w2);
// console.log(newWord);

// var a = "My name is __\"Lionel Messi\"";  // to ignore quotes put backslash leftside.
// console.log(a);

// var a = "Hi \"Angular Community!\"";
// console.log(a);

// console.log(typeof "");  // string

// var num = 3;
//  if (num < 7) {
//  console.log("Less than 7");
//  } else if (num < 5) {      //  if olursa bu satırı çalıştırıyor
//  console.log("Less than 5");
//  } else {
//  console.log("Greater than or equal to 7");
//  }

// var sum = 0;
// for (var i = 3; i < 7; i++) {  // i yi ilk döngüden sonra 1 artırıyor o yüzden sonuç 4 çıktı.
// sum += i;
// if (i ===3 || sum > 10) {
// continue;
// }
// console.log(i);  // 4
// console.log(sum);  // 7
// }

// var i = 0; var sum = 0; while(i<3){var sum = sum+i;i++;};console.log("The total is : " + sum);  // böyle yazınca ; önemi anlaşılıyor :)

// var s = `excellent work!`;
// console.log(s.search(`wo`));  // 10.indexte old. çıktı verdi

// var s = `today you should feel better, after treatment...`;
// console.log(s.substring(12));  // belirtilen index ve sonrasını döndürdü.

// const numArray = new Array(3, 5, 9, 7, 25, 41, 83);
// console.log(numArray);

// let daily = [`sleep`, `eat`, `code`, `code`, `code`, `read`];

// const junky = daily.unshift(`drink`);  // en başa ekler length artar
// console.log(daily);

// const hjk = daily.shift(2); // paranteze yazılanın önemi yok her türlü array ilk elemanı siler
// console.log(daily);

// const firstArray = new Array(`python`, `swift`, `unity`, `golang`);
// const secondArray = [`html`, `css`, `javascript`];

// const thirdArray = firstArray + secondArray
// console.log(thirdArray);

// const fourthArray = firstArray.concat(secondArray);
// console.log(fourthArray);

// let word = `javascript`;
// const wordee = word.split(``);
// console.log(wordee);  // harf harf array e çevirdi
// console.log(wordee.join(""));  // tekrar bir string e çevirdi

// let numberArray = [1, 2, 11, 23, 65, 64, 9, 78, 20, 5, 6, 9, 4, `9`, `8`, `7`, `33`];
// let stringArray = [`lkj`, `jhg`, `mnb`];
// numberArray.sort((a, b) => (a - b));  // sayılarda doğru yöntem bu
// console.log(numberArray);
// console.log(numberArray.sort()); // ASCII ye göre sıralar sayılarda yanlış sonuç verir.

// console.log(numberArray.length);
// console.log(numberArray.unshift(9), numberArray);
// console.log(numberArray.push(`11`), numberArray);
// console.log(numberArray.pop(), numberArray);
// console.log(numberArray.shift(), numberArray);

// console.log(stringArray.toString(), stringArray);
// console.log(numberArray.reverse());

// console.log(stringArray.reverse().reverse());

// const sortedNumberArray = numberArray.sort((a, b) => (a - b));
// console.log(sortedNumberArray);


// console.log(sortedNumberArray.splice(5, 9, 'dd', 'kk'));
// console.log(sortedNumberArray);

// console.log(sortedNumberArray.indexOf(/green/i));  // regex işe yaramadı

// console.log(stringArray.lastIndexOf('lkj', 2));


// const kisiler = [
//         {
//           name: 'Ahmet',
//           surname: 'Can',
//           job: 'developer',
//           age: 30,
//         },
//         {
//           name: 'Mehmet',
//           surname: 'Baki',
//           job: 'tester',
//           age: 35,
//         },
//         {
//           name: 'Nur',
//           surname: 'Ersan',
//           job: 'team lead',
//           age: 40,
//         },
//         {
//           name: 'Merve',
//           surname: 'Veli',
//           job: 'developer',
//           age: 26,
//         },
      
//         {
//           name: 'Ruzgar',
//           surname: 'Kuzey',
//           job: 'tester',
//           age: 24,
//         },
//     ];

// kisiler.forEach((v) => console.log(v.job));

// const newAges = kisiler.map((x) => x.age + 1);
// console.log(newAges);

// const kisilerFull = kisiler.map((kisi) => ({
//     fullname: kisi.name.toUpperCase() + " " + kisi.surname.toUpperCase(), 
//     age: kisi.age + 5
// }));

// console.log(kisilerFull);

// const array = [];
// kisiler.map((x) => x.name + " " + x.surname);

// console.log(array);

// // isimleri birleştir, küçük harf yap, araya - koy, yaşı 1 küçült

// const adVeYasBirlikte = kisilerFull.map((x) => ({
//     fullname: x.fullname.toLocaleLowerCase() + " " + x.age,
//     age: --x.age
// }));

// console.log(adVeYasBirlikte);

// const array = new Array();
// kisiler
// .filter((x) => (x.age < 33))
// .forEach((x) => array.push(x.name));


// kisiler.filter((x) => x.job === 'developer').map((x) => array.push(x.name + " " + x.age))

// console.log(array);

//========= This is an interview question asked by Google. ===========

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// pseudocode:
// listede her bir elemana ulaş
// 

let k = 17;
const givenList = [10, 15, 3, 7];

let control = function() {
  for (let i = 0; i < givenList.length; i++) {
    for (let ii = 0; ii < givenList.length; ii++) {
      if ((givenList[i] + givenList[ii]) === k) {
        console.log(givenList[i], givenList[ii]);
        console.log(true);
        
      } else {
        console.log(false);
        
      }
    }
  };
  return true;
}

console.log(control());





