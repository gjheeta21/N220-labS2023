
let billInput = document.getElementById("bill");
let calculateButton = document.getElementById("calculate");


calculateButton.addEventListener("click", function() {
  
  let billAmount = Number(billInput.value);

  
  let tipAmount = billAmount * 0.15; 
  let totalBillAmount = billAmount + tipAmount;

  
});