// Promises =   object that encapsulates the result of an asynchronus operation 
//              let asynchronus methods return values like synchronous methods 
//              "I promise to return something in the future"

//              the STATE is "pending" then: "fulfilled" or "rejected"
//              the RESULT is what can be returned
//              2 parts producing & consuming

function fetchData(url) {
  return new Promise((resolve, reject) => {
    // Simulasi proses async (misal: request ke server)
    setTimeout(() => {
      if (url === "https://api.com/data") {
        // Simulasi respon sukses
        resolve({ data: "Ini data dari " + url });
      } else {
        // Simulasi error (misal url salah)
        reject(new Error("URL tidak valid!"));
      }
    }, 2000); // delay 2 detik supaya terlihat async
  });
}

// Menggunakan Promise yang kita buat
fetchData("https://api.com/data")
  .then(response => {
    console.log("Berhasil:", response.data);
  })
  .catch(error => {
    console.log("Terjadi error:", error.message);
  });
