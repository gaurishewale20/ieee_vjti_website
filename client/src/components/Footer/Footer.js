import React,{useState,useEffect} from "react";

import { useLocation, useHistory, Link } from "react-router-dom";
import "./Footer.css";
import ieee_smallest_logo from "../../assets/images/ieee_smallest.png";


import { useDispatch } from "react-redux";
import decode from "jwt-decode";

const Footer = () => {
  const [admin, setAdmin] = useState(
    JSON.parse(localStorage.getItem("profile"))
  );
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setAdmin(null);
  };

  useEffect(() => {
    const token = admin?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setAdmin(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  return (
    <>
      <section className="footer_section bg-footer">
        <footer className="footer">
          <div className="container grid grid-3">
            <div>
              <h1>IEEE VJTI</h1>
              <div className="line1">
                <a href="/">
                <img
                  src={ieee_smallest_logo}
                  alt="ieee_logo"
                  loading="lazy"
                  id="ieee_smallest"
                />
                </a>
               
              </div>
            </div>
            <div className="info">
              <h3>
                <a href="/membership"> Become a Member </a>
              </h3>
              <p>
                Get notified with the latest updates in the technical world,
                articles, seminars and workshops.{" "}
              </p>
            </div>
            <div className="social">
              <h3>Connect With Us</h3>
              <a
                href="https://www.linkedin.com/company/ieee-vjti"
                target="_blank"
              >
                <i className="fab fa-linkedin-in fa-2x"></i>
              </a>
              <a href="https://www.instagram.com/ieeevjti/" target="_blank">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a
                href={`mailto:ieeevjtiofficial@gmail.com?Subject=Message%20for%20IEEE%20VJTI`}
              >
                <i className="fas fa-envelope-square fa-2x"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCXkEZSsh_RWiBfrJIPY27vg"
                target="_blank"
              >
                <i className="fab fa-youtube fa-2x"></i>
              </a>

              <p>
                <a href="https://issuu.com/ieeevjti" target="_blank">
                  Issuu
                </a>
                <br />
                <a href="https://linktr.ee/ieeevjti" target="_blank">
                  LinkTree
                </a>
              </p>
            </div>
          </div>
          <hr className="horizontal_line" />
          <p className="text-center">Copyright &copy;IEEE VJTI 2021</p>
        </footer>

        
        {admin?.result ? (
          <div>
            
            <div className="link py-2">
          <a href="/" onClick={logout}>Logout</a>
              </div>

               
            <div className="link">
          <a href="/dashboard">Dashboard</a>
              </div>
          </div>
        
        ) : (
            <div>
            
            <div className="link">
          <a href="/admin">Admin</a>
              </div>
          </div>
         
          
          
          
        )}
      </section>
    </>
  );
};

export default Footer;
