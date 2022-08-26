import React from "react";

const NavBar = ()=>{
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div class="container-fluid justify-content-around">
        <a className="navbar-brand mx-5" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end mx-5" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact <span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>)
}

export default NavBar;