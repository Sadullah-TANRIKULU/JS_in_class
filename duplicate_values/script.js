// write a JS code to find duplicate values in an array.
// Pseudocode:
// findDup(arr) function oluştur
// for loop ile bir eleman al
// bu elemanı for loop ile diğerleriyle karşılaştır
// 

const array = [4, 4, 32, 69, 8, `angular`, `angular`, `react`, 4.5, 9, 2.1, 2.1, `oops`, true, true];

const duplicatedElements = [];

let findDup = function () {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let newArr = new Array;
        newArr = array.slice(i+1, array.length + 1);
        console.log(newArr);
        if (newArr.includes(element)) {
            duplicatedElements.push(element);
        }
    }
    return duplicatedElements;
}
findDup();
console.log(duplicatedElements);

// 2. way
// const arr1 = [4, 2, 34, 4, 1, 12, 1, 4];
// const sonuc = [];

// function findDup(arr) {
//   for (let i = arr.length; i >= 0; i--) {
//     let deleted = arr.pop();
//     if (arr.includes(deleted) && !sonuc.includes(deleted)) {
//       sonuc.push(deleted);
//     }
//   }
//   return sonuc;
// }

// console.log(findDup(arr1));