// DOM işlemleri (sıradaki JS konusu)
// Add the CroCoder logo (image element) as a child element to the existing div element.
const imageSrc = 'https://crocoder.dev/icon.png';
// querySelector, createElement, appendChild ile çözülecek

const div = document.querySelector('.div');

const imgElement = document.createElement('img');


imgElement.setAttribute('src', 'https://crocoder.dev/icon.png');
// imgElement.src = imageSrc;
imgElement.className = 'picture';
imgElement.classList.add('resim');

console.log(imgElement);

div.appendChild(imgElement);

div.innerHTML += `<ul></ul>`;  // innerHTML eğer = koyarsan herşeyi siler sadece eşitlik kalır.






















