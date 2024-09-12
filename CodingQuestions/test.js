// const prompt = require('prompt-sync')();
const input = prompt('Enter the height:');

let char = '*';
for(let i = 0;i<=input;i++){
    let result = "";
    for(let j=input;j>i;j--){
        result += " " + char;
    }
    console.log(result);
}