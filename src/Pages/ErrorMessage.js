import React from "react";
import { Link } from "react-router-dom";

function ErrorMessage() {
	return (
		<div className="p-10">
			<h1>Ooops! </h1>
			<p>Something went wrong!</p>
			<p>
				Back{" "}
				<Link className="underline decoration-1 underline-offset-4 hover:bg-lightpink " to="/">
					to Munamii's home page.
				</Link>
			</p>
		</div>
	);
}

export default ErrorMessage;
