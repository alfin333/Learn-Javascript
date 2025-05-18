// function =   Define code once, and use it many times. 
//              To perform code. call the function name.

// console.log("Selamat Ulang Tahun kamu!")
// console.log("Selamat Ulang Tahun Juga")
// console.log("Selamat Ulang Tahun ___")
// console.log("Umurmu ___ Tahun")

// console.log("Selamat Ulang Tahun kamu!")
// console.log("Selamat Ulang Tahun Juga")
// console.log("Selamat Ulang Tahun ___")
// console.log("Umurmu ___ Tahun")

// console.log("Selamat Ulang Tahun kamu!")
// console.log("Selamat Ulang Tahun Juga")
// console.log("Selamat Ulang Tahun ___")
// console.log("Umurmu ___ Tahun")

// di atas adalah contoh kenapa kita harus punya function agar lebih efisien.
startProgram();

function startProgram(){
    let name = "Alfin"
    let age = 21
    
    selamatUlangTahun(name, age)
    // kalau parameternya gk diisi, nanti jadi undefined
}

function selamatUlangTahun(nama, tahun) {
    console.log("Selamat Ulang Tahun kamu!")
    console.log("Selamat Ulang Tahun Juga")
    console.log("Selamat Ulang Tahun", nama)
    console.log("Umurmu", tahun, "Tahun")
}