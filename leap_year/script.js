//SORU3: Yıl değerini parametre olarak alan ve bu yılın artık yıl olup olmadığını hesaplayarak 
//sonucu ana programa döndüren fonksiyonu function-expression() yöntemi ile yazınız. NOT: Yıl 4’e
// tam bölünüyorsa VE (100'e tam bölünmüyorsa VEYA 400'e tam bölünüyorsa) artık yıldır aksi takdirde 
// değildir.

// Pseudocode:
// prompt year
// function expression kullan
// year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0)
// 

// const year = Number(prompt(`enter a year is it leap year? : `));
// let leapYear = function(year) {
//     if (year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0) ) {
//         console.log(`${year} is a leap year`);
//     } else {
//         console.log(`${year} is %cNOT a leap year`, `background-color: yellow; color: blue`);
//     }
// }
// leapYear(year);