// make a user input for the height of the tree


const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,  // Read from standard input (keyboard)
  output: process.stdout // Write to standard output (console)
});

// Ask the user for input
rl.question('Enter the height of the triangle: ', (input) => {

    const number = Number(input);

    // Check if the input is a valid number
    if (isNaN(number)) {
        console.log("That's not a valid number!");
    } else {
        // Perform any operation with the number
        console.log(`You entered the number: ${number}`);
    }
    const character = "#";
    const rows = [];    
    for (let i = 0; i < input; i = i + 1) {
      rows.push(character.repeat(i));
    }    
    let result = "";   
    for (const row of rows) {
      result = result + "\n" + row;
    }
    console.log(result);
  rl.close();
});
