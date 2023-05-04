
// DEFINING ALL THE CARDS 
let deck = [];

let suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

let ranks = ["ACE", "2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING"];

for (let i = 0; i < suits.length; i++) {

    for (let j = 0; j < ranks.length; j++) {

        deck.push(ranks[j] + " of " + suits[i]);

    }
}
 

// ALL THE CARDS IN THE DECKS 
 
for (let i = 0; i < 4; i++) {
    
    for (let j = 1; j <= 13; j++) {
    
        let card = {
   
            value: j,
   
            suit: i,
   
            x: 50 + i * 150,
   
            y: 50 + j * 20,
   
            width: 100,
   
            height: 150
   
        };
   
        deck.push(card);
   
    }
  }


// DIFFERENT CARDS AND THE GAME IT SELF 

function draw() {

    createCanvas(800, 800);

    background(0, 128, 0);

    
  for (let i = 0; i < deck.length; i++) {
    
    let card = deck[i];
    
    rect(card.x, card.y, card.width, card.height);
  }

}
//MOVES CARD TO THE TOP TO SEE

function mousePressed() {
 
  for (let i = deck.length - 1; i >= 0; i--) {
    let card = deck[i];
    if (mouseX > card.x && mouseX < card.x + card.width &&
        mouseY > card.y && mouseY < card.y + card.height) {

            deck.splice(i, 1);

            deck.push(card);
                break;
    }
  }
}
// RELEASE CARD ON RIGHT DECk
function mouseReleased() {
  
}
//CARD MOVES WITH MOUSE 
function mouseDragged() {
  
}