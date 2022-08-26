import React from "react";

const Footer = () =>{
    const footerStyle={
        color: "white",
        height: "3em"
    }
    return (
        <footer className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center align-items-end"
        style={footerStyle}>
            Copyright © Your website 2019
        </footer>
    )
}

export default Footer;