const prompt = require('prompt-sync')();
const input = prompt('Enter the required elements:');
const elements = [];

for(let i = 0;i<input;i++){
    let temp = prompt('Enter the elements:');
    elements.push(temp);
}

const mean =(numbers)=>{
    let mean = 0;
    for(const x of numbers){
        mean += parseInt(x);
    }
    return parseFloat(mean);
}

const ranks = (highest,lowest) =>{
    const rank =elements.sort().reverse();
    highest = rank[0];
    lowest = rank[rank.length-1];
    return [highest,lowest];
}

const main =()=>{
    let average = mean(elements);
    let highest = ranks()[0];
    let lowest  = ranks()[1];
    console.log(`The average of the elements is: ${average}`);
    console.log(`The highest element is: ${highest}`);
    console.log(`The lowest element is: ${lowest}`);
}
main();