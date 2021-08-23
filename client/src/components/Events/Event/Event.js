import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

import { useLocation } from "react-router-dom";
import {deleteEvent,getEvents} from '../../../actions/events';
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

/*const handleChange = () => (
  rm == "READ MORE" ? "READ LESS" : "READ MORE"
);*/

const Event = ({ event, setCurrentId }) => {
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const location = useLocation();
  
  const delete_an_event=()=>{
      if(window.confirm("Are you sure you want to delete this post? "))
       {
         dispatch(deleteEvent(event._id));
         dispatch(getEvents());
         window.alert("Event deleted successfully!");
         
       }
    }
  const photoURL = event.photo
    ? event.photo
    : "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png";

  const openPost = (e) => {
    // dispatch(getPost(post._id, history));

    history.push(`/events/${event._id}`);
  };

  return (
    <>

      {/* <Card className={classes.card} raised elevation={6} > */}
        <div className="card mx-auto">
          <div onClick={openPost}>
          <CardMedia className={classes.media}  image={event.photo || "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"} title={event.title} />
     
          
            <div className={classes.details}>
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="h2"
                >
                  <i class="fas fa-calendar-day"></i> {event.date}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                <i class="fas fa-map-marker-alt"></i> {event.location}
                </Typography>
              </CardContent>
            </div>
        
            <Typography
              className={classes.title}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {event.title}
            </Typography>
            
          {/* </ButtonBase> */}
         
          </div>
          { admin?.result && (location.pathname ==='/dashboard/events')?(
        <div className="card-footer">
          <Button onClick={() => {setCurrentId(event._id); window.scrollTo(0,0);}} style={{ color: 'black' }} size="small">
            EDIT
          </Button>
            &nbsp; &nbsp;
            <Button size="small" color="secondary" onClick={delete_an_event}>
            DELETE
          </Button>
        </div>):null}
      {/* </Card> */}
            </div>
     
        </>

  );
};

export default Event;
