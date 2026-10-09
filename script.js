const display = document.getElementById("display");

let firstNumber = null;
let currentOperator = null;
let waitingForSecondNumber = false;

function appendNumber(number) {
if (display.value === "Error") {
display.value = "0";
}

if (waitingForSecondNumber || display.value === "0") {
    display.value = number;
    waitingForSecondNumber = false;
} else {
    display.value += number;
}

}

function appendDecimal() {
if (display.value === "Error") {
display.value = "0";
}

if (waitingForSecondNumber) {
    display.value = "0.";
    waitingForSecondNumber = false;
} else if (!display.value.includes(".")) {
    display.value += ".";
}

}

function chooseOperator(operator) {
if (display.value === "Error") return;

firstNumber = Number(display.value);
currentOperator = operator;
waitingForSecondNumber = true;

}

function calculate() {
if (
firstNumber === null ||
currentOperator === null ||
waitingForSecondNumber ||
display.value === "Error"
) {
return;
}

const secondNumber = Number(display.value);
let result;

switch (currentOperator) {
    case "+":
        result = firstNumber + secondNumber;
        break;

    case "-":
        result = firstNumber - secondNumber;
        break;

    case "*":
        result = firstNumber * secondNumber;
        break;

    case "/":
        if (secondNumber === 0) {
            display.value = "Error";
            firstNumber = null;
            currentOperator = null;
            waitingForSecondNumber = false;
            return;
        }

        result = firstNumber / secondNumber;
        break;
}

display.value = String(Number(result.toPrecision(12)));

firstNumber = null;
currentOperator = null;
waitingForSecondNumber = false;

}

function clearDisplay() {
display.value = "0";
firstNumber = null;
currentOperator = null;
waitingForSecondNumber = false;
}

function deleteLast() {
if (display.value === "Error" || waitingForSecondNumber) {
display.value = "0";
waitingForSecondNumber = false;
return;
}

display.value = display.value.slice(0, -1);

if (display.value === "" || display.value === "-") {
    display.value = "0";
}

}