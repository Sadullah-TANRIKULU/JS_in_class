console.log("%cscript.js is running...", "background-color: brown; color: yellow");
// STRINGS
const str1 = `clarusway way to reinvent yourself`;
const str2 = `howdy`;
const str3 = `folks!`;

console.log(typeof str1);
const str4 = str2 + ` ` + str3;
console.log(str4);   //  primitive(object olmayan) veri tipinin metotları olmaz, . koyup göremeyiz.
const str5 = new String(`caution! non-primitive string`);
console.log(str5, typeof str5);

// //* Normalde primitive veri tiplerinin property veya metodu olmaz.
// //* Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
// //* Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
// //* primitive string ile kullanılabilir hale gelir.
// //* Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.
// console.log(str4.concat(str1));
// console.log(str1.concat(`clarusway`, str4));

// console.log(str1.charAt());
// console.log(str1.charAt(4));
// console.log(str5.charAt(str5.length - 1));

// console.log(str1.includes(`way`));
// console.log(str1.includes(`EI`)); // case sensitive
// console.log(str1.includes(`ei`));
// console.log(str1.includes(``));
// console.log(str1.includes(`way`, 10));  // 11 den sonra way yok o yüzden false

// console.log(str4.indexOf(`nve`));  // bulamazsa negative döndürür
// console.log(str4.indexOf(`dy`));  // index ini döndürür.

// console.log(str4.lastIndexOf(`lks`));  // başladığı index ini döndürür.

// console.log(str5.startsWith(`st`, 22));  // 23 true veriyor
// console.log(str5.startsWith(`ca`));

// console.log(str3.replace(`f`, `doo`)); 
// console.log(str3); // immutable string değişmedi 
// console.log(str3.replace(`F`, `doo`)); // case sensitive
// console.log(str3.replace(/F/i, `doo`)); // regex ile case insensitive yapmak

// console.log(str5.slice(5)); // 5. index ve sonrasını slice etti
// console.log(str5.slice(5, 9)); // 5. index ve sonrasını 9. hariç slice etti
// console.log(str5.slice(-5)); // -1. indexten başlayıp slice etti
// console.log(str5.slice(-6, -5)); // -6. indexten -5 e slice etti sağdan sola yok

// console.log(str1.split(` `));  // boşluklardan böler liste yapar
// console.log(str1.split(` `, 1));  // boşluklardan böler array yapar 1.parçayı verir
// console.log(str1[3]);  // 3.index i getirdi
// console.log(str1.split(``)); // null a göre, karakter adedince elemanlı array yaptı.
// console.log(str2.split());  // tek elemanlı array yaptı

// let mahya = `     Sakız bozmaz     `;
// console.log(mahya.trim()); // boşlukları alır, length ile kontrol edilebilir.

//* ÖDEV
//* ----------------------------------------------------------
let longLink = `https://www.youtube.com/watch?v=b7vfp5G4brE`;
// `https://youtu.be/b7vfp5G4brE`
// make this shortLink ?
// Pseudocode:
// get length of longlink
// get index of `b7...` part
// delete startswith `watch...` part
// replace `be.com`, `.be`

console.log(longLink.length);
console.log(longLink.indexOf(`b7`));
console.log(longLink.replace(`watch?v=`, ``));
let newLongLink = longLink.replace(`watch?v=`, ``);
console.log(newLongLink);
console.log(newLongLink.lastIndexOf(`.`));
let shortLink = newLongLink.replace(`be.com`, `.be`);
console.log(shortLink);

























