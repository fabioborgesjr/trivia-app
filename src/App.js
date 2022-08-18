import React, { useState, useCallback, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import styled from "styled-components";
import he from "he"

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import api from "./pages/Quiz/api";
import Result from "./pages/Result";
import Loading from "./pages/Loading";
import RequestError from "./pages/Error/RequestError"

import "./App.css";

const AppName = styled.h1`
	color: white;
	font-family: cursive;
`

const formatQuiz = (quiz) => {
	return quiz.map((question) => ({ ...question, question: he.decode(question.question) }))
}

export default function App() {
	const [result, setResult] = useState(null)
	const [shouldFetch, setShouldFetch] = useState(false)
	const navigate = useNavigate()
	const [quiz, setQuiz] = useState([])

	const fetchQuiz = useCallback(
		async () => {
			try {
				const { data } = await api.fetchQuiz()

				setQuiz(formatQuiz(data.results))
				setShouldFetch(false)

				navigate("/quiz/question/1")
			} catch (error) {
				console.error({ error })

				navigate(`/error?errorCode=${error.code}`)
			}
		},
		[],
	)

	const playAgain = useCallback(
		() => {
			setResult(null)
			navigate("/")
		},
		[],
	)

	useEffect(() => {
		if (shouldFetch) {
			fetchQuiz()
		}
	}, [shouldFetch])

	return (
		<div className="App">
			<AppName>Trivia App 💭</AppName>
			<Routes>
				<Route exact path="/loading" element={<Loading fetchQuiz={() => setShouldFetch(true)} />} />
				<Route path="/quiz/question/:questionId" element={quiz.length ? <Quiz quiz={quiz} setResult={setResult} /> : <Navigate replace to="/" />} />
				<Route path="/result" element={<Result result={result} playAgain={playAgain} />} />
				<Route exact path="/error" element={<RequestError />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</div>
	);
}