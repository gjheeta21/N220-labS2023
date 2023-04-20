
function setup() {
  
    createCanvas(600, 600);
  }
  
  function draw() {
  
    background(220);
  
    drawCars(mouseX, mouseY); 
  }
  
  function drawCars(x, y) {
    
    
    fill(255, 0, 0);
    
    rect(x - 30, y - 10, 60, 20);
    
    rect(x - 20, y - 20, 40, 10);
    
    fill(0);
    
    circle(x - 20, y + 5, 20);
    
    circle(x + 20, y + 5, 20);
  

        
        
  }


  