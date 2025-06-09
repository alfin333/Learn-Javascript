const myDiv = document.getElementById("myDIV")
window.addEventListener("keydown", (event) => console.log(event.key));
window.addEventListener("keydown", move);
let x = 0;
let y = 0;
function move(event) {
    switch (event.key) {
        case "ArrowDown":
        case "s":
            y += 5;
            myDiv.style.top = y + "px";
            break;
        case "ArrowUp":
        case "w":
            y -= 5;
            myDiv.style.top = y + "px";
            break;
        case "ArrowRight":
            case "d":
            x += 5;
            myDiv.style.left = x + "px";
            break;
        case "ArrowLeft":
        case "a":    
            x -= 5;
            myDiv.style.left = x + "px";
            break;
    }
}