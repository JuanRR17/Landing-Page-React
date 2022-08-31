import React from "react";
import MenuItem from "./MenuItem.jsx";


const NavBar = ()=>{

  const names = ["Home", "About", "Services", "Contact"];

    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid justify-content-around">
        <a className="navbar-brand mx-5" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end mx-5" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <MenuItem name={names[0]} active={true} />
            <MenuItem name={names[1]} />
            <MenuItem name={names[2]} />
            <MenuItem name={names[3]} />
          </ul>
        </div>
      </div>
    </nav>)
}

export default NavBar;