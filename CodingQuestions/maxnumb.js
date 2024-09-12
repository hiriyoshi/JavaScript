const prompt = require('prompt-sync')();

const inputnumber = parseInt(prompt('Enter size of your array:'));
let input =0;
let array =[];
for(let i =0;i<inputnumber;i++){
    input = parseInt(prompt('Enter the elements of your arrays:'));
    array.push(input);
}
let maxnumb=[0];
let max = 0;
for(let i = 1;i<array.length;i++){
    if(max<=array[i]){
        max=array[i];
    }    
}
console.log(`The highest number is ${max}`);