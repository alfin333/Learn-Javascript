// array.reduce() = reduces an array to a single value

let prices = [5000, 10000, 20000, 15000, 5000];
total = prices.reduce(bayar);
// intinya hasil akhir akan menjadi single value sehingga tidak perlu foreach untuk menampilkannya
console.log(`The total is ${total}`)

function bayar(total, element) {
    return total + element;
}