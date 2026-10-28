let money = 1000;

// class cards {
//     type
// }

//suits are the little icons :p (spades ♠, hearts ♥︎, diamonds ♦, clubs ♣)
const card = {
    suit: "empty",
    value: "empty"
}

const deck = [];

/**
 * 
 * @param {Array} emptyDeck 
 * @returns A brand new deck of 52 cards (this changes the array given)
 */
function setUpDeck(emptyDeck) {
    let suitCountr = 0;
    let cardSuit = "";
    for (let j = 0; j < 4; j++) {
        let cardNumb = 2;
        if (suitCountr == 0) { cardSuit = "♠"; }
        if (suitCountr == 1) { cardSuit = "♥︎"; }
        if (suitCountr == 2) { cardSuit = "♦"; }
        if (suitCountr == 3) { cardSuit = "♣"; }
        suitCountr++;
        emptyDeck.push("A" + cardSuit);
        for (let i = 0; i < 9; i++) {
            emptyDeck.push(cardNumb + cardSuit);
            cardNumb++;
        }
        emptyDeck.push("J" + cardSuit);
        emptyDeck.push("Q" + cardSuit);
        emptyDeck.push("K" + cardSuit);
    }
    return emptyDeck;
}

// let input = deck; //objects get turned into references so input.push() will push into deck and itself (they are the same)
/**
 * 
 * @param {Array} deck 
 * @returns A shuffled deck (this changes the given array)
 */
function shuffleDeck(deck) {
    let output = [];
    while (deck.length != 0) {
        let rndNumb = Math.floor(Math.random() * (((deck.length - 1) + 1) - 0) + 0);
        output.push(deck[rndNumb]);
        deck.splice(rndNumb, 1);
    }
    for (i of output) {
        deck.push(i); //this to push into deck which is a const
    }
    return output;
}
setUpDeck(deck);
shuffleDeck(deck);

console.log(deck[0][0][0]);




// document.getElementById("playerCards").innerHTML = "<p>test</p>";