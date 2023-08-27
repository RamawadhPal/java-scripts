

// get the elements
const guesses = document.querySelector('.guesses');
const lastResult  = document.querySelector('.lastResult');
const lowOrHi  = document.querySelector('.lowOrHi ');

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

// create variables

let guessCount = 1;
let resetButton;
guessField.focus();

const generaterandomNumber = () => {
    return Math.floor(Math.random() *100) + 1;
}

// create random numer
let randomNumber = generaterandomNumber();

const checkGuess = () =>  {
    const userGuess = Number(guessField.value);
    if(guessCount === 1) {
        guesses.textContent = 'Previous guesses: '
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    if(userGuess === randomNumber) {
        lastResult.textContent = ' Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = "";
        setGameOver();
    } else if(guessCount === 10){
        lastResult.textContent = ' !!GAME OVER!!';
        lowOrHi.textContent = "";
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was to low!';
        } else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was to high!';
        }
    }
    guessCount ++;
    guessField.value = "";
    guessField.focus();
  }

  const setGameOver = () => {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new Game';
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
  }

  const resetGame = () => {
    guessCount = 1;
    
    const resetParas = document.querySelector('.resultParas p');
    for(const restPara of resetParas) {
        restPara.textContent = "";
    }
    resetButton.parentNode.removeChild(resetButton);
    
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guesses.textContent = "";

    lastResult.style.backgroundColor = 'white';
    randomNumber = generaterandomNumber();

  }

  guessSubmit.addEventListener('click', checkGuess);