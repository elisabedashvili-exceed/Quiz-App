import React, { useState } from 'react';
import '../../pages/pages.css';

import Header from '../../components/Header';
import BeginButton from '../../components/BeginButton';

export default function Home() {
	const [amountOfQuestions, setAmountOfQuestions] = useState(0);
	const [difficulty, setDifficulty] = useState('');
	const handleAmount = (e: any) => {
		const re = /^[0-9\b]+$/;
		if (e.target.value === '' || re.test(e.target.value)) {
			setAmountOfQuestions(e.target.value);
		}
	};

	return (
		<>
			<Header />
			<div id="home-container">
				<div id="difficulty-amount-container">
					<div className="width-100" id="difficulty">
						<select
							className="width-100 outline-none"
							defaultValue="Difficulty:"
							onChange={(e) => {
								setDifficulty(e.target.value);
							}}
						>
							<option disabled>Difficulty:</option>
							<option>Easy</option>
							<option>Hard</option>
						</select>
					</div>
					<div>
						<input
							className="width-100 outline-none"
							placeholder="Amount"
							onChange={handleAmount}
						/>
					</div>
				</div>
			</div>
			<BeginButton
				amountOfQuestions={amountOfQuestions}
				difficulty={difficulty}
			/>
		</>
	);
}
