// Promises =   object that encapsulates the result of an asynchronus operation 
//              let asynchronus methods return values like synchronous methods 
//              "I promise to return something in the future"

//              the STATE is "pending" then: "fulfilled" or "rejected"
//              the RESULT is what can be returned
//              2 parts producing & consuming

console.log("1. Mulai proses");

const janji = new Promise((resolve, reject) => {
    console.log("2. Promise dibuat (langsung dieksekusi)");
    
    setTimeout(() => {
        resolve("5. Janji ditepati setelah 2 detik");
    }, 2000);
});

janji.then((hasil) => {console.log(hasil)})
    //  .catch((error) => {console.log(error, "error")}); // gk ada reject

console.log("3. Menunggu janji ditepati (kode tetap jalan)");


// Promise itu untuk menghindari callback hell seperti ini
// getData((data) => {
//     saveToDatabase(data, (result) => {
//         showToUser(result, (response) => {
//             console.log("Selesai");
//         });
//     });
// });

// maka solusinya :
// getData()
//     .then(saveToDatabase)
//     .then(showToUser)
//     .then(() => console.log("Selesai"))
//     .catch((err) => console.error("Terjadi kesalahan:", err));
