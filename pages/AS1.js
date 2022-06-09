
let arr = ['a','b','c','d','e','f','g','h'];

function arrFunction(){
    const arr1 = arr.join(' - ');
     console.log(arr1);
}

// use 2d array to 
let chessBoard = [
    ['','','','','','','',''],[1],
    ['','','','','','','',''],[2],
    ['','','','','','','',''],[3],
    ['','','','','','','',''],[4],
    ['','','','','','','',''],[5],
    ['','','','','','','',''],[6],
    ['','','','','','','',''],[7],
    ['','','','','','','',''],[8],

];

function printChessBoard(){
for(const row of chessBoard){
    const line = row.join(' | ');
    console.log(line);
    console.log(' --------------------- ');
                  }
}

arrFunction();
printChessBoard();


