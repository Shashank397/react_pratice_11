import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Button, TextField, Checkbox, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions} from  '@material-ui/core'

function Header(props) {
    const [tempval, setTempval] = useState(null);
    useEffect(()=>{
        console.log("Use Effect is being called first");
        setTempval("this is useEffect")
    }, [])
    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
      });

    function changetext(){
        setTempval("Button clicked");
    }
    const classes = useStyles();
    return (
        <div>
            <h1>Header</h1>
            
    {props.listofschools.map((school)=>(
        <div>
            <Card />
            <Button onClick={changetext}>{props.t1}</Button><br/>
            <label>{tempval}</label>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={school.photo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {school.SchoolName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {school.details}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </div>
    ))}
        </div>
    )
}

export default Header
