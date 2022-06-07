

const x =require("prompt-sync");
const prompt=x();

//Q3
const operator = prompt('Enter operator to calculation either ( + , - , * or / ) ? ');  
// // accept the number from the user   
const number1 = parseFloat(prompt ('Enter the first number: '));  
const number2 = parseFloat(prompt ('Enter the second number: ')); 
let result;   
// use if, else if and else  
if (operator == '+') { // use + (addition) operator to add two numbers  
    result = number1 + number2;  
}  
else if (operator == '-') { // use -  (subtraction)  
    result = number1 - number2;  
}  
else if (operator == '*') { // use * (multiplication) 
    result = number1 * number2;  
}  
else {  
    result = number1 / number2; // use / (division) 
} 
console.log(" Result is " + result);