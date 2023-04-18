let r = 0, g = 0, b = 0; 
let currentColor; 

function setup() {
  createCanvas(400, 400);
  currentColor = createDiv(); 
  currentColor.position(10, 420); 
  updateColor();
  
  createButton("+1 Red").attribute("value", 1).position(10, 10).mousePressed(changeColor);
  createButton("+5 Red").attribute("value", 5).position(70, 10).mousePressed(changeColor);
  createButton("+10 Red").attribute("value", 10).position(130, 10).mousePressed(changeColor);
  createButton("+1 Green").attribute("value", 1).position(10, 50).mousePressed(changeColor);
  createButton("+5 Green").attribute("value", 5).position(70, 50).mousePressed(changeColor);
  createButton("+10 Green").attribute("value", 10).position(130, 50).mousePressed(changeColor);
  createButton("+1 Blue").attribute("value", 1).position(10, 90).mousePressed(changeColor);
  createButton("+5 Blue").attribute("value", 5).position(70, 90).mousePressed(changeColor);
  createButton("+10 Blue").attribute("value", 10).position(130, 90).mousePressed(changeColor);
}

function draw() {
  
  fill(r, g, b);
  rect(100, 150, 300, 200);
}

function updateColor() {
  currentColor.html(`Current color: rgb(${r}, ${g}, ${b})`); 
}
function changeColor() {
  let value = parseInt(this.attribute("value")); 
  let color = this.elt.innerHTML.split(" ")[1]; 
  switch (color) {
    case "Red":
      r = min(255, r + value); 
      break;
    case "Green":
      g = min(255, g + value); 
      break;
    case "Blue":
      b = min(255, b + value); 
      break;
  }
  updateColor(); 
}