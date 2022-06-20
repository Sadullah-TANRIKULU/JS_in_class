//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama (non-blocking code)
//? ---------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ---------------------------------------------------------------
// const bekle = (ms)=> {                // blocking code
//     const start = new Date().getTime();
//     while(new Date().getTime() < start + ms) {
//         ;
//     }
// };



// console.log("hello");
// // alert("ITF"); // blocking code
// console.time("timer");
// bekle(3000);
// console.timeEnd("timer");
// console.log("FS11");

///////////ASYNCRON///////////////
// setTimeout(()=>{      // non-blocking code // setTimeout macrotask
//     console.log("Selamun Aleykum");
// }, 1000); // 1sn sonra fonksiyonu çalıştırsın  // 0 ms de olsa macrotask microtask ı beklemek zorunda, hertürlü sonra çalışır // yazdığımız sayı minimum rakamdır fazlasını da bekletebilir

// // microtask kuyruğu
// console.log("Aleykum Selam");
// console.log("Merhaba");

// setTimeout(()=>{      // non-blocking code // setTimeout macrotask
//     console.log("Dostum Naber");
// }, 2000); // 1sn sonra fonksiyonu çalıştırsın  // 0 ms de olsa macrotask microtask ı beklemek zorunda hertürlü sonra çalışır

//-----------------------------------------------------------
// let counter = 0;
// let x = 0;
// const sec1 = setInterval( ()=> {  // non-blocking code(akışı durdurmaz)
//     console.log(++counter);
//     if (counter > 3) {
//         clearInterval(sec1);
//     }
// },1000);

//----------------------------------------------------------
//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakta bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

// setTimeout(() => {
//     console.log("john:Hi");
//     setTimeout(() => {
//       console.log("Sarah: Hello");
//       setTimeout(() => {
//         console.log("John: How Are you?");
//         setTimeout(() => {
//           console.log("Fine and you?");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);

//? COZUMLER:
//?----------------------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)

//* ======================================================================
//*                          2- Promises
//* =======================================================================

//? Promise, asenkron bir network isteklerinin basariyla ve basarisizlikla bittigini gosteren
//? ve ayni zamanda basariyla bittiginde sonuc verilerini temsil bir nesne yapisidir.

//? SYTNAX
//?----------
//* 1- Ilk olarak new Promise() constructor'i ile yeni bir promise nesnesi olusturulur,
//* 2- constructor'a asil islemin yapilmasini saglayan bir executor fonksiyon verilir.
//* 3- Executor fonksiyona ise 2 argument gecirilir: resolve ve reject fonksiyonlari
//* 4- resolve fonksiyonu promise'in basariyla bittiginda, reject ise
//*    basarisizlikla bittiginde isletilirler.

//? new Promise (
//?    /* executor */
//?    function(resolve,reject){
//?       .......
//?    }
//? )

//? Bir Promise asagidaki state(durumlari) icerebilir:
//* pending: ilk state, fulfilled veya rejected olmayan
//* fulfilled:islem basariyla tamamlandigini gosteren state.
//* rejected: islemin basarisizlikla tamamlandigini gosteren state

//! Bir promise bir degerler tamamlanabilir yada bir sebeple (hata) iptal edilebilir.
//! Bu durumlar then() ve catch() metotlari ile yakalanabilir.
//? then() ve catch() metotlari promise dondururler.
//? Zincirleme olarak kullanilabilirler.

// const myPromise = new Promise((resolve, reject) => {
//     let success = Math.floor(Math.random()*3);
//     const data = {a: 1, b: 2};
//     if (success) {
//         resolve(data);
//         console.log("Task performed successfully");
//     } else {

//         reject(new Error("Task failed successfully"));
//     }
// });

// myPromise.then((res) => console.log(res)).catch((err) => console.log(err));
// ardarda birçok .then() yazabiliriz

