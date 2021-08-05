import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Paper, Grid, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { getEvents } from "../../actions/events";
import Event from '../Events/Event/Event';
import Form from './Form';


const EventsDashboard = () => {
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('profile')));
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { events, isLoading } = useSelector((state) => state.events);


  useEffect(() => {
    window.scrollTo(0, 0);
    if(!events.length)
    dispatch(getEvents());
  }, [currentId, dispatch]);

  

  return (

    <div>  {admin?.result ? (
        <div className='px-4'>
        <h1 className=" text-center">Dashboard for Events</h1>
        <hr />
        <Grid container justify="space-between" alignItems="stretch" spacing={3} style={{paddingBottom:'1em'}}>
          <Grid item xs={12} sm={4} md={4} >
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
      <div className='pt-6 text-center mt-8' style={{ height:"70vh" }}>
        <h1 className='mt-6'>Dashboard for admin</h1>
        <Button component={Link} to="/admin" variant="contained" color="primary">Sign In</Button>
      </div>
    )}
    </div>
  )
}

export default EventsDashboard;