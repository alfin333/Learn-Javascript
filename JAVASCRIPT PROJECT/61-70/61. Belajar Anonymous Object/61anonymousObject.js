// Anonymous Object =   Objects without a name 
//                      Not directly referenced 
//                      Less syntax. No need for unique names

class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
}


let cards = [   new Card("A", "Hearts"),
                new Card("A", "Spades"),
                new Card("A", "Diamonds"),
                new Card("A", "Clubs"),

                new Card("2", "Hearts"),
                new Card("2", "Spades"),
                new Card("2", "Diamonds"),
                new Card("2", "Clubs")];

// console.log(cards[0].value, cards[0].suit)
cards.forEach(print);
function print(element, index){
    console.log(`Kartu ${index + 1}: `,element.value, element.suit);
}
// anonymous object ini digunakan sekali sebagai data sementara
// menghemat penulisan kode
// cocok untuk elemen array atau argumen fungsi yang tidak perlu REFERENSI ULANG