//* Example-2: TEA TIME
//* -----------------------------------------------------------------------
//* 1. wait until water boiled -> kettle -> work or failed
//* 2. add tea --> tea is avalaible or not
//* 3. wait for brewing
// const wait = (ms) => {
//     const start = new Date().getTime();
//     while (new Date().getTime() < start + ms);
//   };
//   const brewTea = () => {
//     boil()
//       .then((status1) => {
//         console.log(status1);
//         return addTea();
//       })
//       .then((status2) => {
//         console.log(status2);
//         wait(1000);
//         return "Tea is ready. Bon Appetite";
//       })
//       .then((status3) => {
//         console.log(status3);
//       })
//       .catch((err) => console.log(err));
//   };
//   const boil = () => {
//     return new Promise((resolve, reject) => {
//       const boiled = Math.floor(Math.random() * 5);
//       if (boiled) {
//         wait(1000);
//         resolve("Water Boiled");
//       } else {
//         reject(new Error("Kettle Failed"));
//       }
//     });
//   };
  
//   const addTea = () => {
//     return new Promise((resolve, reject) => {
//       const teaAvalaible = Math.floor(Math.random() * 3);
//       if (teaAvalaible) {
//         wait(1000);
//         resolve("Tea was added");
//       } else {
//         reject(new Error("Tea unavailable"));
//       }
//     });
//   };
  
//   brewTea();

//* ===========================================================
//*                          3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.
// fetch(parametre)  parametre zorunludur ve bir path dir


// fetch('https://api.github.com/users')
// .then((res) => {
//     // error handling şart
//     if (!res.ok) {
//         throw new Error(`sth went wrong: ${res.status}`);
//     }
//     return res.json();           // gelen data ham old. için .json ile dönüştürmek gerekiyor
// })
// .then((data) => updateDom(data))
// .catch((err)=> console.log(err));  // default GET tir

// // server a gönderirken stringify() gerekiyor

// // setTimeout(console.log(dataFromAPI), 2000); microtask old.için önce yazdırılıyor

// const updateDom = (data) => {
//     console.log(data);
//     const userDiv = document.querySelector('.users');

//     data.forEach(user => {
//         const{login, avatar_url, html_url} = user;
//         userDiv.innerHTML += `
//         <h2 class='text-warning'>NAME:${login}</h2>
//         <img src=${avatar_url} width='50%' alt='' />
//         <h3>HTML_URL:${user.html_url}</h3>
//         `        
//     });
// }

// fetch('https://api.github.com/users')
//   .then((res) => {
//     //! error handling
//     if (!res.ok) {
//       throw new Error(`Something went wrong: ${res.status}`);
//     }
//     return res.json();
//   })
//   .then((data) => updateDom(data))
//   .catch((err) => console.log(err));

// const updateDom = (data) => {
//   const userDiv = document.querySelector('.users');

//   data.forEach((user) => {
//     const { login, avatar_url, html_url } = user;
//     userDiv.innerHTML += `
//     <h2 class="text-warning">NAME:${login}</h2>
//     <img src=${avatar_url} width="50%" alt="" />
//     <h3>HTML_URL:${user.html_url}</h3>
//   `;
//   });
// };



//*===============================================================
//*                   4- ASYNC-AWAIT
//*===============================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu async hale getirmek icin fonksiyon keyword'nun onune
//* asyn keyword'u eklenir.

//* Bir async fonksiyon icerisinde yapilan istegin cevabinin
//* beklenmesi await keyword'u ile saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durudurulmasini saglar. Yapilan istek yerine getirilip sonuc
//* degerlerinin dondurulmesine ile kodun calismasi devam eder.

// let hata = false;
// const getUsers = async function () {
//   try {
//     const res = await fetch('https://api.github.com/users');
//     if (!res.ok) {
//       hata = true;
//       // throw new Error(`Something went wrong:${res.status}`);
//     }
//     const data = await res.json();
//     updateDom(data);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     hata = false;
//   }
// };

// getUsers();

// const updateDom = (data) => {
//   const userDiv = document.querySelector('.users');
  

//   if (hata) {
//     userDiv.innerHTML = `<h1 class="text-danger">Data can not be fetched</h1>
//     <img src="./img/404.png" alt="" />
//     `;
//   } else {
//     data.forEach((user) => {
//       //!destr
//       const { login, avatar_url, html_url } = user;
//       userDiv.innerHTML += `
//     <h2 class="text-warning">NAME:${login}</h2>
//     <img src=${avatar_url} width="50%" alt="" />
//     <h3>HTML_URL:${html_url}</h3>
//   `;
//     });
//   }
// };
















