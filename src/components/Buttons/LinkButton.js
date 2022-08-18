import React from "react"
import { Link } from "react-router-dom";

const style = {
	textDecoration: "none",
	fontFamily: "cursive",
	fontWeight: 700,
}

export default function LinkButton({ children, ...props }) {
	return <Link {...props} style={style}>{children}</Link>
}
