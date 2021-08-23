import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import Project from './Project/Project';
import useStyles from '../../styles';


const ProjectsHolder = ({ setCurrentId }) => {
  const { projects, isLoading } = useSelector((state) => state.projects);
  const classes = useStyles();

  if(!projects.length && !isLoading) return 'No Projects';

  return (
    isLoading ? <center><Loader /></center> : (
      <Grid className={classes.projectsContainer} container alignItems="stretch" spacing={3}>
        {projects.map((project) => (
          <Grid key={project._id} item xs={12} sm={12} md={12}>
            <Project project={project} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default ProjectsHolder;

