import React, { useState, useEffect } from 'react';

import { TextField, Button, Typography, Paper,Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { createProject,updateProject } from '../../actions/projects';
//import { getEvents} from "../../actions/events";
//import EventsHolder from '../Events/EventsHolder';


const ProjectForm = ({currentId,setCurrentId}) => {
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('profile')));
  const [projectData, setProjectData] = useState({ title: '', project_desc: '', github_link: '', year: ''});
 // const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  //console.log(" This is from Form "+state.events);
  const t = useSelector((state)=>state.projects);
  console.log(t);
  const project = currentId ? t.projects.find((msg) => msg._id === currentId) : null;

  useEffect(() => {
    if (project) setProjectData(project);
  }, [project]);

  const clear = () => {
    setCurrentId(0);
    setProjectData({ title: '', project_desc: '', github_link: '', year: '' });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    if(currentId===0)
        dispatch(createProject({ ...projectData }));
    else
        dispatch(updateProject(currentId,{ ...projectData}));
    clear();
  };

  return (
   
       
       <Paper className={classes.paper} elevation={6}>
         <form autoComplete="off" className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
           <TextField name="title" required variant="outlined" label="Title" fullWidth value={projectData.title} onChange={(e) => setProjectData({ ...projectData, title: e.target.value })} />
           <TextField name="year" required variant="outlined" label="Year" fullWidth value={projectData.year} onChange={(e) => setProjectData({ ...projectData, year: e.target.value })} />
           <TextField name="github_link" variant="outlined" label="Github Link" fullWidth value={projectData.github_link} onChange={(e) => setProjectData({ ...projectData, github_link: e.target.value })} />
           <TextField name="event_desc" required variant="outlined" label="Project Description" fullWidth multiline rows={6} value={projectData.project_desc} onChange={(e) => setProjectData({ ...projectData, project_desc: e.target.value })} />
           <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
           <Button className={classes.buttonClear} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
         </form>
       </Paper>)
}

export default ProjectForm;