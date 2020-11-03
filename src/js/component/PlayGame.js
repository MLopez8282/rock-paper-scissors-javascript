import React from "react";

export const PlayGame = () => {
	const getUserChoice = userInput => {
		userInput = userInput.toLowerCase();
		if (
			userInput === "rock" ||
			userInput === "paper" ||
			userInput === "scissors" ||
			userInput === "bomb"
		) {
			return userInput;
		} else {
			console.log("Error");
		}
	};

	const getComputerChoice = () => {
		let randomNumber = Math.floor(Math.random() * 3);
		switch (randomNumber) {
			case 0:
				return "rock";
				break;
			case 1:
				return "paper";
				break;
			case 2:
				return "scissors";
				break;
			default:
				return "Error";
				break;
		}
	};

	const determineWinner = (userChoice, computerChoice) => {
		if (userChoice === "bomb") {
			return "user won!";
		}
		if (userChoice === computerChoice) {
			return "It's a tie!";
		}
		if (userChoice === "rock") {
			if (computerChoice === "paper") {
				return "computer won!";
			} else {
				return "user won!";
			}
		}
		if (userChoice === "paper") {
			if (computerChoice === "scissors") {
				return "computer won!";
			} else {
				return "user won!";
			}
		}
		if (userChoice === "scissors") {
			if (computerChoice === "rock") {
				return "computer won!";
			} else {
				return "user won!";
			}
		}
	};
	let userChoice = getUserChoice("paper");
	let computerChoice = getComputerChoice();
	return (
		<div>
			<p>You threw {userChoice}</p>
			<p>The computer threw {computerChoice}</p>
			<p>{determineWinner(userChoice, computerChoice)}</p>
		</div>
	);
};
