console.log(`%cscript.js is running...`, `background-color: black; color: lightgreen`);

const names = [`mehmet`, `harun`, `sadullah`, `cevdet`, `kamil`, `mümin`];
console.log(names);
console.log(names.length);

const softLangs = new Array(`python`, `javascript`, `golang`, `swift`, `unity`, `C#`);
console.log(softLangs);

const dsa = new Array(5);  // 5 elemanlı array için hafızada yer ayırdı :)
console.log(dsa);
const asd = new Array(5, 6);  // 2 elemanlı array yaptı
console.log(asd);  

console.log(softLangs[0]);
softLangs[2] = `java`;
console.log(softLangs);  // heap te bulunduğu ve mutable olduğu için golang java oldu.
// array mutable dır, const ile yapılırsa elemanı değişir fakat tamamen değiştirilemez

const ages = [22, 36, 89];
const people = [`selman`, `yakut`, 2002, 25-18, true, 6.4, ages];
console.log(people);
console.log(people[people.length-1][1]);  // ages array inin 1.index ini verdi
const valueee = ++people[6][2];  // ages array son eleman 89 u 90 yaptı
console.log(valueee);

const cars = [`BMW`, `Porsche`, `Ferrari`, `Geely`, `Ford`];
const deleted = cars.pop();
console.log(deleted);  // ford silindi

const n = cars.push(`Renault`);
console.log(cars, n);

const boyut = cars.unshift(`Audi`);  // başa ekler length döndürür 
console.log(boyut, cars);

const silinen = cars.shift();  // en baştakini sildi
console.log(silinen, cars);

console.log(cars.reverse());  // indexleri terse çevirir
console.log(cars);  // ters dönmüş hali ile kaldı array

console.log(cars.sort());


const rakamlar = [1, 2, 3, 10, 6, 5, 4];
console.log(rakamlar.sort());  // ASCII ye göre
rakamlar.sort((a, b) => a - b);
console.log(rakamlar);  // callback function ile logical sıralama yaptık sadece sort olsa sayılarda hatalı yapabilir
cars.splice(1, 0, `Bumble Bee`);  // 1 den başla, 0 silmeden demek, array e insert et demektir.
console.log(cars);

cars.splice(5, 1, `GMC`);  // 5 den başla, 1 silerek demek, array e insert et demektir.
console.log(cars);




























