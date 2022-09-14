const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subBtn = document.getElementById('btn-subtract');
const mulBtn = document.getElementById('btn-multiply');
const divBtn = document.getElementById('btn-divide');

const current = document.getElementById('current-calculation');
const currentResult = document.getElementById('current-result');

function outputResult(result, text) {
    currentResult.textContent = result;
    current.textContent = text;
}
