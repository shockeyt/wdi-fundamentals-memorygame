//console.log("Up and running!");
/*
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king"; 
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);*/
var cards = 
	[
			{
				rank: "queen",
				suit: "hearts",
				cardImage: "images/queen-of-hearts.png"
			},
			{
				rank: "queen",
				suit: "diamonds",
				cardImage: "images/queen-of-diamonds.png"
			},
			{
				rank: "king",
				suit: "hearts",
				cardImage: "images/king-of-hearts.png"
			},
			{
				rank: "king",
				suit: "diamonds",
				cardImage: "images/king-of-diamonds.png"
			}	
	];
var cardsInPlay = [];
//var cardOne;
/*
var cardOne = "User flipped " + cards[2];
cardsInPlay.push(cardOne);
*/
//var cardTwo;
/*
var cardTwo = "User flipped " + cards[3];
cardsInPlay.push(cardTwo);
*/

var checkForMatch = function() {
	for (var i = 2; i === cardsInPlay.length; i++) {
		//console.log("length is two");
		// alt option cards[cardId].cardImage.setAttribute();
		//cards[cardId].cardImage = this.setAttribute(src);
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		}
		else {
			alert("Sorry, try again.");
		}
		
	}
	/*if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
		
	}
	else {
		console.log("Sorry, try again.");
		
	}*/
};

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	//my bad attribute attempt
	//cards[cardId].cardImage = this.setAttribute(src);
	this.setAttribute('src', (cards[cardId].cardImage));
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	//cardId.setAttribute('src', cards[cardId].cardImage);
};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', [i]);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();


	/*for (var i = 2; i === cards.length; i++) {
		//console.log("length is two");
		// alt option cards[cardId].cardImage.setAttribute();
		cards[cardId].cardImage = this.setAttribute(src);
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		}
		else {
			alert("Sorry, try again.");
		}
		checkForMatch();
		}*/

