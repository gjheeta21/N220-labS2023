function setup() {
    createCanvas(620, 200); 
    noStroke(); 
    textAlign(CENTER, CENTER); 
    textSize(30); 
    
    
    for (let i = 0; i < 3; i++) {
      let div = createDiv();
      div.size(200, 200);
      div.position(i * 205 + 10, 10);
      div.style("background-color", "white");
      div.style("float", "left");
      div.style('margin', "5px");
      div.style("cursor", "pointer");
      div.attribute("data-color", ""); 
      div.mouseClicked(changeColor); 
    }
  }
  
  function draw() {
    
  }
  
  function changeColor() {
    let div = this; 
    let color = div.attribute("data-color"); 
    div.style("background-color", color); 
    
    if (color === "") {
      div.attribute("data-color", "red");
    } else if (color === 'red') {
      div.attribute("data-color", "lime green");
    } else if (color === "green") {
      div.attribute("data-color", "blue");
    } else {
      div.attribute("data-color", "black"); 
    }
  }