import React from "react";

const Card = () =>{

	return(
	<div className ="card col-3 p-0">
		<img src="https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68" className="card-img-top" alt="..."/>
		<div className="card-body">
		<h5 className="card-title">Card title</h5>
		<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		<a href="#" className="btn btn-primary">Go somewhere</a>
		</div>
	</div>
  )
}

export default Card;