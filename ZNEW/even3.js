function setup() {
  
    createCanvas(400, 400);
  }
  
  function draw() {
    
    background(220);
    
    polarPoint(100, 100);
    

    let pole = polarPoint(50);
    
    
    circle(pole.x, pole.y, 10);
  }
  
  function polarPoint(p) {
  
    let x = p * Math.sin(mouseX);
  
    let y = p * Math.cos(mouseX);
  
    return createVector(x, y);
  }