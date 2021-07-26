import React, { useEffect } from "react";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getEvent } from "../../actions/events";
import useStyles from "./styles";

const EventDetails = () => {
  const { event, events, isLoading } = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getEvent(id));
  }, [id]);

  const openEvent = (_id) => history.push(`/events/${_id}`);
  if (!event) return null;
  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  // const photoURL = (event.photo)? event.photo:'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png';
  return (
    <Paper
      className={classes.paper}
      style={{ padding: "20px", borderRadius: "15px" }}
      elevation={6}
    >
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {event.title}
          </Typography>

          <Divider style={{ margin: "20px 0"}} />
          <Typography variant="body2" color="textSecondary" component="h2" >
            {event.date}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            {event.location}
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
      
            <Typography className={classes.eventmsg} gutterBottom variant="body1" component="p">
              {event.event_desc}
            </Typography>
         
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={
              event.photo ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt={event.title}
          />
        </div>
      </div>
    </Paper>
  );
};

export default EventDetails;
