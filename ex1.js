/*4-mplement a chess board (with its pieces) in the terminal use the 
      following diagram is an example of how to show it in the termnial.*/

      let arr =['a','b','c','d','e','f','g','h'];
      function arrSpace(){
              const l= arr.join(  ' -') ;
                  console.log(l);
      
      }
      //1-use 2D array for chess board
      
      const chessBoard=[
      [' ',' ',' ',' ',' ',' ',' ',1],
      [' ',' ',' ',' ',' ',' ',' ',2],
      [' ',' ',' ',' ',' ',' ',' ',3],
      [' ',' ',' ',' ',' ',' ',' ',5],
      [' ',' ',' ',' ',' ',' ',' ',6],
      [' ',' ',' ',' ',' ',' ',' ',7],
      [' ',' ',' ',' ',' ',' ',' ',8],
      [' ',' ',' ',' ',' ',' ',' ',9],
      ];
      
      function printBoard(){
          for(const rows of chessBoard)
          {const line = rows.join(' | ') ;
                  console.log(line);
                  console.log('  ------------------------');
          
           }
      
          }
          arrSpace();
          printBoard();