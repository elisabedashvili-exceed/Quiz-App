import React from 'react';

interface IResult {
	question: string | undefined;
	answer: string;
}

export default function ResultItem({ question, answer }: IResult) {
	return (
		<div>
			<div className="result-item">
				<img
					className="plus-minus-icon"
					src={require(`./${answer === 'correct' ? 'plus' : 'minus'}.svg`)}
					alt=""
					width="10"
					height="10"
				/>
				<div className="result-text">{question}</div>
			</div>
			<hr />
		</div>
	);
}
