import React, { useEffect } from "react"
import Card from "../../components/Cards"

export default function Loading({ fetchQuiz }) {
	useEffect(() => {
		fetchQuiz()
	}, [])

	return (
		<Card>
			<h2>Loading Quiz...</h2>
			<p>Wait a moment ⏳</p>
		</Card>
	)
}
