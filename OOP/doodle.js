const TShirt = function(color, height, fabric, type) {
    this.color = color;
    this.height = height;
    this.fabric = fabric;
    this.type = type;
    this.getFeatures = function() {
        const display = document.querySelector('.display');
        return display.innerHTML += `
        T-Shirts features; <br>
        ${this.color} "&" ${this.height} "&" ${this.fabric} "&" ${this.type} 
        `
    }
}

const tShirt1 = new TShirt("green", 85, "cotton", "for summer");
const tShirt2 = new TShirt("red", 80, "acrylic", "for summer");
const tShirt3 = new TShirt("blue", 80, "chiffon", "for summer");

// console.log(typeof tShirt1);
// console.log(tShirt1.getFeatures());

console.log(TShirt.prototype);
console.log(tShirt1.__proto__);