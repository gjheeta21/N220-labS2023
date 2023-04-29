let cards = [];
let flippedCards = [];
let matchedCards = [];
let cardValues = ['ONE', 'ONE', 'TWO', 'TWO', 'MAN', 'MAN', 'MIT', 'MIT', 'NIT', 'NIT', 'FUR', 'FUR', 'GAS', 'GAS', 'HAG', 'HAG'];

function setup() {
  createCanvas(600, 600);
  shuffle(cardValues, true);
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let card = {
        x: i * 100 + 50,
        y: j * 100 + 50,
        w: 80,
        h: 80,
        value: cardValues.pop(),
        flipped: false,
        matched: false
      }
      cards.push(card);
    }
  }
}

function draw() {
  background(200);
  cards.forEach(card => {
    if (card.matched) {
      fill(0, 255, 0);
    } else {
      fill(255);
    }
    rect(card.x, card.y, card.w, card.h, 10);
    if (card.flipped || card.matched) {
      textSize(32);
      textAlign(CENTER, CENTER);
      fill(0);
      text(card.value, card.x + card.w / 2, card.y + card.h / 2);
    }
  })
}

function mouseClicked() {
  cards.forEach(card => {
    if (card.flipped || card.matched) {
      return;
    }
    if (mouseX > card.x && mouseX < card.x + card.w && mouseY > card.y && mouseY < card.y + card.h) {
      card.flipped = true;
      flippedCards.push(card);
      if (flippedCards.length === 2) {
        if (flippedCards[0].value === flippedCards[1].value) {
          matchedCards.push(flippedCards[0], flippedCards[1]);
          flippedCards = [];
        } else {
          setTimeout(() => {
            flippedCards[0].flipped = false;
            flippedCards[1].flipped = false;
            flippedCards = [];
          }, 2000)
        }
      }
    }
  })
}


