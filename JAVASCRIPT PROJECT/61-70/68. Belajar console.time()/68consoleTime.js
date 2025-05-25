// console.time() = Starts a timer you can use to 
//                  track how long an operation takes. 
//                  Give each timer a unique name

// start
console.time("Response Time");

alert(`Click The OK BUTTON!`); // akan menunggu sampai klik ok, karena alert() adalah
// synchronus blocking function

// end
console.timeEnd("Response Time");

// start
console.time("Response Time");

setTimeout(() => console.log(`Hello ini asynchronus`),3000) // berjalan paling akhir karena asynchronus

// end
console.timeEnd("Response Time");
