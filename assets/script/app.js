const defaultNum = 0;
let currentNum = defaultNum;

function userInputNum() {
    return parseInt(userInput.value);
  }

function createoperator(operator, before, after) {
  const operatorCreate = `${before} ${operator} ${after}`;
  outputResult(currentNum, operatorCreate);
}

function createType(operatorType) {
    const userInputFunction = userInputNum();  
    const initNum = currentNum;
    if (operatorType === "ADD") {
    currentNum += userInputFunction;
    createoperator("+", initNum, userInputFunction)  
    } else if (operatorType === "SUBTRACT") {
        currentNum -= userInputFunction;
        createoperator("-", initNum, userInputFunction)      
    } else if (operatorType === "MULTIPLY") {
        currentNum *= userInputFunction;
        createoperator("*", initNum, userInputFunction)      
    } else {
        currentNum /= userInputFunction;
        createoperator("/", initNum, userInputFunction)      
    }
    
}

function add() {
    createType("ADD");
}

function subtract() {
    createType("SUBTRACT");
}

function multiply() {
    createType("MULTIPLY");
}

function divide() {
    createType("DIVIDE");
}

addBtn.addEventListener("click", add);
subBtn.addEventListener("click", subtract);
mulBtn.addEventListener("click", multiply);
divBtn.addEventListener("click", divide);
