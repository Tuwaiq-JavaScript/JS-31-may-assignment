const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise((resolve) => {
    readline.question(query, resolve);
  });
}

async function main() {
  // this while loop will work with the input and
  //ask the user till he/she writes exit
  while (true) {
    // you can use as many of these as you want
    const input = await question(
      "Enter a number then an operation then another number (separated by space,e.g. 4 + 5), or 'exit' to close the program \n"
    );
    let [num1, op, num2] = input.split(" ");
    const operation = {
      "+": +num1 + +num2,
      "-": +num1 - +num2,
      "*": +num1 * +num2,
      "/": +num1 / +num2,
    };
    if (num1 == "exit") {
      process.exit(1);
    }
    console.log(operation[op]);
  }
  readline.close();
}
// invoking the main method
main();
