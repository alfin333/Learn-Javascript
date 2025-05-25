// The Date Object is used to work with date & times

let date = new Date(); // Sun May 25 2025 19:56:07 GMT+0700 (Western Indonesia Time)
//let date = new Date(0); // 01/01/1970, 07.00.00 (use toLocaleString)
//let date = new Date(2023, 0, 4, 5, 50, 35); // 04/01/2023, 05.50.35 (use toLocaleString)
//let date = new Date("May 20, 2025 07:00:49"); // 20/05/2025, 07.00.49 (use toLocaleString)
/*
let year = date.getFullYear(); // 2025, aktifkan let date dan ganti value innerHTML jadi year
let dayOfMonth = date.getDate(); // 25, tgl 25
let dayOfWeek = date.getDay(); // 0, artinya minggu (range 0-6)
let month = date.getMonth(); // 4, artinya mei (range 0-11)
let hour = date.getHours(); // 20, artinya 20:00
let minute = date.getMinutes(); // 19, artinya 20:19
let seconds = date.getSeconds(); // 46, artinya 20:19:46
let ms = date.getMilliseconds(); // 913, artinya hampir 1 detik (1000)
*/
/*
date.setFullYear(2024); // tahun berubah dari 2024 jadi 2025, selain itu tetap
date.setMonth(0); // bulan berubah jadi januari
date.setDate(31); // jadi tanggal 31
date.setHours(23); // jadi jam 23
date.setMinutes(59); // jadi menit 59
date.setSeconds(1); // jadi detik 1
date.setMilliseconds(0); // jadi milidetik 0
*/
// date = date.toLocaleString(); // 25/05/2025
console.log(date);
document.getElementById(`myLabel`).innerHTML = formatTime(date);

function formateDateIndonesia(penanggalan){
    let day = penanggalan.getDate();
    let month = penanggalan.getMonth();
    let year = penanggalan.getFullYear();

    return `${day}/${month}/${year}`
}
function formatTime(waktu){
    //waktu.setHours(11);
    let hours = waktu.getHours();
    let minutes = waktu.getMinutes();
    let seconds = waktu.getSeconds();
    let amORpm = hours >= 12? "pm": "am"

    return `${hours}:${minutes}:${seconds} ${amORpm}`
}