const poker = require('poker-hands');

function createDeck () {
    var suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
    var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    var deck = [];


    for (var suitCounter = 0; suitCounter < 4; suitCounter++) {
      for (var valueCounter = 0; valueCounter < 13; valueCounter++) {
	    deck.push(values[valueCounter] + suits[suitCounter]);
      }
    }
    return deck;
}

function shuffleDeck (deck) {
    for (var i = 0; i < 52 ; i++) {
        var tempcard = deck[i];
        var randomIndex = Math.floor(Math.random() * 52);
        deck[i] = deck[randomIndex];
        deck[randomIndex] = tempcard;
    }
}


var counter = 0;

// create a loop that will shuffle a deck, remove the first 5 card, and determine the hand strngth 
do {
    var testDeck = createDeck();
    shuffleDeck(testDeck);

  // create a 5 card poker hand from the first 5 card in our shuffle deck

  var fiveCardHand = testDeck.splice(0, 5);

  //  convert the 5 card arry into string, with each card separated by one space

  var fiveCardHandString = fiveCardHand.join(' ');
  console.log(fiveCardHandString);

  // install the poker-hands library and use its method to indentify a poker hand

  console.log('The hand is ' + poker.getHandStrength(fiveCardHandString));
  counter++;
} while(poker.getHandStrength(fiveCardHandString) > 3);

console.log('it took ' + counter + ' time!');

//  count how many times we loop untill we get a royal flush 

