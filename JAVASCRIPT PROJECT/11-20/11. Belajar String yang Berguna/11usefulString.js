// Useful string and method

let username = `alfin tampan`;
console.log(username.length); //panjang string, mulai dari index 0 
console.log(username.charAt(0)); //huruf yang pertama apa ya
console.log(username.indexOf(`n`)); //n itu index keberapa, biasanya didetect yang pertama ditemuin
console.log(username.lastIndexOf(`n`)); //cari n yang paling terakhir ditemuin

let name = `  Alfin  `;
console.log(name.trim()); //spasi depan dan belakang di hilangkan
console.log(name.toUpperCase()); // kapital semua
console.log(name.toLowerCase()); // jd kecil semua

let phonenumber = `081-231-234-1122`;
let cleanNumber = phonenumber.replaceAll(`-`,``) //hilangkan huruf, ada 2 argumen, argumen pertama yg mau dihilangkan
console.log(cleanNumber);