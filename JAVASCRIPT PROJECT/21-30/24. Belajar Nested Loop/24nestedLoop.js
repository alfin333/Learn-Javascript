// nested loop = a loop inside of another loop

let rows = window.prompt(`Masukkan baris:`)
let columns = window.prompt(`Masukkan kolom:`)
for (let i = 1; i <= rows; i += 1) {
    for (let j = 1; j <= columns; j++) {
        document.getElementById(`myRectangle`).innerHTML += j + " ";
    }
    document.getElementById(`myRectangle`).innerHTML += "<br>";
}

// let symbol = window.prompt("Masukkan simbol")
// let rows = window.prompt(`Masukkan baris:`)
// let columns = window.prompt(`Masukkan kolom:`)
// for (let i = 1; i <= rows; i += 1) {
//     for (let j = 1; j <= columns; j++) {
//         document.getElementById(`myRectangle`).innerHTML += symbol;
//     }
//     document.getElementById(`myRectangle`).innerHTML += "<br>";
// }