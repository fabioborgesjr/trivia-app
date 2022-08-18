import * as React from "react";
import Card from "../../components/Cards";
import LinkButton from "../../components/Buttons/LinkButton"
import { useLocation } from "react-router-dom";

export default function RequestError() {
	const location = useLocation();

	return (
		<Card style={{ width: "70%" }}>
			<h2>We had a problem requesting the Quiz for you</h2>
			<p>Please, try again later. 🤖</p>
			<i>Error Code: {location.search.replace("?errorCode=", "")}</i>
			<br />
			<br />
			<LinkButton to="/">RETURN TO HOME</LinkButton>
		</Card>
	);
}
