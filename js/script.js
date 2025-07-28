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

    calculator.addEventListener("click", calcFunctionality);
    document.addEventListener("keydown", calcFunctionalityKeyPress);
});

