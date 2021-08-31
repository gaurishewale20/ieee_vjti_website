import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import useStyles from "../Events/Event/styles";

const Dashboard = () => {
  const admin = 
    JSON.parse(localStorage.getItem("profile"));

  const classes = useStyles();

  return (
    <div className="pt-6 text-center mt-8" style={{ height: "75vh" }}>
      {" "}
      {admin?.result ? (
        <div>
          <Button
            component={Link}
            to="/dashboard/events"
            variant="contained"
            size="large"
            color="primary"
            style={{ padding: "1em", margin: "1em" }}
            className={classes.button}
          >
            Events
          </Button>
          <br />

          <Button
            component={Link}
            to="/dashboard/projects"
            variant="contained"
            size="large"
            color="primary"
            style={{ padding: "1em", margin: "1em" }}
            className={classes.button}
          >
            Projects
          </Button>
        </div>
      ) : (
        <div className="pt-6 text-center mt-8" style={{ height: "75vh" }}>
          <h1 className="mt-6">Dashboard for Admin</h1>
          <Button
            component={Link}
            to="/admin"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Sign In
          </Button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
