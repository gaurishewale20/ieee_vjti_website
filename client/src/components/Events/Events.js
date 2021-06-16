import React, { useState, useEffect } from "react";
import {
    Container,
    Grow,
    Grid
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getEvents} from "../../actions/events";
import useStyles from "../../styles";
import EventsHolder from './EventsHolder';

const Events = () => {
    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getEvents());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid
                    container
                    className={classes.mainContainer}
                    justify="space-around"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid item xs={12} sm={9} md={9}>
                        <EventsHolder setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Events;

