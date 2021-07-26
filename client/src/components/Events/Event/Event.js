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
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import ExpandLessIcon from '@material-ui/icons/ExpandLess';

//import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
//import DeleteIcon from '@material-ui/icons/Delete';
//import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
//import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from "react-redux";
//import moment from 'moment';
//import FavoriteIcon from '@material-ui/icons/Favorite';
//import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
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

      <Card className={classes.card} raised elevation={6} onClick={openPost}>
        {/* <CardActionArea className={classes.notwhite}> */}
        {/* <ButtonBase
          component="span"
          name="test"
          className={classes.cardAction}
          onClick={openPost}
        > */}
          {/* <CardActionArea className={classes.notwhite}>
            <div>
              <img src={photoURL} className={classes.card_img} />
            </div>
          </CardActionArea> */}
          <CardMedia className={classes.media}  image={event.photo || "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"} title={event.title} />
     
          {/* </ButtonBase>
          <ButtonBase
          component="span"
          name="test"
          className={classes.cardAction}
          onClick={openPost}
        > */}
          
            <div className={classes.details}>
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="h2"
                >
                  {event.date}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  {event.location}
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
          { admin?.result && (location.pathname ==='/dashboard')?(
        <div>
          <Button onClick={() => {setCurrentId(event._id); window.scrollTo(0,0);}} style={{ color: 'black' }} size="small">
            EDIT
          </Button>
            &nbsp; &nbsp;
            <Button size="small" color="secondary" onClick={delete_an_event}>
            DELETE
          </Button>
        </div>):null}
           
      </Card>
  );
};

export default Event;
