// const factorial = [5, 4, 3, 2, 1];  // sort ile tersten sıralayıp reduce ile factorial alınabilir
// console.log(factorial.reduce((x, y) => x * y));


// object nasıl oluşturulabilir
// new Object()

// const vechiles = new Object();
// vechiles.brand = `BMW`;
// vechiles.motor = 1.3;
// vechiles.model = `2022`;
// console.log(vechiles);
// vechiles['brand'] = `Audi`;

// console.log(vechiles);

//* ---------------------------------------------------------
//* 2- object constructor'ı kullanarak (OOP ile ayrıntılandırılacak)
//* ---------------------------------------------------------

//* Object constructor========================================================
// function Personel(id, ad, maas) {    // function değil de object olacaksa baş harfi büyük olur
//     this.perId = id;
//     this.perAdi = ad;
//     this.perMaas = maas;
//     console.log(this); //! Personel objesine bağlanmıştır (binded)
//   }
  
//   const ahmet = new Personel(101, "Ahmet", 75000);
//   const canan = new Personel(102, "Canan", 85000);
//   console.log(ahmet, canan);
//   console.log(canan.perMaas);
//   console.log(ahmet.perAdi);
//   console.log(this); //! window objesine bağlanmıştır

// Object Literal==============================================================
// const labor = {
//     name : { firstName: 'Ahmet', secondName: 'Murat'},
//     surname: 'Yilmaz',
//     age : '30',
//     softlangs : ['Python', 'C++', 'JS', `Ruby`, `Swift`, "Unity"],
// }
// labor.location = 'Australia';

// const worker = labor;  // referans aktarımı denir, değişiklikler ikisini de değiştirir
// worker['surname'] = 'Oguz';  // ikisini de değiştirdi
// console.log(worker);
// console.log(labor);


// console.log(labor.name.secondName);
// console.log(labor.softlangs[4]);
// console.log(labor.location);

//=========================Object Metotları================================

// const labor = {
//     name : { firstName: 'Ahmet', secondName: 'Murat'},
//     surname: 'Yilmaz',
//     bornDate : 1986,
//     age : '30',
//     softlangs : ['Python', 'C++', 'JS', `Ruby`, `Swift`, "Unity"],
//     calcWorkDays: function() {
//         return new Date().getFullYear() - this.bornDate;         //  this yerine labor. ile de yazılabilirdi, this daha doğru
//     },
//     coverLetter : function() {
//         return `${this.name.secondName}, ${this.calcWorkDays()}`;
//     }
// }

// console.log('Age :', labor.calcWorkDays());
// console.log('Cover Letter : ', labor.coverLetter());

// arrow functionlar her zaman global scope u gösterir, this keyword ü ile kullanılamazlar.

//=========================Object Iteration=========================================
//  const devs = {
//      firstDev : {
//      name : 'Galip',
//      title: 'FE Dev',
//     },
//      secondDev : {
//      name : 'Asım',
//      title: 'BE Dev',
//     }
//  }
// bu yöntem daha çok tercih ediliyor
//  const kisiler = [
//     {
//       name: 'Ahmet',
//       surname: 'Can',
//       job: 'developer',
//       age: 30,
//     },
//     {
//       name: 'Mehmet',
//       surname: 'Baki',
//       job: 'tester',
//       age: 35,
//     },
//     {
//       name: 'Nur',
//       surname: 'Ersan',
//       job: 'team lead',
//       age: 40,
//     },
//     {
//       name: 'Merve',
//       surname: 'Veli',
//       job: 'developer',
//       age: 26,
//     },
  
//     {
//       name: 'Ruzgar',
//       surname: 'Kuzey',
//       job: 'tester',
//       age: 24,
//     },
//   ];

// kisiler.forEach((kisi) => console.log(kisi.job));

// const yaslar = kisiler.map((kisi) => kisi.age + 1);
// console.log(yaslar);

// const kisilerFull = kisiler.map((kisi) => ({
//     fullname: kisi.name.toUpperCase() + " " + kisi.surname.toUpperCase(), 
//     age: kisi.age + 5
// }));

// console.log(kisilerFull);

// arrow function da süslü açmak gerekirse yani işlem alt satıra inerse return işini kendimiz return ile yaparız, diğer türlü kendi otomatik döndürür.


//* Ornek7: kisilerin ortalama yasini hesaplayiniz.
// const ortYas = kisiler.reduce((t, kisi) => t + kisi.age, 0) / kisiler.length;

// console.log('Ortalama Yaş : ', ortYas);

//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================

