let head =[' a','b','c','d','f','g','h'];
function game(){
    const l= head.join( ' - ') ;
      console.log(l);
}
const chBoard=[
[' ',' ',' ',' ',' ',' ',' ',1],
[' ',' ',' ',' ',' ',' ',' ' ,2],
[' ',' ',' ',' ',' ',' ',' ',3],
[' ',' ',' ',' ',' ',' ',' ',4],
[' ',' ',' ',' ',' ',' ',' ', 5],
[' ',' ',' ',' ',' ',' ',' ', 6],
[' ',' ',' ',' ',' ',' ',' ',7],
[' ',' ',' ',' ',' ',' ',' ',8],
];
function printBoard(){
  for(const row of chBoard)
  {const line = row.join(' |') ;
      console.log(line);
      console.log(' ---------------------');
   }
  }
  game();
  printBoard();