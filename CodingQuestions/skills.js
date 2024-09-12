const prompt = require('prompt-sync')();//use it for node package or remove it for website|browser

const input = prompt('Enter your word to be reversed:');

const array=[];
for(const x of input){
    array.push(x);
}
const reversing =[];
for(let i=array.length-1;i==0;i--){
    reversing.push(array[i]);
}

let complete="";
for(const x of reversing){
    complete =complete + x;
}
console.log(complete);