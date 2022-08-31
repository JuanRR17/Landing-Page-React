import React from "react";
import Card from "./Card.jsx";

const CardsContainer = () =>{

	return (
	<div className="row mt-3 g-3">
		{Array(4).fill("").map((_,idx) => {
          return <Card key={idx} />
        })}
	</div>
	);
}

export default CardsContainer;