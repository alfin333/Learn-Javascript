let acakX = Math.floor(Math.random() * 6) + 1;
// ini buat normalisasi ke bilangan bulat, kali 6 karena desimal gitu
//  terus +1 supaya 1-6 instead of 0-5

let acakW;
let acakY;
let acakZ;
console.log(acakX)

document.getElementById(`rollBtn`).onclick = function () {

    acakW = Math.floor(Math.random() * 6) + 1;
    acakY = Math.floor(Math.random() * 6) + 1;
    acakZ = Math.floor(Math.random() * 6) + 1;
    
    document.getElementById(`wLabel`).innerHTML = acakY
    document.getElementById(`yLabel`).innerHTML = acakY
    document.getElementById(`zLabel`).innerHTML = acakZ

}