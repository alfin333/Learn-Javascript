// array.filter() = creates a new array with all elements 
//                  that pass the tess provided by a function

let ages = [18,16,17,19,90];
let adults = ages.filter(checkAge);
adults.forEach(print);
function checkAge (element){
    return element >= 18;
}

function print(element){
    console.log(element);
}

// bagaimana jika function checkAge ini saya masukan sebagai argumen ke method .map()?
// jawabannya adalah kemungkinan akan memberikan output [true, false, false, true, true]
// hal ini karena map akan mengembalikan hasil dari fungsi itu ke array baru
// sedangkan untuk filter hanya akan return element yang nilainya true

// Jadi:
// - map() digunakan untuk transformasi semua elemen
// - filter() digunakan untuk menyaring elemen yang return-nya true