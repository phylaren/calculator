let input;
let calculator;
let operand1, operand2, operator
let operators;
let hasPoint;

document.addEventListener("DOMContentLoaded", () => {
    input = document.querySelector("input");
    calculator = document.querySelector("#calculator-container");
    operators = document.querySelectorAll("#mathematical-symbols > .button");

    clearCalculator();

    calculator.addEventListener("click", calcFunctionality)
});

function enterNumber(num) {
    if (operand1 === "ERROR") return;
    input.value += num;
    if (operator === "") {
        operand1 = Number(input.value);
        console.log(operand1);
    } else {
        if (operand2 === null) {
            input.value = num;
        }
        operand2 = Number(input.value);
        console.log(operand2)
    }
}

function enterPoint() {
    if (!hasPoint && input.value.length > 0) {
        hasPoint = true;
        enterNumber(".")
    }
}

function setSelected(elem) {
    for (op of operators) {
        op.classList.remove("selected");
    }
    if(operand1 === "ERROR") return;
    elem.classList.add("selected");
}

function clearCalculator() {
    input.value = "";
    operand1, operand2 = null;
    operator = "";
    hasPoint = false;
    for (op of operators) {
        op.classList.remove("selected");
    }
}

function operate() {
    if (operand1 === "ERROR") return;
    switch (operator) {
        case "/":
            if (operand2 !== 0 && operand2 !== null) operand1 /= operand2;
            else {
                operand1 = "ERROR";
                setSelected();
            }
            break;
        case "*":
            operand1 *= operand2;
            break;
        case "-":
            operand1 -= operand2;
            break;
        case "+":
            operand1 += operand2;
            break;
    }
    input.value = operand1;
    operand2 = null;
}

function calcFunctionality(e) {
    switch (e.target.id) {
        case "clear":
            clearCalculator();
            break;
        case "backspace":

            break;
        case "one":
            enterNumber(1);
            break;
        case "two":
            enterNumber(2);
            break;
        case "three":
            enterNumber(3);
            break;
        case "four":
            enterNumber(4);
            break;
        case "five":
            enterNumber(5);
            break;
        case "six":
            enterNumber(6);
            break;
        case "seven":
            enterNumber(7);
            break;
        case "eight":
            enterNumber(8);
            break;
        case "nine":
            enterNumber(9);
            break;
        case "zero":
            enterNumber(0);
            break;
        case "point":
            enterPoint();
            break;
        case "equals":
            operate();
            break;
        case "divide":
            operate();
            setSelected(e.target);
            operator = "/";
            break;
        case "multiply":
            operate();
            setSelected(e.target);
            operator = "*";
            break;
        case "minus":
            operate();
            setSelected(e.target);
            operator = "-";
            break;
        case "plus":
            operate();
            setSelected(e.target);
            operator = "+";
            break;
    }
}