
function setup() {
    createCanvas(400, 400);
    



const favoriteThings = ["TSpending time with family", "Lifting", "Playing Basketball", "Eating", "Playing video games"];




    const divElement = document.getElementById("myDiv");

    for (let i = 0; i < favoriteThings.length; i++) {
    const item = favoriteThings[i];
    const sentence = item + ", is one of my favorite things.";
    const textNode = document.createTextNode(sentence);
    divElement.appendChild(textNode);
    divElement.appendChild(document.createElement("br"));
    }
}
