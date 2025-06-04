// async = makes a function return a Promise
// await = makes a function wait for a Promise 

//produce
async function loadFile() {

    const janji = new Promise((resolve, reject) => {
        let fileloaded = false;


        if (fileloaded) {
            resolve("2. File Loaded");
        }
        else {
            reject("2. File NOT Loaded");
        }
    })
    try {
        document.getElementById("myH1").innerHTML = await janji;
        // kalau tanpa await, kita dapat "Janji" doang bukan valuenya
        // hal ini karena fungsi loadfile itu async, karena async dia return promise
    } catch (error) {
        document.getElementById("myH1").innerHTML = error;
    }
}

loadFile();

// Kesimpulan:
// async: Mengubah fungsi menjadi fungsi asynchronous (mengembalikan Promise secara otomatis).
// await: Memaksa JavaScript menunggu hasil dari Promise sebelum melanjutkan.

