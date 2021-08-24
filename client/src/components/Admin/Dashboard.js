import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const Dashboard = () => {
  const [admin, setAdmin] = useState(
    JSON.parse(localStorage.getItem("profile"))
  );

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
            color="secondary"
            style={{ padding: "1em", margin: "1em" }}
          >
            Events
          </Button>
          <br />

          <Button
            component={Link}
            to="/dashboard/projects"
            variant="contained"
            size="large"
            color="secondary"
            style={{ padding: "1em", margin: "1em" }}
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
          >
            Sign In
          </Button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
