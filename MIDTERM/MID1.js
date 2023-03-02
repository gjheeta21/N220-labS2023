function setup() {
    createCanvas(600, 800);
  }
  
  function draw() {
    background(400);
  
    let words = ["Cirro", "cumulo", "nimbu", "strato"];
  
    let output = ""; 
  
    for (let i = 0; i < words.length; i++) {
      output += words[i]; 
      if (i < words.length - 1) {
        output += " and "; 
      }
    }
  
    text(output, 175, 175); 
  }