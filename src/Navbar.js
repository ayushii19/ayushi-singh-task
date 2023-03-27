import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="nav">
            <img className="logo" src="	https://logos-download.com/wp-content/uploads/2017/01/Orea_Hotels_Resorts_logo.png"></img>
            <Link to="/Home">Home</Link>
            <Link to="/venues">Venues</Link>
            <Link to="/packages">Packages</Link>
            <Link to="/places">Famous places</Link>
            <Link to="/contact">Contact us</Link>
            <button className="navbtn">Today's Stuff</button>
            <button className="navbtn">User Section</button>
            
        </div>
    )
}

export default Navbar