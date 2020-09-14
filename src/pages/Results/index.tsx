import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { IAppState } from '../../redux/rootReducer';
import { clearState } from '../../redux/actions';
import Header from '../../components/Header';
import Result from '../../components/ResultItem';

export default function Results() {
	let state = useSelector((state: IAppState) => state);
	const { questions, allAnswers, playStatus } = state;

	const parser = new DOMParser();
	const dispatch = useDispatch();
	const history = useHistory();

	const parse = (string: any) => {
		let parsedString = parser.parseFromString(string, 'text/html');
		let question = parsedString.firstElementChild?.children[1].innerHTML;
		return question;
	};

	const answers = Object.values(allAnswers).map((a) => a);

	return (
		<>
			{playStatus === 'finished' ? (
				<>
					<Header />
					<div>
						{Object.values(questions).map((q, i) => (
							<Result
								key={i}
								answer={answers[i]}
								question={parse(q.question)}
							/>
						))}
					</div>
					<button
						id="blue-button"
						onClick={() => {
							dispatch(clearState());
							history.push('/');
						}}
					>
						PLAY AGAIN
					</button>
				</>
			) : (
				<div className="warning">
					Go to main page and <Link to="/">start the game</Link>
					<span>Test</span>
				</div>
			)}
		</>
	);
}
