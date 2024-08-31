// make a user input for the height of the tree


const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,  // Read from standard input (keyboard)
  output: process.stdout // Write to standard output (console)
});

// Ask the user for input
rl.question('Enter the height of the triangle: ', (input) => {

    const height = Number(input);
// Check if the input is a valid number
if (isNaN(height)) {
    console.log("That's not a valid number!");
} else {
    // Perform any operation with the number
    console.log(`You entered the number: ${height}`);
}
let char = "#";
let spaceLeft = ` `;
let spaceRight = ` `;
//third
for(let i =0;i<=height-1;i++){
    let x ="";
    let y ="";
    let z ="";
    let a ="";
    for(let j=-1;j<i;j++){
        x +=` ${char}`;
    }
    for(let j=height;j>i;j--){
        y +=` ${spaceLeft}`;
    }
    for(let j=0;j<i;j++){
        z +=` ${char}`;
    }
    for(let j=height;j>i;j--){
        a +=` ${spaceRight}`;
    }
    console.log(y + x +z + a);
}
let box = "#";
let spaces = ` `;
let newheight = height;
for(let h = 0;h<(newheight/2);h++){
    let a="";
    let b="";
    for(let p = 0;p<(newheight*3/4);p++){
        a += ` ${spaces}`;
    }
    for(let p = 0;p<(newheight*2/4);p++){
        b += ` ${box}`;
    }
    console.log(`${a}${b}`);
}
rl.close();
});
