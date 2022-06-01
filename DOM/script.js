// querySelector #id, .class, default tagName
// innerHTML bit tag i render eder
// const par = document.getElementsByClassName('par');

// document.querySelector('.par');

// btn.style.backgroundColor = 'black';
// btn.style.color = 'yellow';
// btn.style.fontSize = '2rem';


// par[0].textContent = 'DOM manipülasyonu';
// par bütün classlarına atandığı için index le çağırdım
// par[0].innerText = 'DOM manipülasyonu';
// par[0].innerHTML = '<a href= "https://www.clarusway.com">DOM</a>';

// document.querySelector('title').textContent = 'JS09-DOM 😍';

// const myPars = document.querySelectorAll('p');
// console.log(myPars);

// myPars.forEach((p) => console.log(p.innerText));
// innerText text getirir
// myPars.forEach((p) => console.log(p.innerHTML));
// innerHTML html code getirir
// document.getElementById(`header`).style.color = 'red';

// const myPars1 = document.getElementsByClassName('par');
// const myParsArray = Array.from(myPars1);
// console.log(myParsArray);

// myParsArray.forEach((p) => console.log(p.innerText));
// HTML collectiondan array e:
// Array.from()
// Spread operatörü [...myPars]
// queryselector harici bişey kullanırsak html collection olur, çevirmek için üstteki yöntemler kullanılır
// HTMLCollection ve NodeList arasındaki temel fark, 
//birinin canlı, birinin statik olmasıdır. 
// Bu, DOM'a bir öğe eklendiğinde, canlı bir düğümün yeni öğeyi tanıyacağı, 
// ancak statik bir düğümün tanımayacağı anlamına gelir.
// ! İnnerHtml dediğimizde html satırının hepsini döndürür
//! innerText dediğimizde html tagınınn içeriğini döndürür
//! textContent dediğimizde html tagınınn içeriğini ve html de bulunan boşlukarı birlikte döndürür
// myPars.forEach((p) => console.log(p.innerText));       // bosluklari almaz
// myPars.forEach((p) => console.log(p.textContent));       // bosluklari da alir
// myPars.forEach((p) => console.log(p.innerHTML));       // kodla birlikte cevirir

// [...myPars].forEach((p) => console.log(p.innerText));

// console.log(document.querySelector('section p a'));
// querySelector ile CSS selector lerin hepsi kullanılabilir

// DOM olayları
// 3.yöntem
// document.getElementById('header').onmouseover = function() {
//     document.getElementById('header').style.color = 'green';
// };
// document.getElementById('header').onmouseout = function() {
//     document.getElementById('header').style.color = 'darkorange';
// };


// 4.yöntem
// const myImg = document.querySelector('.img-logo');
// const button = document.querySelector('#btn');

// btn.addEventListener('click', function (event) {
    
//     if (myImg.querySelector('.img-logo')) {
//         myImg.style.transform = 'translateY(15px)',
//         btn.textContent = 'Search'
//     }  else {
//         myImg.querySelector('.img-logo');
//         myImg.style.transform = 'translateY(-15px)';
//     }
//     console.log(event.target);
// })


// btn.addEventListener('click', () => {
//     myImg.querySelector('.img-logo');
//     myImg.style.transform = 'translateY(-15px)';  
// })


//=============DOM EXAMPLES====================================================































