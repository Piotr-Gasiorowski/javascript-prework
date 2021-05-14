{function playGame(playerInput){
	clearMessages();
	
	const randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Wylosowana liczba to: ' + randomNumber);

	const getMoveName= function(argMoveId);

 if(argMoveId == 1){
    return = 'kamień';
 } else if(argMoveId == 2){
	return == 'nożyce';
 }	else if(argMoveId == 3){
	return == 'papier';
 } else{
		printMessage('Nie ma takiego ruchu');
 }


/*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);
*/
  const playerMove = getMoveName(playerInput);

/* if(playerInput == '1'){
  playerMove = 'kamień';
    else if(playerInput == '2'){
		playerMove = 'nożyce';
	else if(playerInput == '3'){
		playerMove = 'papier';
}
*/
	if (argMoveId == 1) {
		return 'kamień';
    } else if (argMoveId == 2) {
		return 'papier';
    } else if (argMoveId == 3) {
		return 'nożyce';
    } else {
		printMessage('Wybież inny ruch niż "' + argMoveId + '"!');
	}
	printMessage('Twój ruch to: ' + playerMove);

	function displayResult(argComputerMove, argPlayerMove){
		printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

	if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
		printMessage('Ty wygrywasz!');
	}else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
		printMessage('Ty wygrywasz!');
	}else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
		printMessage('Ty wygrywasz!');
	}else if(argPlayerMove == argComputerMove) {
		printMessage('!!! REMIS !!!');
	}else {
		printMessage('Komputer wygrywa!');
	}
	}
	document.getElementById('play-rock').addEventListener('click', function() {
		playGame(1);
});

	document.getElementById('play-paper').addEventListener('click', function() {
		playGame('2');
});

	document.getElementById('play-scissors').addEventListener('click', function() {
		playGame('3');
});
	}
}