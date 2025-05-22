// While loop = repeat some code 
//              while some condition is true 
//              potiontially infinite

let userName = "";

while(userName == "" || userName == null){
    userName = window.prompt(`Enter your name!`)
}

console.log("Hello", userName);