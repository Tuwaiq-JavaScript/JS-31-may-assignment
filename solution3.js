
"use strict";

const ps = require("prompt-sync");
const prompt = ps();

const operator = prompt('pleade , Enter operator ( +, -, * or / ):');

// take input from users
const num1 = prompt('Enter the first number: ');
const num2 = prompt('Enter the second number: ');

let result;

if (operator == '+') {
    result = num1 + num2;
}
else if (operator == '-') {
    result = num1 - num2;
}
else if (operator == '*') {
    result = num1 * num2;
}
else {
    result = num1 / num2;
}
console.log(`${num1} ${operator} ${num2} = ${result}`);