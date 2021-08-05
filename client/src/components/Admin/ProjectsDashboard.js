import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Paper, Grid, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { getProjects } from "../../actions/projects";
import Project from '../Projects/Project/Project';
import ProjectForm from './ProjectForm';


const ProjectsDashboard = () => {
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('profile')));
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  const projects = useSelector((state) => state.projects);


  useEffect(() => {
    window.scrollTo(0, 0);
    if(!projects.length)
    dispatch(getProjects());
  }, [currentId, dispatch]);

  

  return (

    <div>  {admin?.result ? (
        <div className='px-4 '>
        <h1 className="text-center">Dashboard for Projects</h1>
        <hr />
        <Grid  container justify="space-between" alignItems="stretch" spacing={3} style={{paddingBottom:'1em'}}>
          <Grid item xs={12} sm={4} md={4}>
            <ProjectForm currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            { !projects.length  ? <div><CircularProgress /></div> : (
              <Grid className={classes.projContainer} container alignItems='stretch' spacing={10}>
                {projects.map((project) => (
                  <Grid key={project._id} item xs={12} sm={6} md={6} >
                    <Project project={project} setCurrentId={setCurrentId} />
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

export default ProjectsDashboard;