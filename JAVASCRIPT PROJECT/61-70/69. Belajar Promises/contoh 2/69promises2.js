// Promises =   object that encapsulates the result of an asynchronus operation 
//              let asynchronus methods return values like synchronous methods 
//              "I promise to return something in the future"

//              the STATE is "pending" then: "fulfilled" or "rejected"
//              the RESULT is what can be returned
//              2 parts producing & consuming

const janji = new Promise((resolve, reject) => {
    let fileloaded = false;
    if(fileloaded == true){
        resolve("File Loaded");
    }
    else{
        reject("File NOT loaded");
    }
}) // kode ini adalah bagian producing

janji.then(value => console.log(value))
     .catch(error => console.log(error));