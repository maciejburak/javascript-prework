let randomNumber = Math.floor(Math.random() * 3 + 1);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Wylosowana liczba to: ' + randomNumber);

console.log('Gracz wpisał: ' + playerInput);


function getMoveName(randomNumber, playerInput){
	if(randomNumber == 1 || playerInput==1){
	   return 'kamień';
	}else if(randomNumber == 2 || playerInput==2){
	   return 'papier';
	}else if(randomNumber == 3 || playerInput==3){
	   return 'nożyce';
	}else if(playerInput !=1 && playerInput !=2 && playerInput !=3){
		return 'nieznana wartość'
	}
}

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);


let argComputerMove;
let argPlayerMove;


function displayResult(argComputerMove, argPlayerMove){
	console.log('moves:', argComputerMove, argPlayerMove);
	if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
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
	} else if(argPlayerMove != 'nożyce' && argPlayerMove != 'papier' && argPlayerMove != 'kamień'){
	  return 'Nieprawidłowa wartość podana przez użytkownika';
	}
}

printMessage(displayResult(computerMove, playerMove));
