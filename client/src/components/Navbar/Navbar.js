import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './Navbar.css';
import IEEE_logo from '../../assets/images/ieee_logo.png';

const NavComponent = () => {

  return (
    <>
      <Navbar collapseOnSelect fixed='top' expand='lg' bg='light' variant='light'>
        {/* <div className="container-fluid">
          </div> */}
        {/* <Container fluid > */}
        <div className="container-fluid">
          
            <a className="navbar-brand" href="/"><img src={IEEE_logo} loading="lazy" alt='ieee_logo' className="m-1 custom-ieee-logo" /></a>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            
            <Navbar.Collapse id='responsive-navbar-nav' className="justify-content-end">
              <Nav>
                <Nav.Link eventKey="1"><Link activeClassname="active" to='/' className="nav-link nvlink">Home</Link></Nav.Link>
                <Nav.Link eventKey="2"><Link activeClassName="active" to='/events' className="nav-link nvlink">Events</Link></Nav.Link>
                <Nav.Link eventKey="3"><Link activeClassName="active" to='/rd' className="nav-link nvlink">R&D</Link></Nav.Link>
                <Nav.Link eventKey="4"><Link activeClassName="active" to='/magazine' className="nav-link nvlink">Magazine</Link></Nav.Link>
                <Nav.Link eventKey="5"><Link activeClassName="active" to='/teampage' className="nav-link nvlink">Team</Link></Nav.Link>
                <Nav.Link eventKey="6"><Link activeClassName="active" to='/contactus' className="nav-link nvlink">Contact Us</Link></Nav.Link>

              </Nav>
            </Navbar.Collapse>
            
        </div>
      </Navbar>
    </>
  );


  // return (
  //   <header>
  //   <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
  //     <div className="container-fluid">


  //         <a className="navbar-brand" href="/"><img src={IEEE_logo} loading="lazy" alt='ieee_logo' className="m-1 custom-ieee-logo" /></a>

  //   <div className="together"></div>
  //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //         <span className="navbar-toggler-icon"></span>
  //       </button>


  //         <div className="collapse navbar-collapse" id="navNav">
  //           <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
  //             <li className="nav-item nav-link">
  //               {/* <a className="nav-link" aria-current="page" href="/">Home</a> */}
  //               <NavLink exact className="nvlink" activeClassName="active" to="/">Home</NavLink>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link" aria-current="page" href="/events">Events</a>
  //               {/* <NavLink exact className="nav-link" activeClassName="active" to="/events">Events</NavLink> */}
  //             </li>
  //             <li className="nav-item">
  //               {/* <a className="nav-link" aria-current="page" href="/rd">R&D</a> */}
  //               <NavLink exact className="nav-link" activeClassName="active" to="/rd">R&D</NavLink>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link" aria-current="page" href="/magazine">Magazine</a>
  //               {/* <NavLink exact className="nav-link" activeClassName="active" to="/magazine">Magazine</NavLink> */}

  //             </li>
  //             <li className="nav-item">
  //               {/* <a className="nav-link" aria-current="page" href="/membership">Membership</a> */}
  //               <NavLink exact className="nav-link nvlink" activeClassName="active" to="/membership">Membership</NavLink>
  //             </li>
  //             <li className="nav-item">
  //               {/* <a className="nav-link" aria-current="page" href="/teampage">Team</a> */}
  //               <NavLink exact className="nav-link nvlink" activeClassName="active" to="/teampage">Team</NavLink>
  //             </li>
  //             <li className="nav-item nav-link">
  //               {/* <a className="nav-link" aria-current="page" href="/contactus">Contact Us</a> */}
  //               <NavLink  exact className="nvlink" activeClassName="active"  to="/contactus" >Contact Us</NavLink>
  //             </li>

  //           </ul>
  //         </div>


  //     </div>
  //   </nav>
  //  </header>
  // );


}

export default NavComponent;