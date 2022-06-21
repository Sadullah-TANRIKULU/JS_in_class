// object oluşturma metotları

////////new keyword ü ile //////////
// const Pencil = new Object();

// const moso = new Pencil();  // hatalı kullanım
// console.log(moso);







/////Object.create() ile////////

// const eraser = Object.create();   // bu çalışmadı
// console.log(eraser);





///////////class ve constructor ile///////////
// class Paper {
    
//     constructor(rawMaterial, dimensions, color){
//         this.rawMaterial = rawMaterial;
//         this.dimensions = dimensions;
//         this.color = color;}
    
    // message() {
    //     console.log('Hello' + 'this Paper made by' + this.rawMaterial);
    // }
// }

// Paper.prototype.message = function() {  // class metodu oluşturma
//     console.log(`Hello + this Paper made by + ${this.rawMaterial}`);
// }
// console.log(Paper.prototype);
// console.log(Paper.message());

// const a4 = new Paper("seluloz");
// console.log(a4.message());







/////////////////const xxx ={} ile//////////////

// const Pen = {
//     color: "black",
//     ink: "liquid",
//     height: "12cm",
//     getFeatures: function(){
//         return `
//         color : ${this.color}, 
//         ink : ${this.ink}, 
//         height : ${this.height}
//         `
//     }
// }

// console.log(typeof Pen);
// console.log(Pen.getFeatures());
// console.log(Pen.ink);

// const faberCastel = new Pen('red', 'semi-solid', '15cm');
// console.log(faberCastel);








////////////object constructor ile////////////////

// function Book(title, author) {
//     this.title = title;
//     this.author = author;
//     const getMessage = function(){
//      `to my love
//      ${this.title} was written by ${this.author}`;
//     }  
// }

// const book1 = new Book("only the strong", "jack jones");
// console.log(book1);
// book1.paperAmount = 200;
// delete book1.author;
// console.log(book1);

// function Bookie (title, author, pages) {
//     Book.call(this, title, author);
//     this.pages = pages;
// }




// class Bookie extends Book {
//     constructor(title, author, pages) {
//         super(title, author);
//         this.pages = pages;
//     }
// }

// console.log(Bookie.prototype);

// Bookie.prototype = Object.create(Book.prototype);

// console.log(Bookie.prototype);

// const booklet = new Bookie("Atomic Habits", "Kevin Ghostley", 150);
// console.log(booklet);

///////////////// POLYMORHISM////////////////////////
//* ======================================================
//*     OOP -  Polymorphism(ES6)
//* ======================================================

//* Polymorphism, bir degisken, fonksiyon veya nesnenin çoklu sekiller
//* alabilmesini tanimlayan bir nesne-yonelimli programlama teknigidir.
//* Polymorphism, genellikle Overloading ve Overriding gibi alt kavramlar
//* ile bilinir.

// class Book {
//     constructor(title, author, year) {
//       this.title = title;
//       this.author = author;
//       this.year = year;
//     }
//     getSummary() {
//       return `${this.title} was written by ${this.author} in ${this.year} `;
//     }
//     setPrice(price) {
//         const taxRate = 1.1;
//         this.price = (price * taxRate).toFixed(2);
//     }
//   }
  
//   //? instance
//   const book1 = new Book('Kasagi', 'Omer Seyfettin', 1920);
//   const book2 = new Book('Sinekli Bakkal', 'H.Edip Adıvar', 1910);
//   console.log(book1);
  
  //? Sub-Class tanimlamasi
//   class Magazine extends Book {
//     constructor(title, author, year, month) {
//       //! Book'un constructor'i cagrildi
//       super(title, author, year); //! Book'un prototpye kopyalnmis oldu
//       this.month = month;
//     }

// Overrided Metot (Parent class'daki bir metodun farklı fonksiyonallikle fakat aynı isimle tanımlanması)
    // getSummary() {  // Book classı içindeki getSummary fonksiyonunu burada ${this.month} şeklinde yazdık bu işte override oluyor.
    //     return `${this.title} was written by ${this.author} in ${this.year} in ${this.month}`;
    //   }

    // setPrice(price, taxRate) {
    //     this.price = (price * taxRate).toFixed(2);
    // }
    // setPrice(price, taxRate, deneme=1) {  // üsttekini değil son yazılanı çağırmasına overloading denir.
    //     this.price = (price * taxRate)* deneme;
    // }

//     setPriceParent(price) {
//         super.setPrice(price);  // Book class ı parent old.için oradan super keyword ü ile çağırdık. çalıştı.
//     }
//   }

//   const mag1 = new Magazine('Kasagi', 'Omer Seyfettin', 1940, 'Nov');
//   console.log(mag1);
//   console.log(mag1.getSummary());
//   mag1.setPriceParent(100);

//   console.log(mag1);
  
//* ======================================================
//*        OOP - Static and Private  (ES6)
//* ======================================================

//? Static degiskenler ve metotlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//? Eger nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! Encapsulation OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation private degiskenler ve private metotlar yardimiyla yapilir.
//! ES6 ve sonrasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenler dogrudan erisilemezler. Bunlara erismek icin class
//! icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar
//! kullanilir.

//! Private metotlara ise class disarisindan da eriselemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebiler.

// static counter; yazarsak counter class ın static alanına atılır dolayısıyla class dan üretilmiş mesela book1.counter şeklinde erişilemez.
// sadece Book.counter şeklinde erişilebilir.

class Book {
    static counter = 0; // static property yazmazsak parametre olarak çağırmak gerekir, static property hepsini kapsar, class ismiyle çağrılır
    #id; // private property
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
      // static
      Book.counter++;
      // private
      this.#id = '123456';

    }
    getSummary() {
      return `${this.title} was written by ${this.author} in ${this.year} so it is age ${this.#computeAge()}`;
    }
    setPrice(price) {
        const taxRate = 1.1;
        this.price = (price * taxRate).toFixed(2);
    }
    static compareAge(b1, b2) {
        return `Books age difference : ${b1.year - b2.year}`
    }

    getId() {   // private id okumak için getter metotları uygulanır
        return this.#id;
    }
    setId(id) {   // private id okumak için getter metotları uygulanır
        this.#id = id;
    }

    #computeAge() {
        return new Date().getFullYear() - this.year;
    }
  }
  
  //? instance
  const book1 = new Book('Kasagi', 'Omer Seyfettin', 1920);
  const book2 = new Book('Sinekli Bakkal', 'H.Edip Adıvar', 1910);
  const book3 = new Book('Sinekli Bakkal', 'H.Edip Adıvar', 1910);

  console.log(Book.counter);
  console.log(Book.compareAge(book1, book3));

  // private değişkenlere dışardan, doğrudan erişilemez
  console.log(book1.getId());

  // private metotlar dışarıdan çağrılamaz, sadece class içindeki metotlar tarafından çağrılabilirler
console.log(book1.getSummary());

// private variables ve methods ile yapılan tüm bu işlemlere Encapsulation denir.





