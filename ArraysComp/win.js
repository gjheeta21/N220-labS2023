let input;

function setup() {
  createCanvas(400, 400);
  input = createInput();
  input.position(20, 20);
  let button = createButton("Check for three 1's in a row ");
  button.position(input.x + input.width + 10, 20);
  button.mousePressed(checkForThreeOnes);
}

function checkForThreeOnes() {
  let values = input.value();
  let array = values.split(",");
  let ThreeOnes = false;
  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] === "1" && array[i+1] === "1" && array[i+2] === "1") {
      ThreeOnes = true;
      break;
    }
  }
  if (ThreeOnes) {
    createP("Winner");
  } else {
    createP("Not Winner");
  }
}