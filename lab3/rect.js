let rectObject = {
    width: 100,
    height: 50,
    color: [255, 0, 0], 
    x: 200,
    y: 150
  };
  
  function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    
    fill(rectObject.color);
    rect(rectObject.x, rectObject.y, rectObject.width, rectObject.height);
  }
  
  
  function drawRect(rect) {
    fill(rect.color);
    rect(rect.x, rect.y, rect.width, rect.height);
  }
  
  drawRect(rectObject);
  