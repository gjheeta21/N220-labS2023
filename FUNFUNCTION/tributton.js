let buttons = []; 

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  
  // create the buttons
  for(let i=0; i<3; i++) {
    let x = width/4 + i*width/4;
    let y = height/2;
    let label = "Button " + (i+1);
    let answer = "Answer " + (i+1);
    buttons.push(new Button(x, y, 100, 50, label, answer));
  }
}

function draw() {
  background(200);
  
  
  for(let button of buttons) {
    button.display();
  }
}

function mousePressed() {
  
  for(let button of buttons) {
    if(button.clicked()) {
      displayAnswer(button.answer);
      break;
    }
  }
}

function displayAnswer(answer) {
  let answerDiv = select('#answer');
  answerDiv.html(answer);
}
class Button {
  constructor(x, y, w, h, label, answer) {
    this.x = x;
    
    this.y = y;
    
    this.w = w;
    
    this.h = h;
    
    this.label = label;
    
    this.answer = answer;
  }
  
  display() {
    strokeWeight(2);
    fill(255);
    rect(this.x, this.y, this.w, this.h);
    fill(0);
    text(this.label, this.x+this.w/2, this.y+this.h/2);
  }
  
  clicked() {
    if(mouseX > this.x && mouseX < this.x+this.w &&
       mouseY > this.y && mouseY < this.y+this.h) {
      return true;
    } else {
      return false;
    }
  }
}