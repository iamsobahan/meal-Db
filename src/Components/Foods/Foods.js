import { Grid } from '@mui/material';
import logo from "../../images/logo.png"
import React, { useEffect, useState } from 'react';
import Fooditem from '../FoodItem/Fooditem';
import "./Foods.css"

const Foods = () => {
    const [inputval , setinputval] = useState("")
    const [food,setfood] =useState([])
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputval}`)
        .then(res => res.json())
        .then(data => setfood(data.meals))
    },[inputval])
    const changehandler = e => {
        const val = e.target.value;
        setinputval(val)
    }
    return (
        <div className="containerFood">
        <div className="inputdiv">
        <img src={logo} alt="" />
        <input placeholder="Search your food" className="foodInput" onChange={changehandler} type="text" />
        </div>
            
            <Grid className="grid" container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    food.map((singlefood)=><Fooditem foods={singlefood} key={singlefood.idMeal}></Fooditem>)
                }
                </Grid>
        </div>
    );
};

export default Foods;