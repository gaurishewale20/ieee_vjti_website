import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Project from './Project/Project';
import useStyles from '../../styles';


const ProjectsHolder = ({ setCurrentId }) => {
  const projects = useSelector((state) => state.projects);
  const classes = useStyles();

  return (
    !projects.length ? <CircularProgress /> : (
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

