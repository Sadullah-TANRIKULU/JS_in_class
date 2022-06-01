const select = document.querySelector('.form-select');
const vade = document.querySelector('#vade');
const tutar = document.querySelector('#tutar');
const hesaplaBtn = document.querySelector('.btn');

let oran = 0;
let taksit = 0;

hesaplaBtn.addEventListener('click', (e)=> {
    e.preventDefault();                        // event ın default davranışını engelle fonksiyonu
    if (select.value === 'Konut Kredisi') {     // type submit buton default olarak iletir siler
        oran = 1.29;
    } else if (select.value === 'Ihtiyac Kredisi') {
        oran = 1.99;
    } else if (select.value === 'Arac Kredisi') {
        oran = 1.79;
    }
    // console.log(oran);
    if (!select.value || !vade.value || !tutar.value) {
        alert('kredi türü, vade ve tutar girin');
    }


    const faiz = oran / 100;
    taksit = tutar.value * (faiz * (1 + faiz) ** vade.value) / ((1 + faiz) ** vade.value - 1);

    // console.log(taksit);

    sonuclariGoster();
});

const sonuclariGoster = () => {
    const sonuclar = document.querySelector('.sonuclar');

    sonuclar.innerHTML = `
    <table class="table table-bordered border-primary mt-4">
    <tbody>
    <tr>
      <th>Kredi Miktari</th>
      <td>${tutar.value} <i>₺</i></td>
      <th>Kredi Tipi</th>
      <td>${select.value}</td>
    </tr>
    <tr>
      <th>Vade</th>
      <td>${vade.value}</td>
      <th>Faiz Orani</th>
      <td>${oran}</td>
    </tr>
    <tr>
      <th>Toplam Tutar</th>
      <td>${taksit * vade.value}</td>
      <th>Taksit Tutari</th>
      <td>${taksit}</td>
    </tr>
    
  </tbody>
</table>
    
    `;
}






















