const checkBtn = document.querySelector('#check-btn');
const clearBtn = document.querySelector('#clear-btn');
const resultsDiv = document.querySelector('#results-div');
const userInput = document.querySelector('#user-input');


checkBtn.addEventListener('click',()=>{  
  if(userInput.value===""){
    alert('Please provide a phone number');
  }
  else if(userInput.value){
    resultsDiv.querySelector('span').innerText= `Valid US number:  ${userInput.value}`;
    userInput.value="";
    const results = document.createElement('span');
    // results.innerHTML = `Valid US number:  ${userInput.value}`;
  }
  else{
    resultsDiv.innerText= `Invalid US number: ${userInput.value}`;
  }
});

clearBtn.addEventListener('click',()=>{
  const result = document.createElement("div");
  
});