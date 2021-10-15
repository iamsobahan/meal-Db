import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Fdetailsshow from '../fdetailsshow/Fdetailsshow';

import "./Fooddetails.css"

const Fooddetails = () => {
    const {mealId} = useParams()
  
    const [food,setfood] = useState([])
    
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => setfood(data.meals))
    },[mealId])
    
    return (
        <div className="container-food-details">
                 {
                     food.map((details) => <Fdetailsshow fdts={details}></Fdetailsshow> )
                 }
        </div>
    );
};

export default Fooddetails;