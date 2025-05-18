// return = returns a value back to the place 
//          where you invoked a function

let area;
let width;
let height;

width = window.prompt("Masukkan lebar");
height = window.prompt("Masukkan tinggi");

console.log(getArea(width, height));

function getArea(lebar, tinggi){
    luas = lebar * tinggi;
    return luas; 
}