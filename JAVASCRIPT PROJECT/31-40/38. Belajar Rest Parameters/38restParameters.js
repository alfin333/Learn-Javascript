// Rest Parameters =    represent and indefinite number 
// ... (ifParameter)    of parameters 
//                      (packs arguments into an array)
let a = 1
let b = 2
let c = 3
let d = 4
let e = 5
console.log(calculation(a, b, c, d, e));

function calculation(x, y, ...numbers) {
    let total = 0;
    times = x * y;
    for (let number of numbers) {
        total += number
    }
    return times + total;
}
// intinya dari fungsi kalkulasi itu dia akan nerima 2 parameter,
// lalu parameter yang selanjutnya bebas berapa pun itu,
// 2 parameter pertama akan melakukan perkalian sisanya penjumlahan
// tujuan utama dari rest parameter adalah menerima parameter sebanyak apapun itu