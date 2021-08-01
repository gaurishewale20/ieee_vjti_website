import React from 'react';
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
                <a className="nav-link active" aria-current="page" href="/">Home</a>
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

         
      </div>
    </nav>
   </header>
  );

  
}

export default Navbar;