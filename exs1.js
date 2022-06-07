let carter = [" a", "b", "c", "d", "e", "f", "g", "h"]
const games =[['','','','','','','','','',],['','','','','','','','','',],
['','','','','','','','','',],['','','','','','','','','',]
,['','','','','','','','','',],['','','','','','','','','',],
['','','','','','','','','',],['','','','','','','','','',],
]
function printGame() {
	for (const row of games) {
		const line = row.join(' | ');
		console.log(line);
		console.log('------------------------');
      
	}
	while (rows <= 8) {
		  let cols = 0
		  let number = 0
		
		  let previousHashed
		
		  if (rows % 2 === 0) {
		    previousHashed = true
		  } else {
		    previousHashed = false
		  }

}
function play(){

}
console.log(carter.join("  "));
printGame()
// let board = ""
// let rows = 0
// let numbers = []
// let carter = ["  a", "b", "c", "d", "e", "f", "g", "h"]
// console.log(carter.join("" + " "))

// while (rows <= 8) {
//   let cols = 0
//   let number = 0

//   let previousHashed

//   if (rows % 2 === 0) {
//     previousHashed = true
//   } else {
//     previousHashed = false
//   }

//   while (cols <= 8) {
//     if (previousHashed) {
//       board += " |"
//       number+="2"
//     } else {
//       board += " |"
//     }

//     previousHashed = !previousHashed

//     cols++
//   }
  

  
//   board += rows + " \n" 
//   board += "------------------"
//   board += "\n"

//   rows++
// }
// // insertColumnAtRight()
// console.log(board)