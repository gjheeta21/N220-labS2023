function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < 3; i++) {
      let div = createDiv();
      div.style("width", "100px");
      div.style("height", "100px");
      div.style("background-color", "red");
      div.style("margin", "20px");
    }
  }
  
  
  function changeStyle(element) {
    element.style.backgroundColor = "blue";
    element.style.width = "80px";
    element.style.height = "100px";
  }
  
  
  function draw() {
    let divs = document.getElementsByTagName("div");
    for (let i = 0; i < divs.length; i++) {
      let button = createButton("Change Style");
      button.mousePressed(() => changeStyle(divs[i]));
      button.parent(divs[i]);
    }
  }