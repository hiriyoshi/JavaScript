const prompt = require('prompt-sync')();

const input = prompt('Enter your string to be reversed:');

let array =[];
let consonant=0;
let vowel=0;
for(const pass of input){    
    array.push(pass);
}
let temp = [];

for(let i =array.length-1;i>=0;i--){
    temp.push(array[i]);
    if(array[i]==='a'|| array[i]==='A'|| array[i]==='e'|| array[i]==='E'|| array[i]==='o'|| array[i]==='O'|| array[i]==='i'|| array[i]==='i'|| array[i]==='u'|| array[i]==='U'){
        vowel++;
    }
    else{
        consonant++;
    }
}

let result ="";

for(const pass of temp){
    result += pass;
}
console.log(result);
console.log(`The vowel in the word is: ${vowel}`);
console.log(`The consonant in the word is: ${consonant}`);