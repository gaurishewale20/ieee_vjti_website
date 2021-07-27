import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Paper, Grid, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { createEvent } from '../../actions/events';
import { getEvents } from "../../actions/events";
import EventsHolder from '../Events/EventsHolder';
import { updateEvent } from '../../api';
import Event from '../Events/Event/Event';
import Form from './Form';

const Dashboard = () => {
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('profile')));
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { events, isLoading } = useSelector((state) => state.events);


  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getEvents());
  }, [currentId, dispatch]);


  return (

    <div style={{ height:"70vh" }}>  {admin?.result ? (

      <div className='px-4'>
        <h1>Dashboard for Events</h1>
        <hr />
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={3} >
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            {isLoading ? <div><CircularProgress /></div> : (
              <Grid className={classes.holderContainer} container alignItems='stretch' spacing={10}>
                {events.map((event) => (
                  <Grid key={event._id} item xs={12} sm={6} md={6} >
                    <Event event={event} setCurrentId={setCurrentId} />
                  </Grid>
                ))}
              </Grid>)}
          </Grid>
        </Grid>
      </div>


    ) : (
      <div>
        <h1>Dashboard for admin</h1>
        <Button component={Link} to="/admin" variant="contained" color="primary">Sign In</Button>
      </div>
    )}
    </div>
  )
}

export default Dashboard;