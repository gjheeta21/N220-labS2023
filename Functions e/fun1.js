function generaterandomNumber() {
    return Math.floor(Math.random() * 11);
  }
  
  
  function handleClick() {
    const randomNumber = generaterandomNumber();
    document.getElementById("result").textContent = randomNumber;
  }
  
  
  document.getElementById("generate button").addEventListener("click", handleClick);