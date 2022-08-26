import React from "react";
import Jumbotron from "./Jumbotron.jsx";
import CardsContainer from "./CardsContainer.jsx";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	const bodyStyle={
		minHeight:"calc(100vh - 56px - 3em)"
	}
    return (
		<div >
			<NavBar/>
			 <div style={bodyStyle} className="container-fluid p-4">
				<Jumbotron />
				<CardsContainer />
			</div>
			 <Footer/> 
		</div>
    );
};

export default Home;