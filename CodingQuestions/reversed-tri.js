let height = 10;
let width = [];
let cha = "!";
for(let i = height;i>0;i--){
    width.push(cha.repeat(i));
}
let result = "";
for(const x of width){
    result +="\n" + x;
}
console.log(result);
