function setup() {
    createCanvas(400, 600); 
  }
  
  function draw() {
    background(255); 
    
    if (mouseX > width / 2) {
      fill(255, 0, 0); 
    } else {
      fill(0, 0, 255); 
    }
    ellipse(mouseX, mouseY, 50, 50);
  }