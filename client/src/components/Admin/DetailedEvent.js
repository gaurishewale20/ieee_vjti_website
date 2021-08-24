import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation, useHistory } from 'react-router-dom';
import {
  Paper,
  Typography,
  Grid,
  Button,
  Divider,
} from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { deleteEvent, getEvent } from '../../actions/events';
import useStyles from '../EventDetails/styles';
import Loader from '../Loader/Loader';
import Form from './Form';



const DetailedEvent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('profile')));
  const { event, events, isLoading } = useSelector((state) => state.events);
  const location = useLocation();
  const history = useHistory();
  const [currentId, setCurrentId] = useState(0);

  const delete_an_event = () => {
    if (window.confirm("Are you sure you want to delete this post? ")) {
      dispatch(deleteEvent(event._id));
      history.push('/dashboard/events');
      window.alert("Event deleted successfully!");

    }
  }
  useEffect(() => {
    dispatch(getEvent(id));
  }, [id])

  return (
  

    <div>  {admin?.result ? (
      <div className='px-4'>
        <h1 className=" text-center">Dashboard for Events</h1>
        <Button component={Link} to="/dashboard/events" variant="contained" color="primary" className={classes.button}>All Events</Button>
        <hr />
        <Grid container justify="space-between" alignItems="stretch" spacing={3} style={{ paddingBottom: '1em' }}>
          <Grid item xs={12} sm={5} md={4} >
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={7} md={8}>
            {isLoading ? <center><Loader /></center> : (
              <Paper
                className={classes.dashpaper}
                style={{ padding: "20px", borderRadius: "15px", minHeight: "70vh" }}
                elevation={6}
              >

                <div className={classes.card}>
                  <div className={classes.section}>
                    <Typography variant="h3" component="h2">
                      { event?.title}
                    </Typography>

                    <Divider style={{ margin: "20px 0" }} />
                    <Typography variant="body2" color="textSecondary" component="h2">
                      <i class="fas fa-calendar-day"></i> {event?.date}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                      <i class="fas fa-map-marker-alt"></i> {event?.location}
                    </Typography>
                    <Divider style={{ margin: "20px 0" }} />

                    <Typography
                      className={classes.eventmsg}
                      gutterBottom
                      variant="body1"
                      component="p"
                    >
                      {event?.event_desc}
                    </Typography>

                    <Typography
              className={classes.reg_link}
              gutterBottom
              variant="body1"
              component="h2"
            >
              <a href={event?.reg_link} target="_blank">Link to Register!</a>
           
            </Typography>
                  </div>
                  <div className={classes.imageSection}>
                    <img
                      className={classes.media}
                      src={
                        event?.photo ||
                        "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                      }
                      alt={event?.title}
                    />
                  
                  {admin?.result && (location.pathname === `/dashboard/events/${event?._id}`) ? (
                    <div className="card-footer">
                      <Button onClick={() => { setCurrentId(event?._id); window.scrollTo(0, 0); }} style={{ color: 'black' }} size="small">
                        EDIT
                      </Button>
                      &nbsp; &nbsp;
                      <Button size="small" color="secondary" onClick={delete_an_event}>
                        DELETE
                      </Button>
                    </div>) : null}
                    </div>
                    </div>
                </Paper>
            )}
              </Grid>
        </Grid>
      </div>
    ) : (
      <div className='pt-6 text-center mt-8' style={{ height: "75vh" }}>
        <h1 className='mt-6'>Dashboard for Admin</h1>
        <Button component={Link} to="/admin" variant="contained" color="primary">Sign In</Button>
      </div>
    )}
    </div>
  )
}

export default DetailedEvent;