// class =  a blueprint for creating objects
//          define what properties and methods they have
//          use a constructor for unique properties

class Player{
    score = 0;

    pause(){
        console.log("You paused the game");
    }
    exit(){
        console.log("You exited the game");
    }
}

const playerSatu = new Player(); // bikin object baru
const playerDua = new Player(); // bikin object baru

playerSatu.score += 1;
console.log(`score player satu: ${playerSatu.score}`);
playerSatu.pause()
playerSatu.exit()

console.log(`ini score punya object player dua: ${playerDua.score}`)

// intinya dengan class, 
// kita bisa buat object sepuasnya 
// dengan properti dan method yang selaras, 
// sehingga tidak perlu membuat ulang properti dan method