import React from 'react';
import  './Home.css';
import Showcase_Image from '../../assets/images/gadgets.webp';
import AI from '../../assets/images/ieee_tech/ai.png';
import ML from '../../assets/images/ieee_tech/ml.png';
import IOT from '../../assets/images/ieee_tech/iot.png';
import Computation from '../../assets/images/ieee_tech/computation.png';
import Renewable_Energy from '../../assets/images/ieee_tech/renewable_energy.png';
import Mechatronics from '../../assets/images/ieee_tech/mechatronics.png';
import Electric_Vehicles from '../../assets/images/ieee_tech/electric_vehicles.png';
import Biotechnology from '../../assets/images/ieee_tech/biotech.png';
import Open_Source from '../../assets/images/ieee_tech/oss.png';
import ieee_weekly1 from '../../assets/images/ieee_weeklies/ieee_weekly1.png';
import ieee_weekly2 from '../../assets/images/ieee_weeklies/ieee_weekly2.png';
import ieee_weekly3 from '../../assets/images/ieee_weeklies/ieee_weekly3.png';
import Fostering_Tech from '../../assets/videos/gif_Fostering_Technological_Innovation.gif';
const Home = () => {
    return (<>
        <section className="showcase">
            <div className="container grid">
                <div className="showcase-text">
                    <h1><span>LEARN.</span></h1>
                    <h1><span>EXPLORE.</span></h1>
                    <h1><span>CREATE.</span></h1>
                </div>

                <div className="showcase-img">
                    <img src={Showcase_Image} loading="lazy" alt='showcase_image'/>
                </div>
            </div>
        </section>

        {/* About Us  */}
        <section className="about">
            <div className="container flex" data-aos="fade-up" data-aos-duration="1500">
                <h1>About Us</h1>
                <h5>Here's some information about what we do!</h5>
                <p>
                    IEEE VJTI is a committee of enthusiastic electrical and electronics
                    engineering students under the world's largest technical professional
                    organization for advancement of technology, Institute of Electrical
                    and Electronics Engineers (IEEE). Founded in 1884 as the AIEE, the
                    IEEE was formed in 1963 when AIEE merged with IRE. IEEE is an
                    organization composed of engineers, scientists, and students. The IEEE
                    is best known for developing standards for the computer and
                    electronics industry. The Veermata Jijabai Technological Institute
                    (VJTI) was given its present title on January 26, 1997. Founded in
                    1887, it was then known as Victoria Jubilee Technical Institute. The
                    institute is reputed for excellent training in courses in engineering
                    and technology at diploma and, degree and post graduate levels over
                    three thousand students. Over twenty seven courses are offered at the
                    undergraduate, postgraduate, diploma, postgraduate diploma and post
                    diploma levels. IEEE VJTI is the confluence of two time tested
                    organisations focused at giving back to the society with the help of
                    technological research.
                    </p>
            </div>
        </section>

        {/* Events Pics and Info */}
        <section className="events">
            <div className="container grid py-2">
                <div className="images-anim box" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">

                </div>
                <div>
                    <h1>IEEE Events</h1>
                    <h5>
                        Our Student Committee arranges all sorts of fun, interactive &
                        informative events!
                        </h5>
                    <p className="my-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                        voluptas repellat quasi! Obcaecati dolorem quam soluta amet, natus
                        perferendis tempora architecto odio illum delectus atque saepe
                        tenetur quasi placeat accusantium?
                        </p>
                    <div className="btn btn-primary my-2">
                        <a href="#">Learn More</a>
                    </div>
                </div>
            </div>
            {/* SVG Waves  */}
            <svg
                height="100%"
                width="100%"
                id="svg"
                viewBox="0 0 1440 400"
                xmlns="http://www.w3.org/2000/svg"
                className="transition duration-300 ease-in-out delay-150"
            >
                <defs>
                    <linearGradient id="gradient">
                        <stop offset="5%" stop-color="#9900ef88"></stop>
                        <stop offset="95%" stop-color="#32ded488"></stop>
                    </linearGradient>
                </defs>
                <path
                    d="M 0,400 C 0,400 0,133 0,133 C 98.28571428571428,108.28571428571428 196.57142857142856,83.57142857142857 330,89 C 463.42857142857144,94.42857142857143 631.9999999999999,130 746,150 C 860.0000000000001,170 919.4285714285716,174.42857142857144 1026,169 C 1132.5714285714284,163.57142857142856 1286.2857142857142,148.28571428571428 1440,133 C 1440,133 1440,400 1440,400 Z"
                    stroke="none"
                    stroke-width="0"
                    fill="url(#gradient)"
                    className="transition-all duration-300 ease-in-out delay-150"
                ></path>
                <defs>
                    <linearGradient id="gradient">
                        <stop offset="5%" stop-color="#9900efff"></stop>
                        <stop offset="95%" stop-color="#32ded4ff"></stop>
                    </linearGradient>
                </defs>
                <path
                    d="M 0,400 C 0,400 0,266 0,266 C 100.57142857142858,284.2857142857143 201.14285714285717,302.57142857142856 317,312 C 432.85714285714283,321.42857142857144 563.9999999999999,322.00000000000006 691,312 C 818.0000000000001,301.99999999999994 940.8571428571429,281.4285714285714 1065,272 C 1189.142857142857,262.5714285714286 1314.5714285714284,264.28571428571433 1440,266 C 1440,266 1440,400 1440,400 Z"
                    stroke="none"
                    stroke-width="0"
                    fill="url(#gradient)"
                    className="transition-all duration-300 ease-in-out delay-150"
                ></path>
            </svg>

        </section>

        {/*  IEEE HELP  */}

        <section className="ieee_help">
            <div className="container">
                <h1 className="stats-heading text-center my-1">How can IEEE help you?</h1>

                <div className="grid grid-4 text-center my-4" >
                    <div >
                        <i className="far fa-newspaper fa-3x"></i>
                        <h3>Newsletters</h3>
                        <p className="text-secondary">
                            Join IEEE VJTI today and start connecting to breakthrough
                            technical information in your technology field. As a member of
                            IEEE VJTI you'll receive access to select content which will
                            expose you to the latest news from IEEE around the world.
                            </p>
                    </div>

                    <div>
                        <i className="fab fa-searchengin fa-3x"></i>
                        <h3>Mentorship & Research</h3>
                        <p className="text-secondary">
                            You come to us with an idea for research and projects and we will
                            get you started in the right direction with proper guidance and
                            support.
                            </p>
                    </div>
                    <div>
                        <i className="fas fa-bullhorn fa-3x"></i>
                        <h3>Seminars</h3>
                        <p className="text-secondary">
                            Seminars comprising of brief talk with on the spot demonstrations
                            on new and exciting subjects which will give you, the future of
                            research, a glimpse into upcoming technological advancement will
                            be conducted throughout the year exclusively for IEEE VJTI
                            members.
                            </p>
                    </div>
                    <div>
                        <i className="fab fa-medapps fa-3x"></i>
                        <h3>Workshops</h3>
                        <p className="text-secondary">
                            Workshops regarding short but amazing electronics or coding
                            projects with full guidance.
                            </p>
                    </div>
                </div>
            </div>
        </section>

        {/* TECHNOLOGIES/DOMAINS  */}
        <section className="tech_heading">
            <div className="tech_heading">
                <h1
                    className="text-center heading"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    Technologies</h1>
                <p
                    className="subheading text-center"
                    data-aos="fade-up"
                    data-aos-duration="1500">
                    These are some of the domains that we are passionate about!
                    </p>
            </div>
            <div className="container grid grid-3"  >
                <div className="box cyan ai" data-aos="fade-up"
                    data-aos-duration="1600">
                    <h2>Artificial Intelligence</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <img
                        src={AI}
                        alt = 'ai'
                        loading="lazy"
                    />
                </div>

                <div className="box red ml" data-aos="fade-up"
                    data-aos-duration="1600">
                    <h2>Machine Learning</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <img
                        src={ML}
                        alt='Ml'
                        loading="lazy"
                    />
                </div>

                <div className="box yellow iot" data-aos="fade-up"
                    data-aos-duration="1600">
                    <h2>Internet of Things</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <img
                        src={IOT}
                        alt='iot'
                        loading="lazy"
                    />
                </div>

                <div className="box blue computation" data-aos="fade-up"
                    data-aos-duration="1700">
                    <h2>Computation</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <img
                        src={Computation}
                        alt='Computation'
                        loading="lazy"
                    />
                </div>

                <div className="box cyan energy" data-aos="fade-up"
                    data-aos-duration="1700">
                    <h2>Renewable Energy</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <img
                        src={Renewable_Energy}
                        alt='renewable_energy'
                        loading="lazy"
                    />
                </div>

                <div className="box red mechatronics" data-aos="fade-up"
                    data-aos-duration="1700">
                    <h2>Mechatronics</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <img
                        src={Mechatronics}
                        alt='mechatronics'
                        loading="lazy"
                    />
                </div>

                <div className="box yellow electric_vehicles" data-aos="fade-up"
                    data-aos-duration="1800">
                    <h2>Electric Vehicles</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <img
                        src={Electric_Vehicles}
                        alt='electric vechicles'
                        loading='lazy'
                    />
                </div>

                <div className="box red biotech" data-aos="fade-up"
                    data-aos-duration="1800">
                    <h2>Biotechnology</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <img
                        src={Biotechnology}
                        alt='Biotech'
                        loading="lazy"
                    />
                </div>

                <div className="box cyan os" data-aos="fade-up"
                    data-aos-duration="1800">
                    <h2>Open Source</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <img
                        src={Open_Source}
                        alt='open source'
                        loading="lazy"
                    />
                </div>
            </div>
        </section>

        <br />
        <hr className="style1" />


        {/* IEEE Weeklies  */}
        <section className="ieee_weeklies">
            <div className="heading text-center" data-aos="fade-up"
                data-aos-duration="1500">
                <h1>IEEE Weeklies!</h1>
                <p>
                    Catch the very best from the tech world now on the
          <a href="https://www.instagram.com/ieeevjti/" target="_blank">@ieeevjti</a> page!
        </p>
            </div>

            <div className="container grid grid-3" data-aos="zoom-in" data-aos-duration="1600">
                <div className="weekly1">
                    <div className="card">

                        <a href="https://www.instagram.com/p/CPTK-GsMiJD/" target="_blank"><img src={ieee_weekly1} alt='ieee_weekly1' loading="lazy" /></a>
                    </div>
                </div>
                <div className="weekly2">
                    <div className="card">
                        <a href="https://www.instagram.com/p/COlPqwiswfz/" target="_blank">
                            <img src={ieee_weekly2} alt='ieee_weekly2' loading="lazy" /></a>

                    </div>
                </div>
                <div className="weekly3">
                    <div className="card"><a href="https://www.instagram.com/p/CPa5pHOM_nN/" target="_blank"> <img src={ieee_weekly3} alt='ieee_weekly3' loading="lazy" /></a>

                    </div>
                </div>
            </div>
        </section>
        <hr className="style1" />



        {/* VIDEO  */}
        <section className="video">
            <div className="grid container text-center">
                <div className="video-container" data-aos="zoom-in-right" data-aos-duration="1600">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/K6ursK8vSIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>
                <div className="canva_anim">
                    <img src={Fostering_Tech} alt='fostering_tech'/>
                </div>
            </div>
        </section>

    </>
    );

}

export default Home;