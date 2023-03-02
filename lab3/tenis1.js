function setup() {
    createCanvas(400, 400);
  }

  function draw() {
    
        background(0, 0, 255);
        if (keyIsDown(UP_ARROW)) {
             fill(0, 25, 25);
            rect(10, 40, 50, 150);
          }
       

    if (keyIsDown(DOWN_ARROW)){
        fill(0, 25, 25);
        rect(320, 40, 50, 150);
    }




    



  }