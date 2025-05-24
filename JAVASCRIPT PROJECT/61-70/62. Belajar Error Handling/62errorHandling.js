// Error = Object with a description of
//         Something went wrong

//          Cant Open a file 
//          Lose Connection 
//          User types incorrect input 
//          TypeError    

// throw =  Executes user-defined error

//console.lag() // pasti error, baca errornya

try {
    // try block dijalankan terlebih dahulu.
    // Di sini, console.lag() dipanggil, tapi fungsi 'lag' tidak ada di objek console.
    // Maka akan terjadi error (TypeError), dan JavaScript langsung lompat ke catch.
    console.lag();

}
catch(error) {
    // Error yang dilempar dari try akan ditangkap di sini sebagai argumen 'error'.
    // Lalu, error tersebut ditampilkan lewat console.log.
    console.log(error);
}

try{
    let x = window.prompt("Enter a Number: ");
    x = Number(x);

    if(isNaN(x)) throw "That wasn't a number!"
    if(x == "") throw "That was empty!"
    console.log(`${x} is a Number`);
}
catch(error){
    console.log(error)
}
finally{
    console.log("This always execute!")
    // meskipun try catch ini berhasil atau error, 
    // kode pada block finally akan selalu berjalan
}
// Intinya try adalah blok kode yang selalu dijalankan terlebih dahulu
// bila ada error akan dilempar dan ditangkap oleh catch dalam bentuk argument
// kita bisa membuat error handling menggunakan throw
// finally akan selalu dieksekusi meski berhasil atau error
// Finally berguna untuk:
// - Menutup koneksi
// - Membersihkan resource
// - Menghentikan loading indicator
// - Logging aktivitas 
// - dll