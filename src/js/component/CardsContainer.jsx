import React from "react";
import Card from "./Card.jsx";

const CardsContainer = () =>{
	const cards = Array.of(4).map(card => {
		<Card />
});
	return (
	<div className="row p-3">
		<Card />
		<Card />
		<Card />
		<Card />
	</div>
	);
}

export default CardsContainer;