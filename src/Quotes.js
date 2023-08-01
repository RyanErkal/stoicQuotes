import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Quotes() {
	const QUOTEOBJ = {
		"Marcus Aurelius":
			"You have power over your mind - not outside events. Realize this, and you will find strength.",
		Seneca: "Difficulties strengthen the mind, as labor does the body.",
		Epictetus:
			"We have two ears and one mouth so that we can listen twice as much as we speak.",
	};

	const [quote, setQuote] = useState();
	const [author, setAuthor] = useState();

	function randomQuote() {
		let keys = Object.keys(QUOTEOBJ);
		let randomKey = keys[Math.floor(Math.random() * keys.length)];
		console.log("setQuote");
		setQuote(QUOTEOBJ[randomKey]);
		setAuthor(randomKey);
		//console.log(QUOTEOBJ[randomKey]);
		return QUOTEOBJ[randomKey];
	}

	//console.log(quote);
	return (
		<>
			<h1>Stoic Quotes</h1>
			<Card>
				<Card.Body className="quote">
					<h1 className="m-2">
						<i>"{quote}"</i>
					</h1>
					<h3 className="m-2">
						<i>-{author}</i>
					</h3>
				</Card.Body>
			</Card>
			<Button className="btn btn-primary m-2" onClick={randomQuote}>
				New Quote
			</Button>
		</>
	);
}

export default Quotes;
