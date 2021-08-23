import React from 'react';
// import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from "../../styles";
import Event from './Event/Event';
import Loader from '../Loader/Loader';
const EventsHolder = ({ setCurrentId }) => {
  const { events, isLoading }= useSelector((state) => state.events);
  const classes = useStyles();

  if(!events.length && !isLoading) return 'No Events';

  return (
    isLoading ? <center><Loader /></center> : (
      <>
         {/* <ScrollToBottom/> */}
      {/* <Grid className={classes.holderContainer} container spacing={6}>
        {events.map((event) => (
          <Grid key={event._id} item xs={12} sm={6} md={4} >
            <Event event={event} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid> */}
              {events.map((event) => (
                <div className="col-md-6 col-xl-4">
                   <Event event={event} setCurrentId={setCurrentId} />
                </div>
        ))}
      </>
    )
  );
};

export default EventsHolder;

