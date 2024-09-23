const inputEle = document.querySelector('input');
const resultEle = document.querySelector('h1');
const incBtnEle = document.querySelector('#inc');
const decBtnEle = document.querySelector('#dec');
const resetBtnEle = document.querySelector('#reset');

// Initialize the userInput as a number
let userInput = Number(inputEle.value);
let result = Number(resultEle.textContent); // Convert to number for arithmetic operations

incBtnEle.addEventListener('click', () => {
    userInput = Number(inputEle.value); // Update userInput from input value
    result += userInput; // Add userInput to result
    resultEle.textContent = result; // Update the h1 element
});

decBtnEle.addEventListener('click', () => {
    userInput = Number(inputEle.value); // Update userInput from input value
    if (result > 0) {
        result -= userInput; // Subtract userInput from result
    }
    resultEle.textContent = result; // Update the h1 element
});

resetBtnEle.addEventListener('click', () => {
    userInput = 1; // Reset the userInput to 1
    inputEle.value = userInput; // Reset input field
    result = 0; // Reset result to 0 or any default value you want
    resultEle.textContent = result; // Update the h1 element
});
