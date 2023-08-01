import React from "react";
import { useState } from "react";

function Quotes() {
	const QUOTEOBJ = {
		"Marcus Aurelius":
			"You have power over your mind - not outside events. Realize this, and you will find strength.",
		Seneca: "Difficulties strengthen the mind, as labor does the body.",
		Epictetus:
			"We have two ears and one mouth so that we can listen twice as much as we speak.",
	};

	const [quote, setQuote] = useState("");
	const [author, setAuthor] = useState("");

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
			{
				<div className="quote">
					<h1>{quote}</h1>
					<h2>{author}</h2>
					<button onClick={randomQuote}>New Quote</button>
				</div>
			}
		</>
	);
}

export default Quotes;
