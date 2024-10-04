const prompt = require('prompt-sync')(); // for Ide that doesnt support prompt //need to install npm prompt-sync
const character = prompt('Enter a character:');
const count = prompt('Enter how tall is the pyramid:');
const inverted = prompt('Enter "true" if you wanna to invert, "false" if not or enter anything:');
const rows = [];

// function padRow(rowNumber, rowCount) {
//   return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
// }

const padRow = (rowNumber,rowCount)=> " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);

for (let i = 1; i <= count; i++) {
  if (inverted==="true") {
    rows.unshift(padRow(i, count));
  } else { 
    rows.push(padRow(i, count));
  }
}

let result = "";

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);