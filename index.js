/*1-using only arrays or objects, and loops, implement a chess board (with its pieces
 in the terminal use the following diagram is an example of how to show it in the termnial.
NOTE: Do Not Hard Code the board.*/



const pattern1 = ' |';
const pattern2 = ' |';
const binding = 8;

for(let i=1; i<9; i++){
  if(i % 2 !== 0){
    console.log(pattern1.repeat(binding));
  }else{
    console.log(pattern2.repeat(binding));
  }
};