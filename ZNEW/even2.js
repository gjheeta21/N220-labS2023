function removeRed(RED) {

 
    RED.setRed(0);
 
    return RED;
  }
  
  function setup() {
  
    createCanvas(400, 800);
  
    let noRed = removeRed(color(170, 200, 150));
  
    fill(noRed);
  
    ellipse(width*.5, height*.5, 200, 200);
  
}