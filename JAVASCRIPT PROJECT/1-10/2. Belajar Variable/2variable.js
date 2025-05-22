// variable = buat nyimpen nilai
// 1. deklarasi = deklarasi variable "let x;"
// 2. assignment = kasih nilai ke variable yg udh dideklarasi "x = 100"

let x;
x = 100;
console.log(x);

let y = 200;
console.log(y);

let age = 25;
let price = 100;
let gpa = 2.1;


console.log(typeof age); // Jawabannya number
console.log(`You are ${age} years old\nThe price is: ${price}\nYour gpa is: ${gpa}\n`);

let name = "Muhammad Alfin"
let food = "noodle"
let email = "alfin2501@gmail.com"
console.log(typeof name)// Jawabannya string
console.log(`Your name is ${name}, your favorite food is ${food}, and your email is ${email}\n`)

let online = false;
let forSale = true;
let isStudent = true;

console.log(typeof isStudent);
console.log(`Bro is online: ${online}\nIs this car for sale: ${forSale}\nAlfin is student: ${isStudent}`);

document.getElementById('p1').textContent = `Namaku adalah ${name}`;
document.getElementById('p2').textContent = `Aku berumur ${age}`;
document.getElementById('p3').textContent = `Aku adalah siswa: ${isStudent}`;