const select = document.querySelector('#select');
const vade = document.querySelector('#vade');
const tutar = document.querySelector('#tutar');
const btn = document.querySelector('.btn');

let oran = 0;
let taksit = 0;


btn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('click');
  if (!select.value || !vade.value || !tutar.value) {
    alert('bişey seç, boş geçme');
  } else {
    if (select.value === 'Konut Kredisi') {
      oran = 1.29;
    }
    if (select.value === 'Ihtiyac Kredisi') {
      oran = 1.99;
    }
    if (select.value === 'Arac Kredisi') {
      oran = 1.89;
    }
    const faiz = oran / 100;
    taksit = (tutar.value * faiz * (1 + faiz) ** vade.value) / ((1 + faiz) ** vade.value - 1);
    console.log(taksit);
    const toplamTutar = taksit * vade.value;
    console.log(toplamTutar);
    sonuclar();
  }
})



const sonuclar = () => {
  const sonuclar = document.querySelector('.sonuclar');
  sonuclar.innerHTML = `
<table class="table">
<thead>
    <tr>
      <th scope="col">Ihtiyac</th>
      <th scope="col">Vade</th>
      <th scope="col">Toplam Tutar</th>
      <th scope="col">Taksit Tutarı</th>
    </tr>
  </thead>
  <hr>
<tbody>
    <tr>
      <td>${(tutar.value)}</td>
      <td>${(vade.value)}</td>
      <td>${(taksit * vade.value).toFixed(2)}</td>
      <td>${(taksit).toFixed(2)}</td>
    </tr>
  </tbody>
</table>
  
  `
};
























