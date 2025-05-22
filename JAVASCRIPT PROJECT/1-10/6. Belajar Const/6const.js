const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter Radius of Circle");
radius = Number(radius);
//PI = 420.69 // inilah gunanya const agar tidak berubah nilainya, intinya buat nyegah gitu for secure
circumference = 2*PI*radius;

console.log(`The circumference is: ${circumference}`) // dapat deh luas lingkarannya


