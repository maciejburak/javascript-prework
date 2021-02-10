let  getMoveName, displayResult;

let playGame = function (playerInput){
	clearMessages();

	let randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Wylosowana liczba to: ' + randomNumber);

	console.log('Gracz wpisał: ' + playerInput);

	let getMoveName = function (randomNumber, playerInput){
		if (randomNumber == 1 || playerInput==1){
			return 'kamień';
		}else if(randomNumber == 2 || playerInput==2){
		   	return 'papier';
		}else if(randomNumber == 3 || playerInput==3){
		   	return 'nożyce';
		}
	}

	let computerMove = getMoveName(randomNumber);

	printMessage('Mój ruch to: ' + computerMove);

	let playerMove = getMoveName(playerInput);

	printMessage('Twój ruch to: ' + playerMove);

	let displayResult = function (argComputerMove, argPlayerMove){
	if ( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
		return 'Ty wygrywasz!';
	} else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
	  	return 'Ja wygrywam!';
	} else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
	  	return 'Ja wygrywam!';
	} else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
	  	return 'Ty wygrywasz!';
		} else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
		  	return 'Ty wygrywasz!';
		} else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
		  	return 'Ja wygrywam!';
		} else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
		  	return 'Remis!';
		} else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
		  	return 'Remis!';
		} else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
		  	return 'Remis!';
		}
	}

	printMessage(displayResult(computerMove, playerMove));
}

let playRock = document.getElementById('play-rock');

playRock.addEventListener('click', rockButtonClicked);

function rockButtonClicked(){
	playGame(1);
}

let playPaper = document.getElementById('play-paper');

playPaper.addEventListener('click', paperButtonClicked);

function paperButtonClicked(){
	playGame(2);  	
}

let playScissors = document.getElementById('play-scissors');

playScissors.addEventListener('click', scissorsButtonClicked);

function scissorsButtonClicked(){
	playGame(3);
}