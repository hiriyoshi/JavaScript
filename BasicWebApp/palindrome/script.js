const button = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");
// let text = textInput.value; 

const palindrome =()=>{
  const text = String(textInput.value).replace(/[ !,:?<>,.';"`\[\]\{\}\|\/@#$%^&*()---+*~=_]/g, ""); 
  const textsmall = text.toLowerCase();
  let array =[];
  for(const x of textsmall){
    array.push(x);
  }
  let palindrome = false
  for(let k = 0;k<=parseInt(array.length/2);k++){
    if(array[k]===array[array.length-k-1]){
      console.log(`The first letter: ${array[k]} The last letter: ${array[array.length-k-1]}`);
      console.log("Palindrome is true!");
      palindrome = true;
    }
    else{
      console.log("Palindrome is false!");
      palindrome = false;
      return palindrome;
    }
  }
  return palindrome;
}

button.addEventListener("click", (e)=>{
  e.preventDefault();  
if(textInput.value.trim().length===0){
  alert("Please input a value");
  result.innerText="Please input a value!";
}
else if(palindrome()===true){
  result.style.display = 'block';
  result.innerText=`${textInput.value} is a palindrome`;
}
else if(palindrome()===false){
  result.style.display = 'block';
  result.innerText=`${textInput.value} is not a palindrome`;
}
});