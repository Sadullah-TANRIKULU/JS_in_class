// sort array without using sort method?
let a = [999, 333, 2, 8982, 12, 45, 77, 99, 11];
// Pseudocode:
// her elemanı 0 yapana kadar sıradan seç ve 1 eksilt
// döngü sayacı tut
// döngü sayacı
let b = [];
// Second Way:
 for(let i = a.length - 1; i >= 0; i--) {
   let mini = Math.min(...a);
   b.push(mini);
   a.splice(a.indexOf(mini), 1);
 }
 console.log(b);