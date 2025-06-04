// async = makes a function return a Promise
// await = makes a function wait for a Promise 

//produce
async function loadFile(){
    let fileloaded = false;

    if(fileloaded){
        return "2. File Loaded";
    }
    else{
        throw "2. File NOT Loaded";
    }
}

async function display(){ 
    try {
        document.getElementById("myH1").innerHTML = await loadFile(); // coba hilangkan awaitnya dan lihat
        // Kalau dapat tanpa await, kita cuman dapet janji/Promise doang, tanpa value,
        // hal ini karena fungsi loadfile itu async, karena async dia return promise
    } catch (error) {
        document.getElementById("myH1").innerHTML = error
    }
}
display();

// Kesimpulan:
// async: Mengubah fungsi menjadi fungsi asynchronous (mengembalikan Promise secara otomatis).
// await: Memaksa JavaScript menunggu hasil dari Promise sebelum melanjutkan.

