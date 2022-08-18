import * as React from "react";
import Card from "../../components/Cards";
import LinkButton from "../../components/Buttons/LinkButton"

export default function Home() {
	return (
		<Card style={{ width: "70%" }}>
			<h2>Welcome to the Trivia Challenge!</h2>
			<p>You will be presented with 10 True or False questions.</p>
			<p>Can you score 100%?</p>
			<LinkButton to="/loading">BEGIN 🏁</LinkButton>
		</Card>
	);
}
