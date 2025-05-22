// How to accept input user

// Easiest way is from window prompt
let usernameAsk = window.prompt(`What's your name?`);
console.log(usernameAsk)

// hard way pakai html textbox
let username;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    //window.alert(username);
    console.log(username);
    document.getElementById(`myLabel`).innerHTML = `Hello ` + username
}