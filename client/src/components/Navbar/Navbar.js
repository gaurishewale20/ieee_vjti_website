import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';
import './Navbar.css';
import IEEE_logo from '../../assets/images/ieee_logo.png';

const NavComponent = () => {

  return (
    <>
      <Navbar collapseOnSelect fixed='top' expand='lg' className="navv" variant="light" >
        
        <div className="container-fluid">
          
            <a className="navbar-brand" href="/"><img src={IEEE_logo} loading="lazy" alt='ieee_logo' className="m-1 custom-ieee-logo" /></a>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            
            <Navbar.Collapse id='responsive-navbar-nav' className="justify-content-end">
              <Nav>
                <Nav.Link eventKey="1"><Link activeClassname="active" to='/' className="nav-link nvlink" onClick={() => window.scrollTo( { top: 0, behavior: 'smooth' } )} >Home</Link></Nav.Link>
                <Nav.Link eventKey="2"><Link activeClassName="active" to='/events' className="nav-link nvlink" onClick={() => window.scrollTo( { top: 0, behavior: 'smooth' } )}>Events</Link></Nav.Link>
                <Nav.Link eventKey="3"><Link activeClassName="active" to='/rd' className="nav-link nvlink" onClick={() => window.scrollTo( { top: 0, behavior: 'smooth' } )}>R&D</Link></Nav.Link>
                <Nav.Link eventKey="4"><Link activeClassName="active" to='/magazine' className="nav-link nvlink" onClick={() => window.scrollTo( { top: 0, behavior: 'smooth' } )}>Magazine</Link></Nav.Link>
                <Nav.Link eventKey="5"><Link activeClassName="active" to='/membership' className="nav-link nvlink" onClick={() => window.scrollTo( { top: 0, behavior: 'smooth' } )}>Membership</Link></Nav.Link>
                <Nav.Link eventKey="6"><Link activeClassName="active" to='/teampage' className="nav-link nvlink" onClick={() => window.scrollTo( { top: 0, behavior: 'smooth' } )}>Team</Link></Nav.Link>
                <Nav.Link eventKey="7"><Link activeClassName="active" to='/contactus' className="nav-link nvlink" onClick={() => window.scrollTo( { top: 0, behavior: 'smooth' } )}>Contact Us</Link></Nav.Link>

              </Nav>
            </Navbar.Collapse>
            
        </div>
      </Navbar>
    </>
  );

}

export default NavComponent;