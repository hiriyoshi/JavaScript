const button = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");

const test = () => {
  const text = textInput.value; 
  const cleanedText = text.replace(/[ !,:?<>,.';"`\[\]\{\}\|\/@#$%^&*()-+*~]/g, "");  
  alert(cleanedText);
  
};  

button.addEventListener("click", test);