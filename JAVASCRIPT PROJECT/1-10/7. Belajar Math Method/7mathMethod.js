let z = Math.PI;
let y = 20;
let x = 200;
let maximum;
let minimum;
a = Math.round(z); // pembulatan yang lebih dekat gitu
b = Math.floor(z); // bulatkan ke bawah
c = Math.ceil(z); // bulatkan ke atas
d = Math.pow(z, 2); // buat pemangkatan, parameter kedua itu nilai dari eksponennya
e = Math.sqrt(z); // buat akar
f = Math.abs(z); // jika negatif akan jadi postif

console.log(a);

maximum = Math.max(z,y,x); 
minimum = Math.min(z,y,x); 
console.log(`Bilangan Terbesar: ${maximum}`)
console.log(`Bilangan Terkecil: ${minimum}`)