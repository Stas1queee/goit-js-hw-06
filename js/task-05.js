const inputValue = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
const onInputChange = (event) =>
  inputValue.value != ""
    ? (nameOutput.textContent = inputValue.value)
    : (nameOutput.textContent = "Anonymous");
    
inputValue.addEventListener("input", onInputChange);