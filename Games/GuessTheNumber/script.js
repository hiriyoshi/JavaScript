const minNumber = 1;
const maxNumber = 20;
let secretNumber;
let attempts = 0;

function startGame() {
    secretNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    attempts = 0;
    document.getElementById('result').textContent = 'The result is in Here';
    document.getElementById('guess').value = '';
    document.getElementById('restart').style.display = 'none';
    document.getElementById('submit-guess').disabled = false;
}
document.getElementById('submit-guess').addEventListener('click', () => {
    const guess = parseInt(document.getElementById('guess').value, 10);
    if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
        document.getElementById('result').textContent = `Please enter a number between ${minNumber} and ${maxNumber}.`;
        return;
    }
    
    attempts++;
    if (guess === secretNumber) {
        document.getElementById('result').textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        document.getElementById('submit-guess').disabled = true;
        document.getElementById('restart').style.display = 'block';
    } else if (guess < secretNumber) {
        document.getElementById('result').textContent = `${guess} is Low! Try again.`;
    } else {
        document.getElementById('result').textContent = `${guess} is High! Try again.`;
    }
});

document.getElementById('restart').addEventListener('click', () => {
    startGame();
});
startGame();
