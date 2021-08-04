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
  
  return (

    <div>  {admin?.result ? (

      <div>
        <Button component={Link} to="/dashboard/events" variant="contained" size="large" color="secondary">Events</Button>
        <br/>
        
        <Button component={Link} to="/dashboard/projects" variant="contained" size="large" color="secondary">Projects</Button>
      
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

export default Dashboard;