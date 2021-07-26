import React, { useState, useEffect } from 'react';
//import {Link} from "react-router-dom";
import { TextField, Button, Typography, Paper,Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { createEvent,updateEvent } from '../../actions/events';
//import { getEvents} from "../../actions/events";
//import EventsHolder from '../Events/EventsHolder';


const Form = ({currentId,setCurrentId}) => {
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('profile')));
  const [eventData, setEventData] = useState({ title: '', location: '', date: '', event_desc: '', photo: '' });
 // const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  //console.log(" This is from Form "+state.events);
  const t = useSelector((state)=>state.events);
  console.log(t);
  const event = currentId ? t.events.find((msg) => msg._id === currentId) : null;

  useEffect(() => {
    if (event) setEventData(event);
  }, [event]);

  const clear = () => {
    setCurrentId(0);
    setEventData({ title: '', location: '', date: '', event_desc: '', photo: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(currentId===0)
        dispatch(createEvent({ ...eventData }));
    else
        dispatch(updateEvent(currentId,{ ...eventData}));
    clear();
  };

  return (
   
       
       <Paper className={classes.paper} elevation={6}>
         <form autoComplete="off" className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
           <TextField name="title" required variant="outlined" label="Title" fullWidth value={eventData.title} onChange={(e) => setEventData({ ...eventData, title: e.target.value })} />
           <TextField name="location" required variant="outlined" label="Location" fullWidth value={eventData.location} onChange={(e) => setEventData({ ...eventData, location: e.target.value })} />
           <TextField name="date" required variant="outlined" label="Date" fullWidth value={eventData.date} onChange={(e) => setEventData({ ...eventData, date: e.target.value })} />
           <TextField name="event_desc" required variant="outlined" label="Description" fullWidth multiline rows={6} value={eventData.event_desc} onChange={(e) => setEventData({ ...eventData, event_desc: e.target.value })} />
           <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setEventData({ ...eventData, photo: base64 })} /></div>
           <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
           <Button className={classes.buttonClear} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
         </form>
       </Paper>)
}

export default Form;