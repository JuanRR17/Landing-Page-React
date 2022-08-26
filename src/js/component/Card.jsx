import React from "react";

const Card = () =>{

	return(
		<div className ="col-lg-3 col-md-4 col-sm-6">
			<div className ="card">
				<img src="https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68" className="card-img-top" alt="..."/>
				<div className="card-body  d-flex flex-column align-items-center px-0">
					<h5 className="card-title fw-bold">Card title</h5>
					<p className="card-text text-center pb-3 px-2 border-bottom">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
			</div>
		</div>
  )
}

export default Card;