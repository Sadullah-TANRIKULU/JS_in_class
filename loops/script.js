console.log("script.js is running...")

// for(let i=1;i<=10;i++) {
//     console.log(`${i}-Hello World!`)
// }


// for(let i=1;i<=3; i++) {  // i daha sonra değişebileceği için const olmaz
//     const randomSayi = Math.trunc(Math.random() * 100 +1); // trunc virgül sonrasını atar
//     console.log(randomSayi);
// }

// for(let i=1;i<=3; i++) {  // i daha sonra değişebileceği için const olmaz
//     const randomSayi = Math.floor(Math.random() * 100 +1); // floor aşağı yuvarlar
//     console.log(randomSayi);
// }
// for(let i=1;i<=3; i++) {  // i daha sonra değişebileceği için const olmaz
//     const randomSayi = Math.ceil(Math.random() * 100 +1); // ceil yukarı yuvarlar
//     console.log(randomSayi);
// }
// for(let i=1;i<=3; i++) {  // i daha sonra değişebileceği için const olmaz
//     const randomSayi = Math.round(Math.random() * 100 +1); // round değerine göre yuvarlar
//     console.log(randomSayi);
// }
// for(let i=1;i<=3; i++) {  // i daha sonra değişebileceği için const olmaz
//     const randomSayi = Math.round(Math.random() * 100 +1); // round değerine göre yuvarlar
//     console.log(randomSayi);
// }

// const n = +prompt("n sayısını giriniz : ");
// let toplam = 0; // let süslü içinde sürekli değişeceği için olmaz
// for(let i=1;i<=n; i++) {
    
//     toplam += i;
// }
// console.log("Toplam : ", toplam);

// WHILE LOOPS - DO WHILE LOOPS

// let i = 1;
// while(i <= 5) {
//     console.log("Heloo");
//     i++;5
//     5
// }

// let not;
// do {
//     not=prompt("0-100 arası not girin : "); // condition dışı girişlerde tekrar prompt ister, kullanıcıya hata mesajı veremiyoruz
// } while (not<0||not>100);
// console.log("Girdiğiniz not 0-100 arasındadır ", not);

//
// let puan =prompt("lütfen not girin (0-100) : ");

// while(puan<0 || puan>100) {
//     console.log("Girdiğiniz not 0-100 arası olmalıdır");
//     puan =prompt("lütfen not girin (0-100) : ");
// }

//? ÖDEV: Klavyeden Q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.

// Pseudocode:
// while loop 
// prompt grade, console.log
// ask user to a new record
// if answer is Q, exit loop
// else if answer is other, user will prompt a new grade

let enterGrade;
enterGrade = prompt("enter a student grade(0-100) : ");
while (enterGrade == "Q" || enterGrade == "q" || enterGrade>0 && enterGrade<100) {
    if(enterGrade<0 || enterGrade>100) {
        console.log("Girdiğiniz not 0-100 arası olmalıdır");
        
    }
    else if(enterGrade == "Q" || enterGrade == "q"){
        console.log("quiting...");
        break;
    } 
    else {
        console.log(`Grade-${enterGrade}`);
    }
    enterGrade = prompt("enter a student grade(0-100) : ");
}















