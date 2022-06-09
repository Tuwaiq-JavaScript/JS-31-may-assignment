let [, , op, num1, num2] = process.argv;
const operation = {
  "+": +num1 + +num2,
  "-": +num1 - +num2,
  "*": +num1 * +num2,
  "/": +num1 / +num2,
};

console.log(operation[op]);
