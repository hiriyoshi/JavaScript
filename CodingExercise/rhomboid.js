// making a rhoboid
const char   = 'x';
const width  = 10;
const height = 5;
const array  = [];
const reverse = true;
function box(iteration,length,tall){
    return " ".repeat(length-iteration*2) + char.repeat(tall);
}   

for(let i =0;i<height;i++){
    if(reverse){
        array.unshift(box(i,width,height));
    }
    else{
        array.push(box(i,width,height));
    }
}
let result ="";

for(const x of array){
    result +="\n"+ x;
}
console.log(result);