import React, { useState, useEffect } from "react";
import { Container, Grow, Grid, Paper, AppBar, TextField, Button, Typography } from "@material-ui/core";
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getProjects } from "../../actions/projects";
import useStyles from "../../styles";
import ProjectsHolder from './ProjectHolder';

const Projects = () => {
    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getProjects());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid
                    container
                    className={classes.mainContainer}
                    justify="stretch"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid item xs={12} sm={9} md={9}>
                        <ProjectsHolder setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>


            </Container>
        </Grow>
    );
};

export default Projects;

