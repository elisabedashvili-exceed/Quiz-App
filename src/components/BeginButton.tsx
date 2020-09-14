import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { startGame } from '../redux/actions';

interface IProps {
	amountOfQuestions: number;
	difficulty: string;
}

export default function BeginButton({ amountOfQuestions, difficulty }: IProps) {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleBegin = () => {
		if (amountOfQuestions > 0 && difficulty) {
			axios
				.get(
					`https://opentdb.com/api.php?amount=${amountOfQuestions}&difficulty=${difficulty.toLowerCase()}&type=boolean`
				)
				.then((res) => {
					let questions = res.data.results;
					dispatch(startGame(difficulty, amountOfQuestions, questions));
					history.push('/question');
				})
				.catch((err) => console.log(err));
		} else {
			alert('Please, set difficulty and amount');
		}
	};

	return (
		<div>
			<button id="blue-button" onClick={() => handleBegin()}>
				BEGIN
			</button>
		</div>
	);
}
