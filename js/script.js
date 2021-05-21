const paper = 'papier';
const scissors = 'nożyczki';
const rock = 'kamień';
{function playGame(playerInput){
	console.log('playerInput');
	
	clearMessages();
		console.log('clearMessages');
	
	const randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('Wylosowana liczba to: ' + randomNumber);

	const getMoveName = function(argMoveId) {
		console.log(argMoveId)
		if(argMoveId == 1){
			return 'kamień';
		} else if(argMoveId == 2){
			return 'nożyce';
		} else if(argMoveId == 3){
			return 'papier';
		}
	}

	const displayResult = function(argComputerMove, argPlayerMove){
		printMessage('Komputer zagrał ' + argComputerMove + ', a Ja ' + argPlayerMove);

		if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
			printMessage('Ja wygrywam!');
		} else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
			printMessage('Ja wygrywam!');
		} else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
			printMessage('Ja wygrywam!');
		} else if(argPlayerMove == argComputerMove) {
			printMessage('!!! REMIS !!!');
		} else {
			printMessage('Komputer wygrywa!');
		}
	}
	const computerMove = getMoveName(randomNumber);
	printMessage('Komputer wybrał: ' + computerMove);
  
	const playerMove = getMoveName(playerInput);
  
	printMessage('Mój ruch to: ' + playerMove);
	displayResult(computerMove, playerMove);
}
document.getElementById('play-rock').addEventListener('click', function() {
	playGame('1');
});

document.getElementById('play-scissors').addEventListener('click', function() {
	playGame('2');
});

document.getElementById('play-paper').addEventListener('click', function() {
	playGame('3');
});
}