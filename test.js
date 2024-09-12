const prompt = require('prompt-sync')();
const input = prompt("Enter how many elements to be sorted:");
let array = [];
//NUMBERS
for(let i=0;i<input;i++){
    let elements = Number(parseInt(prompt("Enter the elements:")));
    array.push(elements);
}
//HIGHEST TO LOWEST
for(let k=0;k<array.length-1;k++){
    for(let j = 0;j< array.length;j++){
        if(array[j]<array[j+1]){
            let temp ="";
            temp = array[j];
            array[j]=array[j+1];
            array[j+1]=temp;
        }
    }
}
console.log(array);