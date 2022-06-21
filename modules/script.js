// alert = 4;
// alert('hi');  // namespace pollution

// let myNumber = 4;
// myNmuber = 44;  // keyword kullanmadın demez tanımlar


// modulleri moduller çağırabilir, başkası çağıramaz
// moduller async olarak download edilir.
// sabit tanımlanmış variables SCREAM_CASE ile yazılmıştır, değiştirmeye uğraşmayın demektir.

// dışardan erişilebilir olsun istersek export {bla bla} şeklinde yazmalııyız.

// export default 'Module name is myModule';
// export default moduleName = 'value'; // A module cannot have multiple default exports.

// import {TShirt as TSh} from '../OOP/doodle';  // renaming
// html de <script src="script.js" type="module"><script> oluyor.

console.log('hello');

import { square, WHW, WORKING_HOURS_WEEK, dec, inc, sum } from "./myModule.js";

console.log('WHW', WHW);// bunu yazınca önce modulün import edilip sonra kodların sıralı çalışmasını console da görebiliyoruz

console.log(square(4));
















