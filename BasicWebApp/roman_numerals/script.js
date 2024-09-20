const button = document.getElementById('convert-btn');
const number = document.getElementById('number');
const output = document.getElementById('output');
let empty = "";
button.addEventListener('click',()=>{
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
  }
  else{
    output.innerText = number.value;
  }
});
const obj = [
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
  if(number.value){

  }
};
