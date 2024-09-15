const prompt = require('prompt-sync')();// install promt-sync for node 

const input = prompt('Enter how many elements you wanna make');

let array= [];
for(let i = 0; i<input;i++){
    let elements = Number(parseInt(prompt('Enter the elements to be sorted:')));
    array.push(elements);
}

for(let j=0;j<array.length;j++){
    
    for(let k = 0; k<array.length-1-j;k++){
        if(array[k]<array[k+1]){
            let x = '';
            x = array[k];
            array[k] = array[k+1];  
            array[k+1] = x;
        }
    }
}
console.log(array);

