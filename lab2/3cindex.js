 diameter = 1; 

function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {
  background(255);
  drawCircle();
}

function drawCircle() {
  ellipseMode(CENTER);
  fill(0);
  noStroke();
  ellipse(width*.5, height*.5, diameter, diameter);
  diameter += 1;
  if (diameter > 200) {
    diameter = 1;
  }
}




