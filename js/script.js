{
	let playGame = function (playerInput) {
		clearMessages();

		let randomNumber = Math.floor(Math.random() * 3 + 1);

		console.log('Wylosowana liczba to: ' + randomNumber);
		console.log('Gracz wpisał: ' + playerInput);

		let computerMove = getMoveName(randomNumber);
		printMessage('Mój ruch to: ' + computerMove);

		let playerMove = getMoveName(playerInput);
		printMessage('Twój ruch to: ' + playerMove);

		printMessage(displayResult(computerMove, playerMove));
	}

	let getMoveName = function (randomNumber, playerInput) {
		if (randomNumber == 1 || playerInput == 1) {
			return 'kamień';
		} else if (randomNumber == 2 || playerInput == 2) {
			return 'papier';
		} else if (randomNumber == 3 || playerInput == 3) {
			return 'nożyce';
		}
	}

	let displayResult = function (argComputerMove, argPlayerMove) {
		if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
			return 'Ty wygrywasz!';
		} else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
			return 'Ja wygrywam!';
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
			return 'Ja wygrywam!';
		} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
			return 'Ty wygrywasz!';
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
			return 'Ty wygrywasz!';
		} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
			return 'Ja wygrywam!';
		} else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
			return 'Remis!';
		} else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
			return 'Remis!';
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
			return 'Remis!';
		}
	}

	const playRock = document.getElementById('play-rock');
	const rockButtonClicked = function () {
		playGame(1);
	}
	playRock.addEventListener('click', rockButtonClicked);

	const playPaper = document.getElementById('play-paper');
	const paperButtonClicked = function () {
		playGame(2);
	}
	playPaper.addEventListener('click', paperButtonClicked);

	const playScissors = document.getElementById('play-scissors');
	const scissorsButtonClicked = function () {
		playGame(3);
	}
	playScissors.addEventListener('click', scissorsButtonClicked);
}