function fillpawns(row,color) {
    const postfix = color=='white'?' ':'*'
  return row.map((i) => " P"+postfix);
}
function fillpieces(color) {
    const pieces = ['R','H','B','Q','K','B','H','R']
    const postfix = color=='white'?' ':'*'
  return pieces.map((i) => ' '+i+postfix);
}

function printChess() {
  const head = [" A ", " B ", " C ", " D ", " E ", " F ", " G ", " H "];
  const board = Array(8).fill(Array(8).fill("   "));
  console.log(head.join("|"));
  console.log("--------------------------------");
  board.map((row, index) => {
    const colNumber = index + 1;
    if (colNumber == 1 || colNumber == 8) {
        const color = colNumber==1?'white':'black'
        row = fillpieces(color);
      }
    if (colNumber == 2 || colNumber == 7) {
        const color = colNumber==2?'white':'black'
      row = fillpawns(row,color);
    }

    console.log(row.join("|") + colNumber);
    console.log("--------------------------------");
  });
}

printChess();