import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import IEEE_logo from '../../assets/images/ieee_logo.png';

const Navbar = () => {

  
  
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
                {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                <NavLink exact className="nav-link nvlink" activeClassName="active" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" aria-current="page" href="/events">Events</a> */}
                <NavLink exact className="nav-link nvlink" activeClassName="active" to="/events">Events</NavLink>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" aria-current="page" href="/rd">R&D</a> */}
                <NavLink exact className="nav-link nvlink" activeClassName="active" to="/rd">R&D</NavLink>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" aria-current="page" href="/magazine">Magazine</a> */}
                <NavLink exact className="nav-link nvlink" activeClassName="active" to="/magazine">Magazine</NavLink>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" aria-current="page" href="/membership">Membership</a> */}
                <NavLink exact className="nav-link nvlink" activeClassName="active" to="/membership">Membership</NavLink>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" aria-current="page" href="/teampage">Team</a> */}
                <NavLink exact className="nav-link nvlink" activeClassName="active" to="/teampage">Team</NavLink>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" aria-current="page" href="/contactus">Contact Us</a> */}
                <NavLink exact className="nav-link nvlink" activeClassName="active" to="/contactus">Contact Us</NavLink>
              </li>

            </ul>
          </div>

         
      </div>
    </nav>
   </header>
  );

  
}

export default Navbar;