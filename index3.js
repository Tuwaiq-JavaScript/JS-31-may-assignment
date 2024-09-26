/*3-write a  (command line application) calculator application that supports addition, 
subtraction, multiplication, divition, for two numbers only
cli*/
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});



const operator = ('Enter operator ( either +, -, * or / ): ');

const number1 = ('Enter first number: ');
const number2 = ('Enter second number: ');

let result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

console.log(`${number1} ${operator} ${number2} = ${result}`);


