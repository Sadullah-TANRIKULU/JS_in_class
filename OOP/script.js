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

function Book(title, author) {
    this.title = title;
    this.author = author;
    const getMessage = function(){
     `to my love
     ${this.title} was written by ${this.author}`;
    }  
}

// const book1 = new Book("only the strong", "jack jones");
// console.log(book1);
// book1.paperAmount = 200;
// delete book1.author;
// console.log(book1);

// function Bookie (title, author, pages) {
//     Book.call(this, title, author);
//     this.pages = pages;
// }




class Bookie extends Book {
    constructor(title, author, pages) {
        super(title, author);
        this.pages = pages;
    }
}

console.log(Bookie.prototype);

Bookie.prototype = Object.create(Book.prototype);

console.log(Bookie.prototype);

const booklet = new Bookie("Atomic Habits", "Kevin Ghostley", 150);
console.log(booklet);







