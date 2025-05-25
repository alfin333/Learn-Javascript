// setInterval() =  invokes a function repeatedly after a number of miliseconds
//                  asynchronus function (doesn't pause execution)

let count = 0;
let max = window.prompt("Count up to what number?");
max = Number(max);
const myTimer = setInterval((maximum) => {
    count += 1
    console.log(count);
    if (count >= maximum) {
        clearInterval(myTimer);
    }
}
    , 1000, max) // 1000 itu parameter delay


// Arrow function di atas setara dengan function biasa seperti di bawah:
// function countUp(maximum){
//     count+=1;
//     console.log(count);
//     if(count>=maximum){
//         clearInterval(myTimer)
//     }
// }

// setInterval menerima fungsi (callback) sebagai argumen,
// dan akan mengeksekusinya secara berulang dengan jeda tertentu (delay).
// Fungsi akan terus dijalankan secara periodik hingga dihentikan dengan clearInterval().