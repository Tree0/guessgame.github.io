
const ran = Math.trunc(Math.random()*50) + 1;
let gr = 10;


function guessGame() {
  const userIn = Number(document.querySelector('#inNum').value);

  if(!userIn) {
    document.querySelector('.lowOrHi').textContent = ' No Number Entered';
  }

  else if (userIn === ran) {
    document.querySelector('.lowOrHi').textContent = ' Correct Guess ';
  }

  else if (userIn > ran) {

    if (gr > 1) {
    document.querySelector('.lowOrHi').textContent = 'Too High Guess, Try Again!';
    document.querySelector('.preGuess').textContent += userIn + ', ';
    gr--;
    document.querySelector('.lastResult').textContent = gr;

  }

  else {
    document.querySelector('.lowOrHi').textContent = 'Guess Limit Exceeded, Reload the page';
    document.querySelector('.lastResult').textContent = 0;
  }
}

  else if (userIn < ran) {

    if (gr > 1) {
    document.querySelector('.lowOrHi').textContent = 'Too Low Guess, Try Again!';
    document.querySelector('.preGuess').textContent += userIn + ', ';
    gr--;
    document.querySelector('.lastResult').textContent = gr;
  }

  else {
    document.querySelector('.lowOrHi').textContent = 'Guess Limit Exceeded, Reload the page';
    document.querySelector('.lastResult').textContent = 0;
  }
}

}

document.querySelector('#btn').addEventListener('click', guessGame);
