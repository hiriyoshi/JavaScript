const checkBtn = document.querySelector('#check-btn');
const clearBtn = document.querySelector('#clear-btn');
const resultsDiv = document.querySelector('#results-div');
const userInput = document.querySelector('#user-input');

const regex = /([\d.]+)?([\d.]+)([\d.]+)([\d.]+])/ig;
checkBtn.addEventListener('click',()=>{

  if(userInput.value===""){
    alert('Please provide a phone number');
  }
  else if(userInput.value){
    // resultsDiv.querySelector('span').innerText= `Valid US number:  ${userInput.value}`;
    
    userInput.value="";
    const results = document.createElement('p');
    results.innerText = `Valid US number:  ${userInput.value}`;
  }
  else{
    resultsDiv.querySelector('span').innerText= `Invalid US number: ${userInput.value}`;
  }
});

clearBtn.addEventListener('click',()=>{
 resultsDiv.innerText="";

});