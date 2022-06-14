window.addEventListener('load', () => {
    localStorage.getItem('taxRate');
    localStorage.getItem('shippingPrice');
});

const taxRate = localStorage.getItem('taxRate');
const shippingPrice = localStorage.getItem('shippingPrice');

const productsDiv = document.querySelector('.products');

productsDiv.addEventListener('click', (e) => {
    // console.log(typeof (e.target));
    if (e.target.classList.contains('minus')) {
        let quantityPr = e.target.nextElementSibling;
        // console.log(quantityP);
        // updateProductTotal(e.target.parentElement.parentElement);
        if (quantityPr.innerText > 1) {
            quantityPr.innerText--;
            updateProductTotal(e.target.parentElement.parentElement);



        } else {
        if (confirm('Product will be deleted?')) {
            e.target.parentElement.parentElement.parentElement.remove();
            updateCart();
            }
        }
    } else if (e.target.classList.contains('plus')) {
        e.target.previousElementSibling.innerText++;
        updateProductTotal(e.target.parentElement.parentElement);
    }

    else if (e.target.classList.contains('plus')) {
        let quantityPr = e.target.previousElementSibling;
        // console.log(quantityPr);
        quantityPr.textContent++;
        updateCart(e.target.parentElement.parentElement);
    } else if (e.target.classList.contains('remove-product')) {
        // console.log('remove button clicked');
        e.target.parentElement.parentElement.parentElement.remove();
        updateCart();
    } 



});

let updateProductTotal = (productInfoDiv) => {  // productInfoDiv i doğrudan fonksiyon parametresi olarak kullandık
    let price = productInfoDiv.querySelector('strong').innerText;
    let quantity = productInfoDiv.querySelector('#product-quantity').innerText;
    let productTotalDiv = productInfoDiv.querySelector('.product-line-price');
    productTotalDiv.innerText = (price * quantity).toFixed(2);

    updateCart();
}

let updateCart = () => {
    let productsTotalPrices;
    productsTotalPrices = document.querySelectorAll('.product-line-price');
    // console.log(productsTotalPrices);
    let subtotal = 0;
    productsTotalPrices.forEach((price) => {

        subtotal += Number(price.innerText);
        // console.log(subtotal);
    })
    document.querySelector('#cart-subtotal p:nth-child(2)').innerText = subtotal.toFixed(2);

    let taxValue = subtotal * taxRate;
    document.querySelector('#cart-tax p:nth-child(2)').innerText = taxValue.toFixed(2);


    document.querySelector('#cart-shipping p:nth-child(2)').innerText = (shippingPrice * 1);

    let grandTotal = subtotal + taxValue + shippingPrice;

    document.querySelector('#cart-total p:nth-child(2)').innerText = (grandTotal * 1).toFixed(2);
}








