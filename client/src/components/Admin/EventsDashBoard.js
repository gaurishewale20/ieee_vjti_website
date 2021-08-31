import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Paper, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { getEvents } from "../../actions/events";
import Event from "../Events/Event/Event";
import Form from "./Form";
import Pagination from "../Pagination";
import Loader from "../Loader/Loader";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const EventsDashboard = () => {
  const admin = 
    JSON.parse(localStorage.getItem("profile")
  );
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { events, isLoading } = useSelector((state) => state.events);
  const query = useQuery();
  const page = query.get("page") || 1;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!events.length) dispatch(getEvents());
  }, [currentId, dispatch, events.length]);

  return (
    <div>
      {" "}
      {admin?.result ? (
        <div className="px-4">
          <h1 className="text-center mt-3 pb-2">Dashboard for Events</h1>
          <Button
            component={Link}
            to="/dashboard/projects"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Projects Dashboard
          </Button>

          <hr />
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
            style={{ paddingBottom: "1em" }}
          >
            <Grid item xs={12} sm={4} md={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              {isLoading ? (
                <center>
                  <Loader />
                </center>
              ) : (
                <Grid
                  className={classes.holderContainer}
                  container
                  alignItems="stretch"
                  spacing={10}
                >
                  {events.map((event) => (
                    <Grid key={event._id} item xs={12} sm={6} md={6}>
                      <Event event={event} setCurrentId={setCurrentId} />
                    </Grid>
                  ))}
                </Grid>
              )}
              <Paper className={classes.pagination} elevation={6}>
                <Pagination page={page} />
              </Paper>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div className="pt-6 text-center mt-8" style={{ height: "75vh" }}>
          <h1 className="mt-6">Dashboard for Admin</h1>
          <Button
            component={Link}
            to="/admin"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        </div>
      )}
    </div>
  );
};

export default EventsDashboard;
