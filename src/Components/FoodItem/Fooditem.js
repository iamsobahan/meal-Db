import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Fooditem.css"

const Fooditem = (props) => {
    const { idMeal,strMeal,strMealThumb,strInstructions,strCategory} = props.foods
   
    return (
        <Card className="card" sx={{ maxWidth: 350 }}>
        <CardHeader
          title={strMeal}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={strMealThumb}
          
          alt="Paella dish"
        />
        <CardContent>
          <Typography class="para" variant="body2" color="text.secondary">
           {strInstructions.slice(0,300)}
          </Typography>
          <Typography paragraph>Type : {strCategory}</Typography>
          <Link className="foodanchor" to={`/sfood/${idMeal}`}>
              <button className="sfoodbtn">Know more</button>
          </Link>
        </CardContent>
      
      
       </Card>
    );
};

export default Fooditem;