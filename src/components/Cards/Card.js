import React from "react"
import styled from "styled-components"

const Main = styled.main`
	margin: 1rem;
	padding: 1rem;
	background-color: white;
	border-radius: .25rem;
	border: 1px solid #1e00ffe8;
	text-align: center;
`

export default function Card({ children, style }) {
	return (
		<Main style={style}>{children}</Main>
	)
}
