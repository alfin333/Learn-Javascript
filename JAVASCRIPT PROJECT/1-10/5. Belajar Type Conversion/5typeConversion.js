// Type Conversion = Change data type 
//

let age = window.prompt("Berapa umurmu?");

console.log(typeof age);
age = Number(age) // type conversion
console.log(typeof age);
age += 1;

console.log("Selamat Ulang Tahun! Umurmu sekarang", age, "Tahun");

let x,y,z;
x = Number(`3.14`); // akan kasih nilai NaN jika kita malah kasih huruf/selain angka
console.log('x',x, typeof x);

y = String(3.14);
console.log('y',y, typeof y);

z = Boolean(''); //jawabannya false karena kita tidak mengisi gitu, katanya bro code sih
//  bagus buat cek input user ada atau nggk
console.log(z, typeof z);