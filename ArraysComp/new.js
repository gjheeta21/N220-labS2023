let inputElement = document.querySelector("input");

let sumElement = document.querySelector("#sum");

let avgElement = document.querySelector("#avg");

let formElement = document.querySelector("form");

 function Average(){

    let numbers = inputElement.value.split(",");

    let sum = numbers.reduce((acc, curr) => acc + Number(curr), 0); 
  
    let avg = sum / numbers.length; 
  
    sumElement.textContent = "Sum: ${sum}"; 
  
    avgElement.textContent = "Average: ${avg}"; 
  
    inputElement.value = "0"; 

};