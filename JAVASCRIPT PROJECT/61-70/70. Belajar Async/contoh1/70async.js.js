// async = makes a function return a Promise
// await = makes a function wait for a Promise 
// katanya sih ini alternative Promise

async function loadFile(){
    let fileloaded = false;

    if(fileloaded){
        return "2. File Loaded";
    }
    else{
        throw "2. File NOT Loaded";
    }
}
loadFile().then(value => console.log(value))
.catch(value => console.log(value))

console.log("1. proses coy")
// meskipun console lognya dibawah, tapi console log ini yang dieksekusi dulu, baru yang async