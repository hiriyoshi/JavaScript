const prompt = require('prompt-sync')();

const input = parseInt(prompt('Enter the elements to be sorted:'));
let array =[];
const func = () =>{
    let elements = Number(parseInt(prompt('Enter a number element:')));
    array.push(elements);
}

for(let i=0; i<input;i++){
    func();
}

//sorting bubble

for(let k=0; k<input;k++){
    for(let o = 0;o<array.length;o++){
        if(array[o]<array[o+1]){
        let x = "";
        x = array[o];
        array[o]=array[o+1];
        array[o+1]=x;
        }
    }
}
console.log("Your elements is sorted using Bubble sort are:",array);