// array =  think of it as variable 
//          that can store multiple value

let fruits = ["apple", "orange", "banana"];
fruits[0] = "coconut";      // ganti apple menjadi coconut
fruits.push("lemon");       // tambah elemen, nambahnya di elemen terakhir
fruits.pop();               //menghilangkan elemen terakhir, berarti harusnya lemon hilang
fruits.unshift("mango");    // tambah elemen, nambahkan di elemen pertama
fruits.shift();            // menghilangkan elemen pertami, mango harusnya hilang
let length = fruits.length;
let index = fruits.indexOf("orange") // jika tidak ada di elemen, akan memberikan hasil -1 artinya not found
console.log(fruits);
console.log("panjang array:", length);
console.log("letak buah:", index);