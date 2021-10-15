import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';

const Member = (props) => {
    const {name,details,position,img} =props.member;
    const history = useHistory()
    const clickhandler =()=> {
        history.push("/home")
    }
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="240"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
           {position}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {details}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={clickhandler} size="small">Go to home</Button>
       </CardActions>
      </Card>
    );
};

export default Member;