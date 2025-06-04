// ini adalah bentuk alternatif jika tidak pakai async

function loadFile(){
    let fileloaded = false;

    if(fileloaded){
        return Promise.resolve("File Loaded");
    }
    else{
        return Promise.reject("File NOT Loaded");
    }
}
const promise = loadFile();
promise.then(value => console.log(value))
       .catch(error => console.log(error));

console.log("1. proses coy")
// meskipun console lognya dibawah, tapi console log ini yang dieksekusi dulu, baru yang async