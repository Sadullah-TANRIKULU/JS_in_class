console.log("script.js is running...")

// let text;
// let fruit = prompt("type your favourite fruit : ");
// // banana, lime, lemon, orange, apple, default
// switch (fruit.toLowerCase()) {
//     case "banana":
//         text = "i like banana"
//         break;
//     case "lime":
//     case "lemon":
//     case "orange":
//         text = `i'm not a fun of ${fruit}`;
//         break;
//     case "apple":
//         "i like apple";
//         break;
//     default:
//         text = "idk that fruit";

// }
// console.log(text)


// ! example-5  cw weekly program
// pazartesi salı çarşamba perşembe in class
// cuma team work
// cumartesi inclass + workshop
// pazar self study
// default yanlış gün girildi.

// let text;
// let day = prompt("type your day : ");

// switch (day.toLowerCase()) {
//     case "monday":
//     case "tuesday":
//     case "wednesday":
//     case "thursday":
//         console.log("in-class");
//         break;
//     case "friday":
//         console.log("teamwork");
//         break;
//     case "saturday":
//         console.log("in-class and workshop");
//         break;
//     case "sunday":
//         console.log("self-study");
//         break;

//     default:
//         console.log(`${day} is not a day`);
//         break;
// }

// const year = 2024;
// const month = 2;
// let dayCount;

// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         dayCount = 31;
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         dayCount = 30;
//     case 2:
//         if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) dayCount = 29;
//         else dayCount = 28;
//         break;
//     default:
//         dayCount = -1; //invalid month
//         break;
// }

// console.log(dayCount)

// girilen ay ismine karşılık gelen sıra numarası veren programı switch-case ile yazın.
// pseudocode:
// switch prompt monthName
// case 12 monthName

let monthName = String(prompt(`enter a monthName to get its number : `));
let monthNumber;
switch (monthName) {
    case "January":
    monthNumber = "1";
        break;
    case "February":
    monthNumber = 2;
        break;
    case "March":
    monthNumber = 3;
        break;
    case "April":
    monthNumber = 4;
        break;
    case "May":
    monthNumber = 5;
        break;
    case "June":
    monthNumber = 6;
        break;
    case "July":
    monthNumber = 7;
        break;
    case "August":
    monthNumber = 8;
        break;
    case "September":
    monthNumber = 9;
        break;
    case "October":
    monthNumber = 10;
        break;
    case "November":
    monthNumber = 11;
        break;
    case "December":
    monthNumber = 12;
        break;
    default:
        console.log(`Month Name is wrong!`);
        break;

}

console.log(`${monthName} is ${monthNumber}. month!`);









