const taxRate = 0.18;
const shippingPrice = 15.0;


window.addEventListener('load', ()=> {
    // set item LocalStorage --> pc, browser kapanınca kalır
    localStorage.setItem('taxRate', taxRate);
    // localStorage.setItem('shippingPrice', shippingPrice);
    // calculateCartTotal();

    // set item to SessionStorage --> browser kapanınca silinir
    // sessionStorage.setItem('taxRate', taxRate);
    // sessionStorage.setItem('shippingPrice', shippingPrice);


});
localStorage.removeItem('taxRate');
// capturing method
// en yakın parent a addEvent atarsak tüm child lara etkiler click olunca hepsi harekete geçer

let productsDiv = document.querySelector('.products');
productsDiv.addEventListener('click', (event)=> {
    console.log(event.target);
    if (event.target.classList.contains('minus')) {  // birden fazla class ı olan elementte className kullanamayız
        let quantityP = event.target.nextElementSibling;
        if (quantityP.innerText > 1) {
            quantityP.innerText--;   
            calculateProductAndCartTotal(event.target.parentElement.parentElement);


        } else {
            if (confirm('Product will be deleted?')) {
                event.target.parentElement.parentElement.parentElement.remove();
                calculateCartTotal();
            }
        }
        // console.log(typeof event.target.nextElementSibling.innerText);
        // console.log('minus button clicked');
    } else if (event.target.classList.contains('plus')) {
        console.log('plus button clicked');
        event.target.previousElementSibling.innerText++;
        calculateProductAndCartTotal(event.target.parentElement.parentElement);

    } else if (event.target.classList.contains('remove-product')) {
        // console.log('remove button clicked');
        event.target.parentElement.parentElement.parentElement.remove();
        calculateCartTotal();

    } else {
        // console.log('other element clicked');
    }
});
// calculate cart and product totals
const calculateProductAndCartTotal = (productInfoDiv) => {
    let price = productInfoDiv.querySelector('strong').innerText;
    let quantity = productInfoDiv.querySelector('#product-quantity').innerText;
    let productTotalDiv = productInfoDiv.querySelector('.product-line-price');
    productTotalDiv.innerText = (price * quantity).toFixed(2);


    calculateCartTotal();
}

// calculate cart totals
const calculateCartTotal = () => {
    let productsTotalPriceDivs = document.querySelectorAll('.product-line-price');
    console.log(productsTotalPriceDivs);
    let subtotal = 0;
    productsDiv.forEach( eachProductTotalDiv => {
        subtotal += parseFloat(eachProductTotalDiv.innerText)
    });
    console.log(subtotal);
    let taxPrice = subtotal * localStorage.getItem('textRate');
    console.log(taxPrice);

    let shippingPrice = (subtotal > 0 ? parseFloat(localStorage.getItem('shippingPrice')) : 0); // lokale atılan removeItem ile silinir.

    let cartTotal = subtotal + taxPrice + shippingPrice;

    document.querySelector('#cart-subtotal p:nth-child(2)').innerText = subtotal.toFixed(2);
    document.querySelector('#cart-tax p:nth-child(2)').innerText = taxPrice.toFixed(2);
    document.querySelector('#cart-shipping p:nth-child(2)').innerText = shippingPrice.toFixed(2);
    document.querySelector('#cart-total').lastElementChild.innerText = cartTotal.toFixed(2);

}




// bubbling method
// iç içe olan bir yapıda en alttakine click edince bağlantılı olarak en üstteki de harekete geçer


















