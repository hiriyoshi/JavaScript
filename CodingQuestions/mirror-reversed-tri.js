let height = 10;
let width = [];
let cha = "!";
let space = "";
let result = "";
for(let i = height;i>0;i--){ 
    let spaces = " ".repeat(height - i);
    width.push(spaces + cha.repeat(i))
}
for(const x of width){
    result +="\n" + x;
}
console.log(result);
