let input;
let calculator;
let operand1, operand2, operator;
let operators;
let hasPoint;
let nextNum;

document.addEventListener("DOMContentLoaded", () => {
    input = document.querySelector("input");
    calculator = document.querySelector("#calculator-container");
    operators = document.querySelectorAll("#mathematical-symbols > .button");

    clearCalculator();

    calculator.addEventListener("click", calcFunctionality);
    document.addEventListener("keypress", calcFunctionalityKeyboard);
});

function enterNum(num) {
    if (operand1 === "ERROR") return
    if (nextNum) {
        input.value = "";
        nextNum = false;
    }
    if (operator !== null) {
        input.value += num;
        operand2 = Number(input.value);
    } else if (operand2 === null) {
        if (input.value === "0" && num !== ".") {
            input.value = num;
        } else {
            input.value += num;
        }
        operand1 = Number(input.value);
    }
}

function deleteLastCharacter() {
    if (operand1 === "ERROR") return;
    if (input.value === "0") return;
    if (nextNum === true) return;


    let newStr;
    if (input.value.length === 1) {
        newStr = "0";
    } else {
        newStr = input.value.slice(0, input.value.length - 1);
    }

    if (operator !== null) {

        input.value = newStr;
        operand2 = Number(input.value);
    } else if (operand2 === null) {
        input.value = newStr;
        operand1 = Number(input.value);
    }
}

function operate() {
    if (operand1 === "ERROR") return;
    if (operand2 !== null && !nextNum) {
        calculate();
    }
}

function calculate() {
    switch (operator) {
        case "divide":
            if (operand2 === 0) return "ERROR";
            operand1 /= operand2;
            break;
        case "multiply":
            operand1 *= operand2;
            break;
        case "minus":
            operand1 -= operand2;
            break;
        case "plus":
            operand1 += operand2;
            break;
    }
    input.value = operand1;

}

function clearCalculator() {
    input.value = "0";
    operand1 = null;
    operand2 = null;
    operator = null;    
    hasPoint = false;
    nextNum = false;
}

function calcFunctionality(e) {
    let target = e.target.id;
    switch (target) {
        case "clear":
            clearCalculator();
            break;

        case "backspace":
            deleteLastCharacter();
            break;

        case "divide":
        case "multiply":
        case "minus":
        case "plus":
            if (operator !== target) {
                operate();
                operator = target;
            }
            nextNum = true;
            hasPoint = false;
            break;

        case "n0":
        case "n1":
        case "n2":
        case "n3":
        case "n4":
        case "n5":
        case "n6":
        case "n7":
        case "n8":
        case "n9":
            enterNum(Number(target[1]));
            break;

        case "point":
            if (!hasPoint && !nextNum) {
                enterNum(".");
                hasPoint = true;
            }
            break;

        case "equals":
            calculate();
            nextNum = true;
            break;

    }

    for (op of operators) {
        op.classList.remove("selected");
        if (op.id === target) {
            op.classList.add("selected");
        }
    }
}

function calcFunctionalityKeyboard(e) {
    let key = e.key;
    if (key === "/") key = "divide";
    else if (key === "*") key = "multiply";
    else if (key === "-") key = "minus";
    else if (key === "+") key = "plus";

    switch (key) {
        case "c":
            clearCalculator();
            break;

        case "d":
            deleteLastCharacter();
            break;

        case "divide":
        case "multiply":
        case "minus":
        case "plus":
            if (operator !== key) {
                operate();
                operator = key;
            }
            nextNum = true;
            hasPoint = false;
            break;

        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            enterNum(Number(key));
            break;

        case ".":
            if (!hasPoint && !nextNum) {
                enterNum(".");
                hasPoint = true;
            }
            break;

        case "=":
        case "Enter":
            calculate();
            nextNum = true;
            break;

    }

    for (op of operators) {
        op.classList.remove("selected");
        if (op.id === key) {
            op.classList.add("selected");
        }
    }
}
