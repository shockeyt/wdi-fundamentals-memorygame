//console.log("Up and running!");
/*
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king"; 
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);*/
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne;
/*
var cardOne = "User flipped " + cards[2];
cardsInPlay.push(cardOne);
*/
var cardTwo;
/*
var cardTwo = "User flipped " + cards[3];
cardsInPlay.push(cardTwo);
*/

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	}
	else {
		console.log("Sorry, try again.");
	}
}

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId])
	cardsInPlay.push( cards[cardId]);

	for (var i = 2; i === cardsInPlay.length; i++) {
		/*console.log("length is two");
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		}
		else {
			alert("Sorry, try again.");
		}*/
		checkForMatch();
	}
}
