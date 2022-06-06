 //__________________________
 //Q1
/*const chess = [
	[' ', ' ', ' ',' ', ' ', ' ',' ', ' ', 1],
	[' ', ' ', ' ',' ', ' ', ' ',' ', ' ', 2],
	[' ', ' ', ' ',' ', ' ', ' ',' ', ' ', 3],
    [' ', ' ', ' ',' ', ' ', ' ',' ', ' ', 4],
	[' ', ' ', ' ',' ', ' ', ' ',' ', ' ', 5],
	[' ', ' ', ' ',' ', ' ', ' ',' ', ' ', 6],
    [' ', ' ', ' ',' ', ' ', ' ',' ', ' ', 7],
	[' ', ' ', ' ',' ', ' ', ' ',' ', ' ', 8],
];
function printchess() {
    console.log([' a-', 'b-', 'c-','d-', 'e-', 'f-','g-', 'h'].join(''))
	for (const row of chess) {
		const bar = row.join('|');
		console.log(bar);
		console.log(' ---------------');
}
}
printchess()*/
//_________________________________
//Q2



   

/*let a = [
    {id:1,Name:"Mohammed",age:18,level:"intermediate",tasksCompleted:8},
    {id:2,Name:"Omar",age:22,level:"beginner",tasksCompleted:2},
   { id:3,Name:"Sarah",age:20,level:"beginner",tasksCompleted:4},
    {id:4,Name:"Saleh",age:15,level:"intermediate",tasksCompleted:6},
   { id:5,Name:"Saud",age:30,level:"advanced",tasksCompleted:10},
    {id:6,Name:"Amani",age:25,level:"advanced",tasksCompleted:10},
   { id:7,Name:"Lojain",age:23,level:"advanced",tasksCompleted:10},]*/
   // to print all information of a
  /* for (const iterator of a) 
        console.log(`id is ${iterator.id}  name is ${iterator.Name} age is ${iterator.age}  level is ${iterator.leve}  task is ${iterator.tasksCompleted}` )*/
    //1______________
   /*let evrypersone = a.filter(a => a.tasksCompleted>=10 )
   console.log(evrypersone);*/
  
  //2___________
   /*function sortthem (higher,lower){
       return higher.tasksCompleted-lower.tasksCompleted 
   }
    a.sort(sortthem)
    console.log(a)*/

    //3___________
    /*let pepoles = a.filter (a => a.age >=25);
    console.log(pepoles)*/

    //4___________
   /* let personpassed = a.filter(a => a.tasksCompleted >=5).map(a => ({
       ...a,pas : "passed" 
    }))
    let personfil = a.filter(a  => a.tasksCompleted < 5).map(a => ({
        ...a,fil : "not passed"
    }))
    console.log(personpassed)

    console.log(personfil)*/




//____________________
//Q3
/*let n1 ;
let n2 ;
function calculator (n1,n2,operator){
    switch (operator){
    case "add":
     return  n1+n2;
    break;
    case "sub":
      return n1-n2;
    break;
    case "mult":
     return n1*n2;
      break;
      case "div":
       return n1/n2;
      break;
}
}
console.log(calculator(10,20, "mult"))*/
//____________________________
//comment Comment 

//To recognize the redline
/*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
//In order to enable the user to input a value
function question(query) {
    return new Promise((resolve) => {
        readline.question(query, resolve);
    });
}

/// 1- Solve real example

/// Create an X-O game
/// X | X | X
/// X | X | X
/// X | X | X
/// Use 2d array to hold all values
// to create a new array
const game = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
];
//To arrange the arrays locations
let places = [
    { row: 0, column: 0, string: '0-0' },
    { row: 0, column: 1, string: '0-1' },
    { row: 0, column: 2, string: '0-2' },
    { row: 1, column: 0, string: '1-0' },
    { row: 1, column: 1, string: '1-1' },
    { row: 1, column: 2, string: '1-2' },
    { row: 2, column: 0, string: '2-0' },
    { row: 2, column: 1, string: '2-1' },
    { row: 2, column: 2, string: '2-2' },
];
//checks all items equal
function allEqual(item, ...array) {
    return array.every((l) => l === item);
}

/// Checks if any row has the same letter in all columns
function didWinAnyRow(letter) {
    return [0, 1, 2].some((row) => game[row].every((l) => l === letter));
}

// Checks if any column has the same letter in all rows
function didWinAnyColumn(letter) {
    return [0, 1, 2].some((column) => {
        return allEqual(
            letter,
            game[0][column],
            game[1][column],
            game[2][column]
        );
    });
}
//cheks if any one is win
function didSomeoneWin(letter) {
    const fromAnyRow = didWinAnyRow(letter);
    const fromAnyCol = didWinAnyColumn(letter);

    const fromCross1 = allEqual(letter, game[0][0], game[1][1], game[2][2]);
    const fromCross2 = allEqual(letter, game[2][0], game[1][1], game[0][2]);

    return fromAnyRow || fromAnyCol || fromCross1 || fromCross2;
}
//to print the " | "
function printGame() {
    for (const row of game) {
        const line = row.join(' | ');
        console.log(line);
        console.log('---------');
    }
}
//to enter x or o As per user choice
function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
//To not choose a full place
function getRandomPlace() {
    const randomIndex = getRandomInt(0, places.length - 1);
    const randomPlace = places[randomIndex];

    places = places.filter((place, i) => i !== randomIndex);

    return randomPlace;
}
//  to To choose an empty place and play in it
function playRandomly(letter) {
    const place = getRandomPlace();
    game[place.row][place.column] = letter;
}
// to print any one to win
function printIfSomeoneWin() {
    return ['X', 'O'].some((letter) => {
        if (didSomeoneWin(letter)) {
            console.log(letter + ' won');
            return true;
        }
        return false;
    });
}
//to checks the place is empty or not
function isThisPlaceAvailable(place) {
    return places.some((p) => p.row === place.row && p.column === place.column);
}
//To make the user enter a value
async function playUserOrBot(letter, userChoice) {
    if (letter === userChoice) {
        printGame();
        const userPlace = await question(
            'Where do you want to play? e.g. row-column '
        );
        const arr = userPlace.split('-');
        const place = { row: +arr[0], column: +arr[1] };
        if (isThisPlaceAvailable(place)) {
            places = places.filter(
                (p) => !(p.row === place.row && p.column === place.column)
            );

            game[place.row][place.column] = letter;
        } else {
            console.error(
                'Please be polite and enter correct place next time!'
            );
            process.exit();
        }
    } else {
        playRandomly(letter);
    }
}
//to start game and make a user enter a value
async function startGame(userChoice) {
    let howManyTime = 0;
    while (howManyTime < 9) {
        const letter = howManyTime % 2 === 0 ? 'X' : 'O';

        await playUserOrBot(letter, userChoice);

        howManyTime++;
        if (howManyTime >= 6 && printIfSomeoneWin()) {
            break;
        } else if (howManyTime === 9) {
            console.log('No one won');
        }
    }
}
// To verify the value entered by the user 
async function play() {
    let letter = await question('Please, enter X or O? ');

    letter = letter.toUpperCase();
    if (letter !== 'X' && letter !== 'O') {
        console.error('Please be polite and enter correct answer next time!');
        process.exit();
    } else {
        console.log(`You are ${letter}!`);
    }

    await startGame(letter);

    readline.close();
}
//To call and run the function
play();*/
