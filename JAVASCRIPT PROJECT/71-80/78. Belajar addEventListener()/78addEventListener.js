// .addEventListener(event, function, useCapture)
// you can add many event handlers to one element.
// Even the same event that invokes different functions

const innerDIV = document.getElementById("innerDIV");
const outerDIV = document.getElementById("outerDIV");

innerDIV.addEventListener("click",changeLCoral,);
outerDIV.addEventListener("click",changeLCoral, true); // meskipun keduanya true, 
// outerDIV akan dijalankan terlebih dahulu, 
// karena secara struktur html, outerdiv ada di atas innerdiv

// innerDIV.addEventListener("mouseover",changePink);
// innerDIV.addEventListener("mouseout",changeLBlue);

function changeLCoral(){
    alert(`you selected ${this.id}`)
    this.style.backgroundColor = "lightcoral"
}

// function changeLBlue(){
//     innerDIV.style.backgroundColor = "lightblue"
// }

// function changePink (){
//     innerDIV.style.backgroundColor = "pink";
// }