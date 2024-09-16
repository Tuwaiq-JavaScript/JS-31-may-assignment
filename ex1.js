///Create  array  prints  row of letters a,b......,h
const letters =    [' a','b','c','d','e',' f','g','h']

///create objects prints bar
const game = [
    ['| R', 'K', 'B','Q', 'KI', 'B','K', 'R |'],
    ['| P', 'P', 'P','P', 'P ', 'P','P', 'P |'],
    ['| ', ' ', ' ',' ', '  ', ' ','  ', '  |'],
    ['| ', ' ', ' ',' ', '  ', ' ','  ', '  |'],
    ['| ', ' ', ' ',' ', '  ', ' ','  ', '  |'],
    ['| ', ' ', ' ',' ', '  ', ' ','  ', '  |'], 
    ['| P', 'P', 'P','P', 'P ', 'P','P', 'P |'],
    ['| R', 'K', 'B','Q', 'KI', 'B','K', 'R |'],
];
const pieses = ['R','K','B','Q','King','B','K','R',
                'P','P','P','P','P','P','P','P']
//this is function is print letters
function print_letters(){
    for(let i=0;i<letters.length;i++){
        //console.log(` ${letters[i]}`)
    process.stdout.write(` ${letters[i]} -`);
    }
    console.log("\n")
}
//this is function is print '|'and '----'
function printGame() {
    let i=0
	for (const row of game ) {
		const line = row.join(` | `);
        i++
		console.log(line,i);
		console.log('-----------------------------------');
	}
    
}
print_letters()
printGame()