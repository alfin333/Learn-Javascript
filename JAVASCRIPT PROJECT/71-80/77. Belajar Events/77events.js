// const element = document.getElementById("myBtn");
// element.onclick = doSomething;

// const element = document.body;
// element.onload = doSomething;

// const element = document.getElementById("myTxt");
// element.onchange = doChangeSomething;

const element = document.getElementById("myDIV");
element.onmouseover = doTouchMe;
element.onmouseout = doOutMe;
element.onmousedown = doOutMe;
element.onmouseup = doTouchMe;
// coba klik si div nya itu, pasti warnanya berubah, jika kita tambahkan element onmouseup
// setelah onmousedown, maka yang terjadi adalah event akan dipertahankan hingga si mouse
// melepas kliknya
function doSomething(){
    alert("You did something!")
}

function doChangeSomething(){
    alert("You did change something!")
}

function doTouchMe(){
    element.style.backgroundColor = "lightgreen";
}

function doOutMe(){
    element.style.backgroundColor = "pink"
}
