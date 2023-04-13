
function checkDivisibility() {
    let numberInput = document.getElementById("numberInput").value;
    let isDivisible = isDivisibleBySeven(numberInput);
    let resultDiv = document.getElementById("result");
  
    if (isDivisible) {
      resultDiv.innerHTML = `${numberInput} is divisible by 7.`;
    } else {
      resultDiv.innerHTML = `${numberInput} is not divisible by 7.`;
    }
  }
  
  function isDivisibleBySeven(number) {
    return number % 7 === 0;
  }