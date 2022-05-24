console.log(`%cscript.js is running...`, `background-color: black; color: lightgreen`);

// const names = [`mehmet`, `harun`, `sadullah`, `cevdet`, `kamil`, `mümin`];
// console.log(names);
// console.log(names.length);

// const softLangs = new Array(`python`, `javascript`, `golang`, `swift`, `unity`, `C#`);
// console.log(softLangs);

// const dsa = new Array(5);  // 5 elemanlı array için hafızada yer ayırdı :)
// console.log(dsa);
// const asd = new Array(5, 6);  // 2 elemanlı array yaptı
// console.log(asd);  

// console.log(softLangs[0]);
// softLangs[2] = `java`;
// console.log(softLangs);  // heap te bulunduğu ve mutable olduğu için golang java oldu.
// // array mutable dır, const ile yapılırsa elemanı değişir fakat tamamen değiştirilemez

// const ages = [22, 36, 89];
// const people = [`selman`, `yakut`, 2002, 25-18, true, 6.4, ages];
// console.log(people);
// console.log(people[people.length-1][1]);  // ages array inin 1.index ini verdi
// const valueee = ++people[6][2];  // ages array son eleman 89 u 90 yaptı
// console.log(valueee);

// const cars = [`BMW`, `Porsche`, `Ferrari`, `Geely`, `Ford`];
// const deleted = cars.pop();
// console.log(deleted);  // ford silindi

// const n = cars.push(`Renault`);
// console.log(cars, n);

// const boyut = cars.unshift(`Audi`);  // başa ekler length döndürür 
// console.log(boyut, cars);

// const silinen = cars.shift();  // en baştakini sildi
// console.log(silinen, cars);

// console.log(cars.reverse());  // indexleri terse çevirir
// console.log(cars);  // ters dönmüş hali ile kaldı array

// console.log(cars.sort());


// const rakamlar = [1, 2, 3, 10, 6, 5, 4];
// console.log(rakamlar.sort());  // ASCII ye göre
// rakamlar.sort((a, b) => a - b);
// console.log(rakamlar);  // callback function ile logical sıralama yaptık sadece sort olsa sayılarda hatalı yapabilir
// cars.splice(1, 0, `Bumble Bee`);  // 1 den başla, 0 silmeden demek, array e insert et demektir.
// console.log(cars);

// cars.splice(5, 1, `GMC`);  // 5 den başla, 1 silerek demek, array e insert et demektir.
// console.log(cars);

// const softLangs = new Array(`python`, `javascript`, `golang`, `swift`, `unity`, `C#`);

// softLangs.map();

// const islemler = [-3000, 4500, -2200, -6000, 9000];
// let yatirma = 0;
// let cekme = 0;
// const islemlerToplami = () => {
//     for (let i = 0; i < islemler.length; i++) {
//         if (islemler[i] >= 0) {
//             yatirma += islemler[i];
//         } else {
//             cekme += islemler[i];
//         }   
//     }
//     return `Toplam yatirma: ${yatirma}, Toplam cekme: ${-cekme}`;
// }

// console.log(islemlerToplami());

//* ======================================================
//*                   FOR-IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrncileri aramamızı sağlayacak ve aranılan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//*  fonksiyonu yazınız. Eğer aranılan isimde bir ogrenci yok ise
//* fonksiyon aranılan ogrenci bulunamdı dondurulmelidir.
//*--------------------------------------------------------
// const ogrenciler = [
//     "ahmet",
//     "mehmet",
//     "ismet",
//     "saffet",
//     "ahmet",
//     "nur",
//     "can",
//     "nur",
//     "mehmet",
//     "cem",
//   ];

//   const ogrenciBul = function(isim) {
//       let sayac = 0;
//       for (let i in ogrenciler) {
//           if (ogrenciler[i] === isim) {
//               sayac += 1;                  // sayac++ da olur, +sayac da olur


//           }
//       }
//       if (sayac === 0) {
//          return `${isim} bulunamadi`; 
//       } else {
//           return `${isim}, ${sayac} adet bulundu`;
//       }

//   }

//   let ogrIsim = `HANDE`.toLocaleLowerCase();
//   console.log(ogrenciBul(ogrIsim));

//* ======================================================
//*                   FOR-OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

// const ogrenciBulForOf = function (isim) {
//     let sayac = 0;
//     for (let ogrenci of ogrenciler) {
//         ogrenci === isim ? sayac += 1 : null;  // sayac++ da olur, +sayac da olur
//         // ogrenci === isim && sayac++;    // short-circuit yöntemi && koşul doğruysa demek
//         // ogrenci === isim || sayac--;    // short-circuit yöntemi || koşul yanlışsa demek        
//     }

//     // return !sayac ? `${isim} bulunamadi` : `${isim}, ${sayac} adet bulundu`; bu da doğru
//     return sayac ? `${isim}, ${sayac} adet bulundu` : `${isim} bulunamadi`;
//     // if (sayac === 0) {
//     //     return `${isim} bulunamadi`;
//     // } else {
//     //     return `${isim}, ${sayac} adet bulundu`;
//     // }


// }

// let ogrIsim = `HANDE`.toLocaleLowerCase();
// console.log(ogrenciBulForOf(ogrIsim));    
// // referance old. için yukardaki isim ile ogrIsim çakışmaz



//============FOREACH METHOD======================

// const fiyatlar = [100, 250, 50, 89];

// fiyatlar.forEach(yazdir);    // içine function alır

// function yazdir(v) {
//     console.log(v);
// }

// fiyatlar.forEach((value) => console.log(value));  // dahili fonk yazımı örneği

// let toplam = 0;
// fiyatlar.forEach((fiyat) => (toplam += fiyat));
// console.log(toplam);
// forEach void fonksiyondur yani birşey döndürmez içindekini yapar bitirir console.log(fiyatlar.forEach((fiyat) => (toplam += fiyat))); bu bişey döndürmez

// ---------------örnek-------------------------

// let toplam = 0;

// fiyatlar.forEach( (fiyat, index, dizi) => {
//     toplam += fiyat;
//     console.log(`${index}. iterasyon toplamı: ${toplam}`);
//     dizi[index] = fiyat + 10;
//     console.log(fiyatlar);
// })




// map() yeni bir dizi döndürür orjinali değiştirmez, array i modifiye için kullanılır
// const softLangs = new Array(`python`, `javascript`, `golang`, `swift`, `unity`, `C#`);

// const upperSoftLangs = softLangs.map((x) => x.toUpperCase());  // locale olmazsa ingilizce chars olur
// const lowerSoftLangs = softLangs.map((x) => x.toLocaleLowerCase());
// console.log(upperSoftLangs);
// console.log(lowerSoftLangs);

// const upperCaseSoftLangs = softLangs.map( (isim, i, dizi) => {
//     dizi[i] = isim.toLocaleLowerCase();
//     dizi[i] = isim.toLocaleUpperCase();

//     return isim.toLocaleUpperCase();
// })
// // arrow func da {} kullandıysak ve çıktı almak istersek return kullanmamız gerekiyor

// console.log(upperCaseSoftLangs);


// =================PIPELINE(CHAINING)==============================
// softLangs.filter((x) => x === `golang` ).map((x) => x.toLocaleUpperCase())
// .forEach((x) => console.log(x));

// map() return eder ama arkasından forEach gelince return biter sadece console dan okuruz






















