import React, { useCallback } from "react"
import { useParams } from "react-router-dom";
import Button from "../Buttons";
import Card from "./Card";

export default function Question({ category, difficulty, question, correct_answer, onAnswer }) {
	const { questionId } = useParams();

	const handleAnswer = useCallback(
		(event) => {
			onAnswer(questionId, event.target.name === correct_answer, question)
		},
		[onAnswer, questionId],
	)

	return (
		<Card style={{ width: "70%" }}>
			<h2>{category}</h2>
			<h3>Difficulty: {difficulty}</h3>
			<Card><p>{question}</p></Card>
			<Button name="False" onClick={handleAnswer} backgroundColor="red">False</Button>
			<Button name="True" onClick={handleAnswer} backgroundColor="green">True</Button>
		</Card>
	);
}
