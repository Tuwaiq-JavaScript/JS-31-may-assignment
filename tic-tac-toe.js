//Here we use readline for the user inputs.
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

//function for returen answer for the question that will ask to user
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
const game = [
	[' ', ' ', ' '],
	[' ', ' ', ' '],
	[' ', ' ', ' '],
];
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

// هنا Array تجمع مره ثانيه وتعاملها معملة Array
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
// chick if someone win and bring the row and column values.
function didSomeoneWin(letter) {
	const fromAnyRow = didWinAnyRow(letter);
	const fromAnyCol = didWinAnyColumn(letter);

	const fromCross1 = allEqual(letter, game[0][0], game[1][1], game[2][2]);
	const fromCross2 = allEqual(letter, game[2][0], game[1][1], game[0][2]);

	return fromAnyRow || fromAnyCol || fromCross1 || fromCross2;
}
// this function can print the game.
function printGame() {
	for (const row of game) {
		const line = row.join(' | ');
		console.log(line);
		console.log('---------');
	}
}
//this function gife rondom number for the bot after user turn
function getRandomInt(min, max) {
	return Math.round(Math.random() * (max - min)) + min;
}
// this function chose rondom place for the bot to play.
function getRandomPlace() {
	const randomIndex = getRandomInt(0, places.length - 1);
	const randomPlace = places[randomIndex];
// Delete soondom index
	places = places.filter((place, i) => i !== randomIndex);

	return randomPlace;
}
// this function will take play rondom in rondom place
function playRandomly(letter) {
	const place = getRandomPlace();
	game[place.row][place.column] = letter;
}
// will print who won in the game.
function printIfSomeoneWin() {
	return ['X', 'O'].some((letter) => {
		if (didSomeoneWin(letter)) {
			console.log(letter + ' won');
			return true;
		}
		return false;
	});
}
// check if the place is avilable to play if not 
function isThisPlaceAvailable(place) {
	return places.some((p) => p.row === place.row && p.column === place.column);
}
// thiis function for the bot that will play with the user
async function playUserOrBot(letter, userChoice) {
	if (letter === userChoice) {
		printGame();
		const userPlace = await question(
			'Where do you want to play? e.g. row-column '
		);
        // we use split to return the result as array
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
// this function for start the game
// you have to put async whan you use await
async function startGame(userChoice) {
	let howManyTime = 0;
	while (howManyTime < 9) {
		const letter = howManyTime % 2 === 0 ? 'X' : 'O';
// we use await with the prmise function to wait user untel answer question
		await playUserOrBot(letter, userChoice);

		howManyTime++;
		if (howManyTime >= 6 && printIfSomeoneWin()) {
			break;
		} else if (howManyTime === 9) {
			console.log('No one won');
		}
	}
}
// check for play and put which you chose 'X' or 'O'
async function play() {
	let letter = await question('Please, enter X or O? ');

    // check for the user input letter.
	letter = letter.toUpperCase();
	if (letter !== 'X' && letter !== 'O') {
		console.error('Please be polite and enter correct answer next time!');
		process.exit();
	} else {
		console.log(`You are ${letter}!`);
	}
// wait for anwer after that play it will not go to the next step before anwer the first
	await startGame(letter);

	readline.close();
}

play();

/// 2- Find its Big-O
/// 3- JS vs TS