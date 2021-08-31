import React, { useState } from "react";
import {
  Button,
  Grid,
  Paper
  
} from "@material-ui/core";
import { useDispatch} from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import useStyles from "../styles";
// import bcrypt from "bcryptjs";
import Input from "./Input";
import { signin } from "../../../actions/admin";

const initialState = { email: " ", password: " " };
const SignIn = () => {
  const admin = 
    JSON.parse(localStorage.getItem("profile"));
  const [adminData, setAdminData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(adminData);

    dispatch(signin(adminData, history));
  };

  const handleChange = (e) => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  };

  return (
    <div className="px-4 text-center" style={{ height: "75vh" }}>
      {admin?.result ? (
        <Redirect to="/"/>
        ):(<div>
        <h1> Login Section for Admin </h1> <hr />
        <Grid container justify="center" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={9} md={6} lg={3}>
            <Paper className={classes.paper}>
              <form
                autoComplete="off"
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
              >
                <Input
                  name="email"
                  label="Email"
                  // fullWidth
                  type="email"
                  handleChange={handleChange}
                />{" "}
                <Input
                  name="password"
                  label="Password"
                  // fullWidth
                  type={showPassword ? "text" : "password"}
                  handleShowPassword={handleShowPassword}
                  handleChange={handleChange}
                />{" "}
                <Button
                  className={classes.buttonSubmit}
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                  fullWidth
                >
                  Submit{" "}
                </Button>{" "}
              </form>{" "}
            </Paper>{" "}
          </Grid>{" "}
        </Grid>{" "}
        </div>)}
    </div>
  );
};

export default SignIn;


