import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { TextField, Button, Typography, Paper,Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { createEvent } from '../../actions/events';
import { getEvents} from "../../actions/events";
import EventsHolder from '../Events/EventsHolder';

const Dashboard = () => {
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('profile')));
  const [eventData, setEventData] = useState({ title: '', location: '', date: '', event_desc: '', photo: '' });
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  const event = null;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getEvents());
    if (event) setEventData(event);
  }, [event,dispatch]);

  const clear = () => {
    //   setCurrentId(0);
    setEventData({ title: '', location: '', date: '', event_desc: '', photo: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(createEvent({ ...eventData }));
    clear();
  };

  return (
   
    <div>  {admin?.result ? (
       
       <div className='px-4'>
     <h1>Dashboard for Admin</h1>
     <hr />
     <Grid container justify="space-between" alignItems="stretch" spacing={3}>
     <Grid item xs={12} sm={3} >
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
       </Paper>
     </Grid>
     <Grid item xs={12} sm={8} md={8}>
           <EventsHolder setCurrentId={setCurrentId} />
     </Grid>
     </Grid>
     </div>
      
       
       ) : (
         <div>
        <h1>Dashboard for admin</h1>
         <Button component={Link} to="/admin" variant="contained"  color="primary">Sign In</Button>
        </div>
       )}
       </div>
  )
}

export default Dashboard;