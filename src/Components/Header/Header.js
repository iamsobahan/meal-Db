import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../images/logo.png"
import "./Header.css"

const Header = () => {
    const activeStyle = {
        color: "red",
    }
    return (
        <nav>
            <div className="container">
                <Link to="/home">
                    <img src={logo} alt="" />
                 </Link>
                 <ul>
                     <li><NavLink activeStyle={activeStyle} to="/home">Home</NavLink></li>
                     <li><NavLink activeStyle={activeStyle} to="/food">Food Items</NavLink></li>
                     <li><NavLink activeStyle={activeStyle} to="/info">Info</NavLink></li>
                     <li><NavLink activeStyle={activeStyle} to="/contact">Contact us</NavLink></li>
                 </ul>
            </div>
        </nav>
      
       
    );
};

export default Header;