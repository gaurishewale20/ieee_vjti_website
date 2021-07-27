import React, { useState, useEffect } from "react";
import {
  Button,
  Typography,
  Paper,
  Grid,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import useStyles from "../styles";
// import bcrypt from "bcryptjs";
import Input from "./Input";
import {signin} from '../../../actions/admin';

const initialState = { email: " ", password: " " };
const SignIn = () => {
  const [adminData, setAdminData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(adminData);

    dispatch(signin(adminData,history));
  };

  const handleChange = (e) => {
    setAdminData({...adminData, [e.target.name]:e.target.value })
  };
  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const hp = await createPassword();
  //     setAdminData({email: adminData.email, password: hp});
  // // console.log(typeof adminData.email)
  // //     console.log(typeof adminData.password);
  // //     console.log(typeof hp);
  //   //   bcrypt
  //   // .compare(adminData.password, hp)
  //   // .then(res => {
  //   //   console.log(res);
  //   // })
  //   // .catch(err => console.error(err.message));
  //   console.log(`hp is ${hp}`);
  //   console.log(`adminData.password is ${adminData.password}`);

  //   };

  //   const createPassword = async() =>{
  //     const hashedPassword = await bcrypt.hash(adminData.password, 12);
  //     console.log(`hashedpassword is ${hashedPassword}`);
  //     return hashedPassword;

  //   }

  return (
    <div className="px-4" style={{ height:"70vh" }}>
      <h1>Login Section for Admin</h1>
      <hr />
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <form
              autoComplete="off"
              className={`${classes.root} ${classes.form}`}
              onSubmit={handleSubmit}
            >
              <Input
                name="email"
                label="Email"
                fullWidth
                type="email"
                handleChange={handleChange}
              />
              <Input
                name="password"
                label="Password"
                fullWidth
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
                handleChange={handleChange}
              />
              <Button
                className={classes.buttonSubmit}
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                fullWidth
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;

// onChange={(e) => setAdminData({ ...adminData, email: e.target.value })}
// onChange={(e) => setAdminData({ ...adminData, password: e.target.value}) }
