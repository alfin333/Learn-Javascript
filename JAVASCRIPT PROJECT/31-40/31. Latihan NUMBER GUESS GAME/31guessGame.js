const guessRandom = Math.floor(Math.random() * 10) + 1;
guess = 0;
document.getElementById("submitGuess").onclick = function () {
    guess+=1
    getGuessUser = document.getElementById("guessIpt").value
    if (guessRandom == getGuessUser) {
        document.getElementById("resultLabel").innerHTML = `Jawabanmu ${getGuessUser} adalah Benar!, itu membutuhkan ${guess} tebakan`
    }
    else if (getGuessUser > guessRandom) {
        alert("sepertinya angkanya KEBESARAN")

    }
    else {
        alert("sepertinya angkanya KEKECILAN")
    }
}
