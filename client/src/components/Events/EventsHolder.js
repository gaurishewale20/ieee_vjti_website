import React from 'react';
import { useSelector } from 'react-redux';
// import useStyles from "../../styles";
import Event from './Event/Event';
import Loader from '../Loader/Loader';
const EventsHolder = ({ setCurrentId }) => {
  const { events, isLoading }= useSelector((state) => state.events);
  // const classes = useStyles();

  if(!events.length && !isLoading) return 'No Events';

  return (
    isLoading ? <center><Loader /></center> : (
      <>
      
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

