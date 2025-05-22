
document.getElementById("submitBtn").onclick = function(){
    let temp = document.getElementById(`myIpt`).value;

    if(document.getElementById(`celsius`).checked){
        temp = toCelsius(temp)
        temp = Number(temp)
        document.getElementById(`tempLabel`).innerHTML = temp;
    }
    else if(document.getElementById(`fahrenheit`).checked){
        temp = toFahrenheit(temp)
        temp = Number(temp)
        document.getElementById(`tempLabel`).innerHTML = temp;
    }
    else{
        document.getElementById(`tempLabel`).innerHTML = `Pilih Suhu`;
    }
}

function toCelsius(temp){
    return (temp-32) * (5/9);
}
function toFahrenheit(temp){
    return temp * 9 / 5 + 32;
}