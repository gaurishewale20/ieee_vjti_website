import React from 'react';
import './Footer.css';
import ieee_smallest_logo from '../../assets/images/ieee_smallest.png';

const Footer = () => {
    return (
        <>
            <section className="footer_section bg-footer">
            <footer className="footer">
                <div className="container grid grid-3 ">
                    <div>
                        <h1>IEEE VJTI</h1>
                        <div className="line1">
                            <img src={ieee_smallest_logo} alt='ieee_logo' loading="lazy" id="ieee_smallest" />
                        </div>
                    </div>
                    <div className="info">
                        <h3>
                            <a href="/"> Become a Member </a>
                        </h3>
                        <p>Get notified with the latest updates in the technical world, articles, seminars and workshops. </p>
                    </div>
                    <div className="social">

                        <h3 >Connect With Us</h3>
                        <a href="https://www.linkedin.com/company/ieee-vjti"><i className="fab fa-linkedin-in fa-2x"></i></a>
                        <a href="https://www.instagram.com/ieeevjti/"><i className="fab fa-instagram fa-2x"></i></a>
                        <a href="ieeevjtiofficial@gmail.com"><i className="fas fa-envelope-square fa-2x"></i></a>
                        <a href="https://www.youtube.com/channel/UCXkEZSsh_RWiBfrJIPY27vg"><i className="fab fa-youtube fa-2x"></i></a>
                        <p><a href="https://issuu.com/ieeevjti">Issuu</a>
                            <br />
                            <a href="https://linktr.ee/ieeevjti">LinkTree</a>
                        </p>


                    </div>
                </div>
                <hr className="horizontal_line" />
                <p className="text-center">Copyright &copy;IEEE VJTI 2021 </p>


            </footer>
            </section>
        </>
    );
}

export default Footer;