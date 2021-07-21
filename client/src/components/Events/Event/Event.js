import React, { useState } from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import ExpandLessIcon from '@material-ui/icons/ExpandLess';

//import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
//import DeleteIcon from '@material-ui/icons/Delete';
//import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
//import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
//import moment from 'moment';
//import FavoriteIcon from '@material-ui/icons/Favorite';
//import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {useLocation} from 'react-router-dom';
//import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';



/*const handleChange = () => (
  rm == "READ MORE" ? "READ LESS" : "READ MORE"
);*/

const Event = ({ event, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const location = useLocation();

//   const Likes = () => {
//     if (post.likes.length > 0) {
//       return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
//         ? (
//           <><FavoriteIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}</>
//         ) : (
//           <><FavoriteBorderIcon fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
//         );
//     }

//     return <><FavoriteBorderIcon fontSize="small" />&nbsp;Like</>;
//   };

//   const deleteuserPost=()=>{
//     if(window.confirm("Are you sure you want to delete this post? "))
//      {
//        dispatch(deletePost(post._id));
//        window.alert("Post deleted successfully!");
//      }
//   }
const photoURL = (event.photo)? event.photo :'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png';
    
const openPost = (e) => {
  // dispatch(getPost(post._id, history));

  history.push(`/events/${event._id}`);
};


  return (
    <div className="outer">
    <Card className={classes.card} raised elevation={6}>
    
    <CardActionArea className={classes.notwhite}>
    <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
      > 
      {/* <CardMedia component="img" className={classes.media} image={photoURL} /> */}
      <img src={photoURL} className="cardImage" />
     
    
      
      
      
      {/* <h3>{event.title}</h3> */}
      {/* <h4>{event.date}</h4> */}
      </ButtonBase>
      </CardActionArea>
      <CardContent>
      <div className={classes.overlay}>
        <Typography variant="h6">{event.title}</Typography>
        <Typography variant="body2">{event.date}</Typography>
      </div>
      </CardContent>
     
      </Card>
      </div>
    
    
  );
};

export default Event;
