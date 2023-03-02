let xPos = 50;
let yPos = 50;
let xSpeed = 5;
let ySpeed = 5;
function setup() {
    createCanvas(700, 1200);
}
function draw() {
    background(145);


    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;
    if (xPos > 400) {
        xSpeed = -1;
        fill("gap");
        xSpeed = -.5; 
        fill("gap"); 
    }
    if (xPos < 0) {
        xSpeed = -.5;
        fill("gap");
    }
    if (yPos > 600) {
        ySpeed = -1;
        fill("gap");
    }
    if (yPos < 0) {
        ySpeed = -2;
        fill("gap");
    }
    
    circle(xPos, yPos, 30);
    
    
}