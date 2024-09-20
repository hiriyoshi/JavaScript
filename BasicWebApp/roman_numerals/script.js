const button = document.getElementById('convert-btn');
const number = document.getElementById('number');
const output = document.getElementById('output');
let empty = "";
let converted="";  
button.addEventListener('click',(e)=>{
  e.preventDefault();
  if(number.value === empty){
    output.innerText = "Please enter a valid number";
  }
  else if(number.value<=0){
    output.innerText= "Please enter a number greater than or equal to 1";
  }
  else if(number.value>=4000){
    output.innerText = "Please enter a number less than or equal to 3999";
  }
  else if(number.value>=1 && number.value<4000){
    converter();
    output.innerText = converted;
    converted = "";
  }
});
const obj = [
  {
    "digit":1000,
    "roman":'M'
  },
  {
    "digit":500,
    "roman":'D'
  },
  {
    "digit":100,
    "roman":'C'
  },
  {
    "digit":50,
    "roman":'X'
  },
  {
    "digit":10,
    "roman":'X'
  },
  {
    "digit":5,
    "roman":'V'
  },
  {
    "digit":1,
    "roman":'I'
  },
];
const converter = ()=>{

  let result = [];
  while(number.value>0){
    let quotient;
    let remainder;
    if(number.value>=1000){
    quotient = Math.floor(number.value/1000);
    number.value = number.value-quotient*1000;
      for(let i=0;i<quotient;i++){
        result.push("M");
      }
    }
    if(number.value>=900){
    quotient = Math.floor(number.value/900);
    number.value = number.value-quotient*900;
    for(let i=0;i<quotient;i++){
        result.push("CM");
      }
    }
    if(number.value>=500){
    quotient = Math.floor(number.value/500);
    number.value = number.value-quotient*500;
    for(let i=0;i<quotient;i++){
        result.push("D");
      }
    }
    if(number.value>=400){
    quotient = Math.floor(number.value/400);
    number.value = number.value-quotient*400;
    for(let i=0;i<quotient;i++){
        result.push("CD");
      }
    }

    if(number.value>=100){
    quotient = Math.floor(number.value/100);
    number.value = number.value-quotient*100; 
    for(let i=0;i<quotient;i++){
        result.push("C");
      }
    }
    if(number.value>=90){
    quotient = Math.floor(number.value/90);
    number.value = number.value-quotient*90;
    for(let i=0;i<quotient;i++){
        result.push("XC");
      }
    }
    if(number.value>=50){
    quotient = Math.floor(number.value/50);
    number.value = number.value-quotient*50;  
    for(let i=0;i<quotient;i++){
        result.push("L");
    }
    }
    if(number.value>=40){
    quotient = Math.floor(number.value/40);
    number.value = number.value-quotient*40;
    for(let i=0;i<quotient;i++){
        result.push("XL");
    }
    }
    if(number.value>=10){
    quotient = Math.floor(number.value/10);  
    number.value = number.value-quotient*10;
    for(let i=0;i<quotient;i++){
        result.push("X");
    }
    }
    if(number.value>=9){
    quotient = Math.floor(number.value/9);
    number.value = number.value-quotient*9;
    for(let i=0;i<quotient;i++){
        result.push("IX");
    }
    }
    if(number.value>=5){
    quotient = Math.floor(number.value/5);
    number.value = number.value-quotient*5; 
    for(let i=0;i<quotient;i++){
        result.push("V");
    }
    }
    if(number.value>=4){
    quotient = Math.floor(number.value/4);
    number.value = number.value-quotient*4;
    for(let i=0;i<quotient;i++){
        result.push("IV");
    }
    }
    if(number.value>=1){
    quotient = Math.floor(number.value/1);
    number.value = number.value-quotient*1;  
    for(let i=0;i<quotient;i++){
        result.push("I");
      }   
    }
    for(const x of result){
    converted += x;
    }
    output.innerText = converted;
  }
};