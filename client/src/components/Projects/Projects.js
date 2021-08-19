import React, { useState, useEffect } from "react";
import { Container, Grow, Grid, Paper, AppBar, TextField, Button, Typography } from "@material-ui/core";
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getProjects } from "../../actions/projects";
import useStyles from "../../styles";
import ProjectsHolder from './ProjectHolder';
import Pagination from '../PaginationProjects';
//import ScrollToBottom from "../ScrollToBottom/ScrollToBottom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Projects = () => {
    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();
    const query = useQuery();
    const page = query.get('page') || 1;

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getProjects());
    }, [currentId, dispatch]);

    return (
       <div data-aos="fade-up"
       data-aos-duration="1300">
            <Container maxWidth="xl" >
            <div className="heading text-center mt-2">
                    <Typography variant="h3" color="textPrimary" component="h1">
                        Projects
          </Typography>
                </div>
                <div className="text-center">
                    <Typography variant="subtitle1" color="textSecondary" component="h2">
                        A glimpse into some of our projects
          </Typography>
                </div>
                {/* <ScrollToBottom/> */}
                <Grid
                    container
                    className={classes.mainContainer}
                    justify="stretch"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid item xs={12} sm={9} md={9}>
                        <ProjectsHolder setCurrentId={setCurrentId} />
                        <Paper className={classes.pagination} elevation={6}>
                            <Pagination page={page} />
                        </Paper>
                    </Grid>
                </Grid>


            </Container>
            </div>
        
    );
};

export default Projects;

