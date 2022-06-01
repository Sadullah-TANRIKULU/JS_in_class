// class ve id ler ile element leri oluştur
const langInput = document.querySelector('.lang-input');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const langList = document.querySelector('.lang-list');

const ul = document.createElement('ul');
langList.appendChild(ul);
// console.log(ul);

// ekleme fonksiyonunu oluştur
btn1.onclick = function() {
    if (!langInput.value) {
        alert(`pls, enter a valid data`)
    } else {
        ul.innerHTML += `<li>${langInput.value}</li>`;
        langInput.value = '';
        jsPainter();
    }
}

// javascript text boyacı fonksiyonu oluştur
const jsPainter = () => {
    document.querySelectorAll('ul li').forEach((lang) => {
        const smallCase = lang.textContent.toLowerCase();
        if (smallCase === `javascript` || smallCase === `js`) {
            lang.setAttribute("class", "coral");
            // lang.className = "coral";
        }
    })
}

// silme fonksiyonunu oluştur
btn2.onclick = function() {
    ul.childElementCount > 0
    ? ul.removeChild(ul.lastElementChild)
    : alert('nothing to remove');
};

// keyboard enter a basınca eklesin fonksiyonunu oluştur
langInput.addEventListener('keydown', (e) => {
    console.log(e);
    if (e.code === 'Enter') {
        btn1.click();
    if (e.code === 'Delete') {
        btn2.click();
    }
    }
})

// ilk yüklemede jsPainter çalışsın ve imleç input alanında hazır başlasın
window.onload = () => {
    jsPainter();
    langInput.focus();
}














