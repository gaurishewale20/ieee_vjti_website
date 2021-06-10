import React from 'react';
import './Navbar.css';
import IEEE_logo from '../../assets/images/ieee_logo.png';

const Navbar = () => {


  // window.onscroll = function () {
  //   myFunction();
  // };

  // function myFunction() {
  //   if (
  //     document.body.scrollTop > 50 ||
  //     document.documentElement.scrollTop > 50
  //   ) {
  //     // document.getElementById("custom-navbar").className = "custom-navbar-shadow";
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
      <div className="container-fluid">

        <div>
          <a className="navbar-brand" href="#"><img src={IEEE_logo} loading="lazy" alt='ieee_logo' className="m-1 custom-ieee-logo" /></a>
        </div>
        <div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">R&D</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Magazine</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Membership</a>
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
      </div>
    </nav>
  );
}

export default Navbar;