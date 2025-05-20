// Closure =    a function with preserved and private data.
//              Give you access to an outer function's scope,
//              from an inner function.

document.getElementById("loginBtn").onclick = login();

userInbox = 420.69; // hasilnya tidak 420.69 karena function login hanya mengakses variabel userInbox pada dirinya, inilah closure

function login (){
    let userName = `MAlfin`;
    let userInbox = 2;
    function displayInformationUser(){
        alert(`${userName} you have ${userInbox} new messages!`);
        userInbox = 0;
    }
    return displayInformationUser;
}