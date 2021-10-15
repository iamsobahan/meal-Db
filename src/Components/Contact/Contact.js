import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png"
import "./Contact.css"

const Contact = () => {
    return (
        <div className="contact">
            <img src={logo} alt="" />
            <div className="contact-div">
                <h1>Mealdb Restaurent</h1>
                <h4>Email : iamsobahan@gmail.com</h4>
                <h3>+8801999498887</h3>
                <p>Address : Talha vaiyer basha</p>
                <Link to="/home">
                    <button className="contact-btn">Go to home</button>
                </Link>
            </div>
        </div>
    );
};

export default Contact;