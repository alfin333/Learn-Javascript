// setTimeout() = invokes a function after a number of miliseconds
//                asynchronus function (doesn't pause execution)
let item = "Akademi Kripto";
let price = 6000000
// item dan price adalah argumen yang akan diteruskan ke fungsi firstMessage
let timer1 = setTimeout(firstMessage, 3000, item, price); 
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

console.log(`Kode ini berjalan`);
function firstMessage(item, price){
    alert(`Beli course ${item} ini hanya ${price}!!!`);
}
function secondMessage(){

    alert(`Bukan penipuan!`);
}
function thirdMessage(){
    alert(`Tunggu apa lagi!`);
}
document.getElementById(`myBtn`).onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert("Terima kasih sudah membeli <3")
}

// Intinya cara kerja setTimeout itu adalah delay dulu baru 
// menjalankan fungsi dalam bentuk callback, argument pada callback bisa
// dimasukan ke parameter setTimeout, yang mana argument tersebut bisa
// diteruskan ke callback

// oh iya contoh penggunaan asynchronus: 
// Menunggu respon dari server (AJAX/fetch) sambil user bisa tetap berinteraksi.
// Menjalankan animasi sambil kode lain berjalan.

// Kalau setTimeout() bersifat synchronous, 
// maka browser akan macet dan berhenti selama 3, 6, atau 9 detik 
// yang tentu saja tidak diinginkan dalam pengalaman pengguna.