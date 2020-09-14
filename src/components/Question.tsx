import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './components.css';

import { IAppState } from '../redux/rootReducer';
import { submitAnswer, finishGame } from '../redux/actions';

import Header from '../components/Header';

export default function Question() {
	const state = useSelector((state: IAppState) => state);
	const dispatch = useDispatch();
	const history = useHistory();
	const parser = new DOMParser();

	const { currentQuestionIndex, amountOfQuestions, playStatus } = state;

	let unparsedString = Object.values(state.questions)[currentQuestionIndex]
		.question;
	let parsedString = parser.parseFromString(unparsedString, 'text/html');
	let question = parsedString.firstElementChild?.children[1].innerHTML;
	let correct_answer = Object.values(state.questions)[currentQuestionIndex]
		.correct_answer;

	const handleAnswer = (true_false: any) => {
		dispatch(
			submitAnswer(
				true_false,
				currentQuestionIndex,
				true_false === correct_answer ? 'correct' : 'wrong'
			)
		);
		if (amountOfQuestions - currentQuestionIndex === 1) {
			dispatch(finishGame());
			history.push('./results');
		}
	};

	return (
		<>
			<Header />
			<div id="question-container">
				{playStatus === 'playing' ? (
					<div className="question">{question}</div>
				) : (
					<div className="warning">
						Go to main page and{' '}
						<a href="http://localhost:3000">start the game</a>{' '}
					</div>
				)}

				<div id="true-false-buttons-container">
					<button
						id="true"
						className={
							state.playStatus === 'playing'
								? 'true-false-button'
								: 'display-none'
						}
						onClick={() =>
							handleAnswer(document.getElementById('true')?.innerHTML)
						}
					>
						True
					</button>
					<button
						id="false"
						className={
							state.playStatus === 'playing'
								? 'true-false-button'
								: 'display-none'
						}
						onClick={() =>
							handleAnswer(document.getElementById('false')?.innerHTML)
						}
					>
						False
					</button>
				</div>
			</div>
			<div
				className={
					state.playStatus === 'playing' ? 'page-footer' : 'display-none'
				}
			>{`${currentQuestionIndex + 1} of ${amountOfQuestions}`}</div>
		</>
	);
}
