export const startGame = (
	difficulty: string,
	amountOfQuestions: number,
	questions: object[]
) => {
	return {
		type: 'START_GAME',
		difficulty,
		amountOfQuestions,
		questions,
	};
};

export const submitAnswer = (
	currentAnswer: string,
	currentQuestionIndex: number,
	correct_wrong_answer: string
) => {
	return {
		type: 'SUBMIT_ANSWER',
		currentAnswer,
		currentQuestionIndex,
		correct_wrong_answer,
	};
};

export const finishGame = () => {
	return {
		type: 'FINISH_GAME',
	};
};
