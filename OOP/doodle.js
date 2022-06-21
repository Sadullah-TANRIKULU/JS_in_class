class TShirt {

    static counter = 0;
    _bodySize = 81;
    #id;
    constructor(color, size, fabric, type) {

        this.color = color;
        this.size = size;
        this.fabric = fabric;
        this.type = type;
        this.getFeatures = function () {
            const display = document.querySelector('.display');
            return display.innerHTML += `
        T-Shirts features; <br>
        ${this.color} <br> ${this.size} <br> ${this.fabric} <br> ${this.type} <br> ${tShirt2.getId()} <br> ${this.#computeBodyFit(this._bodySize)} <br><br>
        `;
        };

        this.staticInfoDisplay = function () {
            const staticInfoDisplay = document.querySelector('.staticDisplay');
            return staticInfoDisplay.innerHTML += `
            T-Shirts total amount of production;<br>
            ${TShirt.counter} <br><br>
            `
        }

        TShirt.counter++;

        this.#id = '748159';
    }

    getId() {
        return this.#id;
    }
    setId(id) {
        this.#id = id;
    }

    #computeBodyFit(_bodySize) {
        if (_bodySize < 80 && _bodySize > 85) {
            const respond = document.createElement('h5');
            return respond.innerHTML += `
            It's not fit to you.
            `
        } else {
            const respond = document.createElement('h5');
            return respond.innerHTML += `
            It's fit to you.
            `
        }
    }
}

const tShirt1 = new TShirt("green", 85, "cotton", "for winter");
const tShirt2 = new TShirt("red", 80, "acrylic", "for summer");
const tShirt3 = new TShirt("blue", 80, "chiffon", "for autumn");
const tShirt4 = new TShirt("tomato", 82, "wool", "for winter");
const tShirt5 = new TShirt("crimson", 85, "satin", "for spring");

// console.log(typeof tShirt1);
tShirt1.staticInfoDisplay();
tShirt1.setId('22'); // tekrar ulaşmak için getId yapmak lazım
tShirt2.setId('46');
tShirt1.getFeatures();
tShirt2.getFeatures();
tShirt3.getFeatures();
tShirt4.getFeatures();
tShirt5.getFeatures();


// console.log(TShirt.prototype);
// console.log(tShirt1.__proto__);
// console.log(TShirt.counter);
console.log(tShirt1.getId());
// TShirt.#id = 584; // Private field '#id' must be declared in an enclosing class
 
console.log(tShirt2.getId());
// console.log(TShirt.setId()); // Uncaught TypeError: TShirt.setId is not a function











