import React,{useState,useEffect} from 'react';
import {Button} from '@material-ui/core';
import './Navbar.css';
import IEEE_logo from '../../assets/images/ieee_logo.png';
import * as actionType from '../../constants/actionTypes';
import {useLocation, useHistory, Link} from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import decode from 'jwt-decode';
const Navbar = () => {

  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const logout=()=>{
dispatch({type:'LOGOUT'});
history.push('/');
setAdmin(null);
  }

  useEffect(() => {
    const token = admin?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setAdmin(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  // window.onscroll = function () {
  //   myFunction();
  // };

  // function myFunction() {
  //   if (
  //     document.body.scrollTop > 50 ||
  //     document.documentElement.scrollTop > 50
  //   ) {
  //     // document.getElementById("custom-navbar").classNameName = "custom-navbar-shadow";
  //   } else {
  //     // document.getElementById("custom-navbar").className = "custom-navbar";
  //   }
  // }


  // return (
  //     <div classNameName="navbar" id="navbar">
  //   <div classNameName="flex">
  //     <img src={IEEE_logo} loading="lazy"  alt='ieee_logo' classNameName="m-1" />

  //     <nav>
  //    <ul>
  //         <li><a href="/">Home</a></li>
  //         <li><a href="/">Events</a></li>
  //         <li><a href="/">R&D</a></li>
  //         <li><a href="/">Magazine</a></li>
  //         <li><a href="/">Membership</a></li>
  //         <li><a href="/">Team</a></li>
  //         <li><a href="/">Contact Us</a></li>
  //       </ul>
  //     </nav>
  //   </div>
  // </div>

  // );
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
      <div className="container-fluid">

        
          <a className="navbar-brand" href="/"><img src={IEEE_logo} loading="lazy" alt='ieee_logo' className="m-1 custom-ieee-logo" /></a>
        
    <div className="together"></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/events">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/dashboard">R&D</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/magazine">Magazine</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/membership">Membership</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Contact Us</a>
              </li>

            </ul>
          </div>

          {admin?.result ? (
          <div >
            
        <Button variant="contained"  color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          
          <Button component={Link} to="/admin" variant="contained"  color="primary">Sign In</Button>
        )}
       
      </div>
    </nav>
   </header>
  );

  
}

export default Navbar;