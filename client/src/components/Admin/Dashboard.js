import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createEvent} from '../../actions/events';

const Dashboard = () =>{
    const [eventData, setEventData] = useState({ title: '', location: '', date: '', event_desc:'',photo: '' });

    const dispatch = useDispatch();
    // const classes = useStyles();
    const event = null;
  
    useEffect(() => {
      if (event) setEventData(event);
    }, [event]);
  
    const clear = () => {
    //   setCurrentId(0);
      setEventData({ title: '', location: '', date: '', event_desc:'',photo: '' });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
        dispatch(createEvent({ ...eventData}));
        clear();
    };
  
    return (
    <div> 
        <h1>Dashboard for admin</h1>
        <hr/>
        <Paper >
      <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField name="title" required variant="outlined" label="Title" fullWidth value={eventData.title} onChange={(e) => setEventData({ ...eventData, title: e.target.value })} />
        <TextField name="location" required variant="outlined" label="Location" fullWidth value={eventData.location} onChange={(e) => setEventData({ ...eventData, location: e.target.value })} />
        <TextField name="date" required variant="outlined" label="Date" fullWidth value={eventData.date} onChange={(e) => setEventData({ ...eventData, date: e.target.value })} />
        <TextField name="event_desc" required variant="outlined" label="Description" fullWidth multiline rows={6} value={eventData.message} onChange={(e) => setEventData({ ...eventData, event_desc: e.target.value })} />
        <div ><FileBase type="file" multiple={false} onDone={({ base64 }) => setEventData({ ...eventData, photo: base64 })} /></div>
        <Button  variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
    </div>)

}

export default Dashboard;