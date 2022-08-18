import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Card from "../../components/Cards";
import LinkButton from "../../components/Buttons/LinkButton"

const getAnswersArray = (result, answersLength) => {
	let answers = []

	for (let i = 0; i < answersLength; i++) {
		answers.push(result[i + 1])
	}

	return answers
}

const getCorrectAnswersNumber = (answers) => {
	return answers.filter((answer) => answer.correctAnswer).length
}

const Answer = styled.li`
	text-align: left;
	color: ${props => props.correctAnswer ? "green" : "red"}
`

const Result = ({ result }) => {
	const [answersLength, setAnswersLength] = useState(10)
	const [answers, setAnswers] = useState(null)
	const [correctAnswersNumber, setCorrectAnswersNumber] = useState(null)
	const navigate = useNavigate()

	useEffect(() => {
		if (!result) {
			navigate("/")
		} else {
			const answers = getAnswersArray(result, answersLength)

			setAnswersLength(Object.keys(result).length)
			setAnswers(answers)
			setCorrectAnswersNumber(getCorrectAnswersNumber(answers))
		}
	}, [result])

	return (
		<Card style={{ width: "70%" }}>
			{
				answers ? (
					<>
						<h2>You scored {correctAnswersNumber}/{answersLength} 🏆</h2>
						<ol style={{ maxHeight: "50vh", overflow: "auto", paddingRight: "1rem" }}>
							{answers.map(({ question, correctAnswer }, index) =>
								<Answer key={index} correctAnswer={correctAnswer}>{question} - <strong>{correctAnswer ? "Correct" : "Wrong"}</strong> {correctAnswer ? "✔" : "❌"}</Answer>)
							}
						</ol>
						<LinkButton to="/">PLAY AGAIN 🔁</LinkButton>
					</>
				) :
					<h3>Loading Results...</h3>
			}
		</Card>
	);
}

Result.propTypes = {
	result: PropTypes.object
}

Result.defaultProps = {
	result: {}
}

export default Result