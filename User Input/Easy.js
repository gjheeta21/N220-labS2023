
let randomNumber = Math.floor(Math.random() * 20) + 1;


let guessInput = document.getElementById('guess input');
let guessButton = document.getElementById('guess button');
let result = document.getElementById('result');


guessButton.addEventListener('click', function() {
  
  let guess = Number(guessInput.value);

  
  guessInput.value = '';

  
  if (guess < randomNumber) {
    result.textContent = 'Too low!';
  } else if (guess > randomNumber) {
    result.textContent = 'Too high!';
  } else {
    result.textContent = 'Correct!';
  }
});





