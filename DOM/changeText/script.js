// DOM işlemleri (sıradaki JS konusu)
// Change the text in the first and the last list item element in every unordered list element on this page. Change it to 'first' and 'last'.
// querySelectorAll, Pseudo Elements ve forEach kullanarak çözülecek



// const li = document.getElementsByTagName('li'); // HTML collection old.için doğrudan kullanılamaz
// console.log(li);

const firstLis = document.querySelectorAll('ul > li:first-child');  // query selector özelliğinden faydalandık
console.log(firstLis);
const lastLis = [...document.querySelectorAll('ul > li:last-child')];  // sread operator ünden faydalandık
console.log(lastLis);

firstLis.forEach(li => li.textContent = 'first');

lastLis.forEach(li => li.textContent = 'last');

