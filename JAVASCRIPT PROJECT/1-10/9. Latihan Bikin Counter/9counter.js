let count = 0;
let inc;

document.getElementById(`decreaseBtn`).onclick = function (){
    inc = document.getElementById(`incrementIpt`).value;
    inc = Number(inc);
    count-=inc;
    document.getElementById(`countLabel`).innerHTML = count;
}
document.getElementById(`resetBtn`).onclick = function (){
    count=0;
    document.getElementById(`countLabel`).innerHTML = count;
}
document.getElementById(`increaseBtn`).onclick = function (){
    inc = document.getElementById(`incrementIpt`).value;
    inc = Number(inc);
     count+=inc;
    document.getElementById(`countLabel`).innerHTML = count;
}