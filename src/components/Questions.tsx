import questionsAndAnswers from "../assets/data/q-and-a";
import iconPlus from "../assets/images/icon-plus.svg";
import iconMinus from "../assets/images/icon-minus.svg";
import { useState } from "react";

const Questions = () => {
	const [displayedIndex, setDisplayedIndex] = useState(-1);

	return (
		<div>
			{questionsAndAnswers.map((qa, index) => (
				<div className="question" key={index}>
					<div
						className={
							"question-title " + (displayedIndex === index ? "displayed" : "")
						}
						onClick={() => {
							if (displayedIndex === index) setDisplayedIndex(-1);
							else setDisplayedIndex(index);
						}}
					>
						<h2>{qa.question}</h2>
						<div className="answer-toggle">
							<img className="answer-toggle-minus" src={iconMinus} />
							<img className="answer-toggle-plus" src={iconPlus} />
						</div>
					</div>
					<div className="answer-wrapper">
						<div className="question-answer">{qa.answer}</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Questions;
