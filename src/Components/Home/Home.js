import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
    return (
        <div className="banner">
        <div className="containerHome">
        <h1>Burger n' Boost</h1>
           <h3>A good restaurant is like a vacation; it transports you</h3>
           <p>My little joke that I make whenever I talk about my show is that the way I sold the show to Netflix is 'I'm exactly like Anthony Bourdain, if he was afraid of everything.'</p>
         <Link className="a" to="/contact">
           <Button variant="contained" color="warning">order now</Button>
         </Link>
        </div>
          
        </div>
    );
};

export default Home;