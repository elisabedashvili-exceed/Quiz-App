import React from 'react';
import { useSelector } from 'react-redux';

import '../../components/components.css';
import { IAppState } from '../../redux/rootReducer';

export default function Header() {
	let state = useSelector((state: IAppState) => state);
	const { questions, playStatus, currentQuestionIndex, allAnswers } = state;
	let category = Object.values(questions)[currentQuestionIndex].category;

	var counts: any = {};

	for (var i = 0; i < allAnswers.length; i++) {
		var num = allAnswers[i];
		counts[num] = counts[num] ? counts[num] + 1 : 1;
	}

	return (
		<div className="header">
			{playStatus === 'not started' ? (
				<div>Welcome to the Trivia Challenge</div>
			) : playStatus === 'playing' ? (
				<div>{category}</div>
			) : (
				<>
					<div>You scored</div>
					<div style={{ marginBottom: '3vh' }}>
						{counts['correct'] ? counts['correct'] : 0} / {allAnswers.length}
					</div>
				</>
			)}
		</div>
	);
}
