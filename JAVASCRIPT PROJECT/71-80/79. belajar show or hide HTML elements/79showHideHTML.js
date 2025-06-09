const myButton = document.querySelector("#myBtn");
const myImage = document.querySelector("#myImg");

myButton.addEventListener("click", () => {
    if(myImage.style.visibility == "hidden"){
        myImage.style.visibility = "visible";
        console.log("Visible Tampil")
    }
    else{
        console.log("Visible Tidak Tampil")
        myImage.style.visibility = "hidden";

    }
})

// myButton.addEventListener("click", () => {
//     if(myImage.style.display == "none"){
//         myImage.style.display = "block";
//         console.log("Display Tampil")
//     }
//     else{
//         console.log("Display Tidak Tampil")
//         myImage.style.display = "none";

//     }
// })

// Silahkan uncomment untuk cek bedanya artribut display dengan visibility
