import React from "react";
import Jumbotron from "./Jumbotron.jsx";
import CardsContainer from "./CardsContainer.jsx";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
    return (
		<div>
			<NavBar/>
			 <div className="container">
				<Jumbotron />
				<CardsContainer />
			</div>
			 <Footer/> 
		</div>
    );
};

export default Home;