// const car = {
//   name: 'BMW',
//   model: 1990,
//   engine: 1.6,
// };

// //* 1.YONTEM (Classical)
// console.log(car.model);
// console.log(car['name']);
// // DESTRUCTURING
// const {name, model, engine} = car;
// console.log(name, model, engine);


//* EXAMPLE: NESTED DESTRUCTURED=================================================
// const cars = {
//   car1: {
//     name: "BMW",
//     model: 1990,
//     engine: 1.6,
//   },
//   car2: {
//     name: "Mercedes",
//     model: 2022,
//     engine: 2.0,
//   },
// };

// const {car1, car2} = cars;
// console.log(car1, car2);

// const {name, model} = car1;
// console.log(name, model);

// const {name, model} = car2;
// console.log(name, model);  // name üstteki çözümde global oldu, tekrar aynı şekilde kullanmaya izin vermiyor, isim değişikliği gerekiyor

// const {name: newname, model: newmodel} = car2;
// console.log(newname, newmodel);

// const kisiler = [
//     {
//       name: 'Ahmet',
//       surname: 'Can',
//       job: 'developer',
//       age: 30,
//     },
//     {
//       name: 'Mehmet',
//       surname: 'Baki',
//       job: 'tester',
//       age: 35,
//     },
//     {
//       name: 'Nur',
//       surname: 'Ersan',
//       job: 'team lead',
//       age: 40,
//     },
//     {
//       name: 'Merve',
//       surname: 'Veli',
//       job: 'developer',
//       age: 26,
//     },
  
//     {
//       name: 'Ruzgar',
//       surname: 'Kuzey',
//       job: 'tester',
//       age: 24,
//     },
// ];

//   kisiler.forEach((kisi) => {
//     const {name, job, surname, age} = kisi;  // böyle yazarsak alttaki console.log içinde kisi.name diye yazmaya gerek yok
//       console.log("NAME : ", name);
//       console.log("SURNAME : ", surname);
//       console.log("JOB : ", job);
//       console.log("AGE : ", age);
//   });

//   //* function
// function getInfo() {
//     return {
//       id: 101,
//       name: "Apple",
//       price: 20000,
//     };
//   }
//   const { id, name, price } = getInfo();
//   console.log(id, price);

  // DESTRUCTURING ARRAY======================================
//   const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"];

//   const [p1, p2, __, p4] = names;   // bu şekilde alınır

//   console.log(p1, p2, p4);  // p4 demek bişey değiştirmez sıradakini alır

//*======================================================
//*   NEW GENERATION OPERATORS: SPREAD OR REST (...)
//* ======================================================

// /* REST: (Arrays) */
// const vehicles = ["bmw", "reno", "mercedes", "ferrari", "anadol"];

// const [vec1, vec2, ...restVehicles] = vehicles;

// console.log(vec1, vec2, restVehicles);

// // REST Objects
// const personel = {
//     pName: "john",
//     surname: "smith",
//     job: "dev",
//     age: 30
// };

// const {pName, job, ...restInfo} = personel;

// console.log(pName, job, restInfo);

// REST Functions========================

// const topla = (x, y) => {
//     return x + y;
// };

// console.log(topla(1, 2, 3, 4, 5, 6));

// const sum = (...sayilar) => {   // rest operatörü array e çevirdi
//     let toplam = 0;
//     console.log(sayilar);
//     sayilar.forEach((sayi) => (toplam += sayi));
//     return toplam;
// }

// console.log(sum(1, 2, 3, 4, 5, 6));


// SPREAD KULLANIM ÖRNEKLERİ==================================

const araclar = ['ucak', 'helikopter'];
const otolar = ['otobus', 'SUV'];

const hepsiArac = [...araclar, ...otolar]; // array leri birleştirdi
console.log(hepsiArac);

// Example
const meyveler = ["cherry", "pear", "apricot", "raisin"];
const turunclar = ["mandarin", ...meyveler, "lime", "orange"];
console.log(turunclar);

// Ornek (String spread)
let str = "Hello FS";
console.log([...str]);
console.log(Array.from(str));

// Ornek (max)
console.log(Math.max(1, 3, 9, 5));
const rakamlar = [1, 3, 9, 5];
console.log('MAX:', Math.max(...rakamlar));



















//* Ornek4: Yasi(age) 33 den kücük olan kisilerin adlarini (name) listeyiniz.

//* Ornek5: 33 yasindan kücüklerin isimlerini diziye saklayiniz.

//* Ornek6: Meslegi developer olanlarin isim ve yaslarini yeni bir Obje olarak
//* yeni diziye saklayiniz.
