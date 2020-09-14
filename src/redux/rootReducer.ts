export interface IAppState {
	difficulty: string;
	playStatus: string;
	amountOfQuestions: number;
	questions: object;
	currentQuestionIndex: number;
	currentAnswer: string;
	allAnswers: string[];
}

const initialState: IAppState = {
	difficulty: '',
	playStatus: 'not started',
	amountOfQuestions: 0,
	questions: { question: '' },
	currentQuestionIndex: 0,
	currentAnswer: '',
	allAnswers: [],
};

export default (state: IAppState = initialState, action: any) => {
	const {
		difficulty,
		amountOfQuestions,
		currentAnswer,
		questions,
		currentQuestionIndex,
		correct_wrong_answer,
	} = action;
	switch (action.type) {
		case 'START_GAME':
			return {
				...state,
				playStatus: 'playing',
				difficulty,
				amountOfQuestions,
				questions,
			};
		case 'SUBMIT_ANSWER':
			return {
				...state,
				currentAnswer,
				currentQuestionIndex: currentQuestionIndex + 1,
				allAnswers: [...state.allAnswers, correct_wrong_answer],
			};
		case 'FINISH_GAME':
			return {
				...state,
				playStatus: 'finished',
				currentQuestionIndex: 0
			};

		default:
			return state;
	}
};
