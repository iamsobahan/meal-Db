import React from 'react';
import { Card ,CardMedia,CardContent,Typography,Button,CardActions} from '@mui/material';
import "./Fdetailsshow.css"
import { useHistory } from 'react-router';


const Fdetailsshow = (props) => {
    const {strMeal,strInstructions,strMealThumb} = props.fdts;
    const history = useHistory()

    const clickhander =() =>{
        history.push("/food")
    }

    const clickhanderhome = () =>{
        history.push("/home")
    } 
    return (
        <Card className="card2" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="340"
          image={strMealThumb}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {strMeal}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {strInstructions.slice(0,100)}
          </Typography>
        </CardContent>
        <CardActions>
        
          <Button onClick={clickhander} size="small">Back to food item</Button>
          <Button onClick={clickhanderhome} size="small">go to home</Button>
        </CardActions>
      </Card>
    );
};

export default Fdetailsshow;