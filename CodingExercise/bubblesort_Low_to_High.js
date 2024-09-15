const prompt = require('prompt-sync')();
const input = prompt('Enter the number of elements:');

let array = [];
for(let i=0; i<input;i++){
    let elements = prompt('Enter the elements:');
    array.push(elements);
}
//LOWEST TO HIGHEST
for(let k = 0;k<array.length;k++){
    for(let l=0;l<array.length-k;l++){
        if(array[l]>array[l+1]){
        let x = '';
        x = array[l];
        array[l]=array[l+1];
        array[l+1]=x;
        }
    }
}
console.log(array);