let prices = [5, 10, 15, 20, 25];


for (let i = 0; i < prices.length; i+=1){
    console.log(prices[i]);
}
console.log(``);
for (let i = prices.length - 1; i >= 0; i-=1){
    console.log(prices[i]);
}
console.log(`Looping dibawah ini bagus buat array karena langsung menyesuaikan length array`);

for (let price of prices){
    console.log(price)
}