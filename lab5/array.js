
function setup() {
    createCanvas(400, 400);
    



let bestTimes = [12.5, 10.2, 11.8];
bestTimes.sort((a, b) => a - b); 


document.getElementById("second-place").innerHTML = "Second Place: " + bestTimes[1] + "s";
document.getElementById("third-place").innerHTML = "Third Place: " + bestTimes[2] + "s";
}
