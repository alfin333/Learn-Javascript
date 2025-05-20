// nested function =    Function Inside other functions.
//                      Outer functions have access to inner functions
//                      Inner functions are "hidden" from outside
//                      used in closure (pembelajaran ke 49)

let userName = "Alfin";
let userInbox = "4";

login();
//displayUserName() // ❌ Error: not defined in this scope

// Tujuan mendeklarasikan function di dalam function
// Agar function yang di dalam tidak bisa dipakai diluar,
// jadinya lebih secure
function login() {
    displayUserName()
    displayUserInbox()

    function displayUserName() {
        console.log(`Welcome ${userName}`);
    }
    function displayUserInbox() {
        console.log(`You have ${userInbox} Messages`);
    }
}


