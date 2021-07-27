import React, { useState, useEffect } from "react";
import { Container, Grow, Grid, Paper, AppBar, TextField, Button, Typography } from "@material-ui/core";
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getEvents } from "../../actions/events";
import useStyles from "../../styles";
import EventsHolder from './EventsHolder';
import Pagination from '../Pagination';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Events = () => {
    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();
    const query = useQuery();
    const page = query.get('page') || 1;

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getEvents());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container maxWidth="xl">
                <div className="heading text-center">
                    <Typography variant="h3" color="textPrimary" component="h1">
                        Events
          </Typography>
                </div>
                <div className="text-center mb-4">
                    <Typography variant="subtitle1" color="textSecondary" component="h2">
                        Click on the events to know more.
          </Typography>
                </div>

                <Grid
                    container
                    className={classes.mainContainer}
                    justify="stretch"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid item xs={12} sm={6} md={6}>

                        <EventsHolder setCurrentId={setCurrentId} />
                        <Paper className={classes.pagination} elevation={6}>
                            <Pagination page={page} />
                        </Paper>
                    </Grid>
                </Grid>


            </Container>
        </Grow>
    );
};

export default Events;

