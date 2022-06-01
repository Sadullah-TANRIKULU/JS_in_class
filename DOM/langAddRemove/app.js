
const dilInput = document.querySelector('.diller');
const silBtn = document.getElementById('sil');
const ekleBtn = document.getElementById('ekle');
const dilSection = document.querySelector('#dil-section');

// document.createElement(isim) ile element (h1, div vs.) oluşturursak bir de
// Document.createTextNode(text) ile düğüm oluşturulmalıdır.

const ul = document.createElement('ul'); // nereye ekleyeceğini bilemez
dilSection.appendChild(ul);  // artık nereye bağlayacağını biliyor
// html dosyasında görünmeyen ama browser inspect-elements sekmesinde görünen ul elementi oluşturduk

//===========================================================================
// console.log(dilSection.children[0]);              // neyi seçtiğimizi console da görmek için
// console.log(dilSection.parentNode.parentNode);

// const h1 = ul.closest('.container').firstChild; // seçtiğim elementin first child ını getir
const h1 = ul.closest('.container').firstElementChild; // seçtiğim elementin first element child ını getir

console.log(h1);
h1.style.color = 'red';

buttons = ul.closest('.container').querySelectorAll('.btn');
console.log(buttons);
//=======================================================================

ekleBtn.onclick = function() {
    if (!dilInput.value) {
        alert('lütfen bişey girin!')
    } else {
        ul.innerHTML += `<li>${dilInput.value}</li>`;
        dilInput.value = '';
        javascriptKontrol();
    }
};

const javascriptKontrol = () => {
    document.querySelectorAll('ul li').forEach((dil) => {
        const kucukHarf = dil.textContent.toLowerCase();
        if(kucukHarf === `javascript`) {
            // dil.className = 'red';
            dil.setAttribute('class', 'red');

        }
    });
};

silBtn.onclick = function() {
    ul.childElementCount > 0 
    ? ul.removeChild(ul.lastElementChild) 
    : alert('silecek bişey yok');
};

dilInput.addEventListener('keydown', (e)=> {    // keyboard event için keydown
    console.log(e);
    if (e.keyCode === 13) {    // numpad 13 enter a karşılık geliyor
        ekleBtn.click();    // denedim onclick de çalıştı
    }
    // if (e.code === 'Enter') {
    //    ekleBtn.click();    // üsttekine alternatif yazım
    // }
    if (e.code === 'Delete') {
        silBtn.click();    // denedim onclick de çalıştı
    }
});

window.onload = () => {
    javascriptKontrol();
    dilInput.focus();
}
















