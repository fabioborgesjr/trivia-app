import React, { useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Question from "../../components/Cards/Question";

export default function Quiz({ setResult, quiz }) {
	const [answers, setAnswers] = useState({})
	const navigate = useNavigate()
	const { questionId } = useParams()

	const onAnswer = useCallback(
		(questionId, correctAnswer, question) => {
			const intQuestionId = parseInt(questionId)
			const updatedAnswers = {
				...answers, [intQuestionId]: {
					correctAnswer,
					question
				}
			}

			setAnswers(updatedAnswers)

			if (intQuestionId < quiz.length) {
				navigate(`/quiz/question/${intQuestionId + 1}`)
			} else {
				setResult(updatedAnswers)
				navigate("/result")
			}
		},
		[answers, quiz],
	)

	return (
		<Question {...quiz[questionId - 1]} onAnswer={onAnswer} />
	)
}
