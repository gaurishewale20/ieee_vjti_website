import React, { useState, useEffect } from "react";
import { Container,  Paper, Typography } from "@material-ui/core";
import { useLocation } from 'react-router-dom';
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
        <div data-aos="fade-up"
        data-aos-duration="1300">
            <Container maxWidth="xl">
                <div className="heading text-center mt-2">
                    <Typography variant="h3" color="textPrimary" component="h1">
                        Events
          </Typography>
                </div>
                <div className="text-center mb-4">
                    <Typography variant="subtitle1" color="textSecondary" component="h2">
                        Click on the events to know more.
          </Typography>
                </div>

                <div className="row" data-aos="fade-up" data-aos-duration="1000">
                <EventsHolder setCurrentId={setCurrentId} />
                        <Paper className={classes.pagination} elevation={6}>
                            <Pagination page={page} />
                        </Paper>
                </div>
                


            </Container>
        </div>
    );
};

export default Events;

