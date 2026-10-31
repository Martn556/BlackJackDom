let money = 1000;

// class cards {
//     type
// }

//suits are the little icons :p (spades ♠, hearts ♥︎, diamonds ♦, clubs ♣)
// const card = {
//     suit: "empty",
//     color: "empty",
//     value: "empty"
// }

const deck = [];

/**
 * 
 * @param {Array} emptyDeck 
 * @returns A brand new deck of 52 cards (this changes the array given)
 */
function setUpDeck(emptyDeck) {
    let suitCountr = 0;
    let cardSuit = "";
    let color = "";
    for (let j = 0; j < 4; j++) {
        let cardNumb = 2;
        if (suitCountr == 0) { cardSuit = "♠", color = "black:"; }
        if (suitCountr == 1) { cardSuit = "♥︎", color = "red"; }
        if (suitCountr == 2) { cardSuit = "♦", color = "red"; }
        if (suitCountr == 3) { cardSuit = "♣", color = "black"; }
        suitCountr++;
        // emptyDeck.push("A" + cardSuit);
        emptyDeck.push(card = { suit: cardSuit, color: color, value: 11, icon: "A" })
        for (let i = 0; i < 9; i++) {
            // emptyDeck.push(cardNumb + cardSuit);
            emptyDeck.push(card = { suit: cardSuit, color: color, value: cardNumb, icon: `${cardNumb}` })
            cardNumb++;
        }
        // emptyDeck.push("J" + cardSuit);
        // emptyDeck.push("Q" + cardSuit);
        // emptyDeck.push("K" + cardSuit);
        emptyDeck.push(card = { suit: cardSuit, color: color, value: 10, icon: "J" });
        emptyDeck.push(card = { suit: cardSuit, color: color, value: 10, icon: "Q" })
        emptyDeck.push(card = { suit: cardSuit, color: color, value: 10, icon: "K" })
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
        let rndNumb = Math.floor(Math.random() * deck.length);
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

console.log(deck);




// document.getElementById("playerCards").innerHTML = "<div class=\"Card"><h2>5</h2><h3>♦</h3><h1>♦</h1></div>";
document.getElementById("playerCards").innerHTML = `<div class="Card" style="color: ${deck[0].color};">` + `<h2>${deck[0].icon}</h2>` + `<h3>${deck[0].suit}</h3>` + `<h1>${deck[0].suit}</h1>` + `</div>`;
