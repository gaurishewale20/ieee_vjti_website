 import React from "react";
 import "./Home.css";
 import { bluewave, Showcase_Image, AI, ML, IOT, Computation, Renewable_Energy, Mechatronics, Electric_Vehicles, Biotechnology, Open_Source, ieee_weekly1, ieee_weekly2, ieee_weekly3, Fostering_Tech } from './';
  
 const Home = () => {
  return (
   
    <>
      <section className="showcase">
        <div className="container grid">
          <div className="showcase-text">
            <h1>LEARN.</h1>

            <h1>EXPLORE.</h1>

            <h1>CREATE.</h1>
          </div>

          <div className="showcase-img">
            <img src={Showcase_Image} loading="lazy" alt="showcase_image" />
          </div>
        </div>
      </section>

      {/* About Us  */}
      <section className="about">
        <div
          className="container flex"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h1>About Us</h1>
          <h5 className="text-center">Here's some information about what we do!</h5>
          <p>
            IEEE VJTI is a committee of enthusiastic
            engineering students under the world's largest technical
            professional organization for the advancement of technology, the Institute
            of Electrical and Electronics Engineers (IEEE). Founded in 1884 as
            the AIEE, the IEEE was formed in 1963 when AIEE merged with IRE.
            IEEE is an organization composed of engineers, scientists, and
            students. It is best known for developing standards for the
            computer and electronics industry. The Veermata Jijabai
            Technological Institute (VJTI) was given its present title on
            January 26, 1997. Founded in 1887, it was then known as Victoria
            Jubilee Technical Institute. The institute is reputed for providing excellent
            training of courses in engineering and technology at diploma,
            degree and post graduate levels to over three thousand students. Over
            twenty seven courses are offered altogether at the undergraduate, postgraduate,
            diploma, postgraduate diploma and post diploma levels. IEEE VJTI is
            the confluence of two, time tested organisations - focused at giving
            back to the society with the help of technological research.
          </p>
        </div>
      </section>

      {/* Events Pics and Info */}
      <section className="events">
        <div className="grid py-5 px-2 container">
        <div className="images-outer">
        <div
            className="images-anim box"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          ></div>
        </div>

         
          <div className="events_text container">
            <h1>IEEE Events</h1>
            <h5>
              Our Student Committee arranges all sorts of fun, interactive &
              informative events!
            </h5>
            <p className="text-justify">
              IEEE is a mix of all sorts of creative students that have a curiosity to keep on exploring new things! It's a place where innovation thrives.
              After all, there's no limit to learning! :) IEEE is known for its research and development projects and spectacular events. Here at VJTI, we organize various events + mentorship programs so that you can turn your ideas into reality under the best teachers.
              Check out some of IEEE's cool events, and register for the upcoming ones!
            </p>
            <div>
              <div className="btn btn-primary my-2">
                <a href="/events">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        <img src={bluewave} loading="lazy" alt="a blue wave"/>
      </section>

      {/*  IEEE HELP  */}

      <section className="ieee_help">
        {/* <img src={purplewave} />   */}
        <div className="container">
          <h1 className=" text-center my-1 mt-3 py-5 px-2"  >
            How can IEEE help you?
          </h1>

          <div className="grid grid-4 text-center my-3">
            <div>
              <i className="far fa-newspaper fa-3x"></i>
              <h3>Newsletters</h3>
              <p>
                Join IEEE VJTI today and start connecting to breakthrough
                technical information in your technology field. As a member of
                IEEE VJTI you'll receive access to select content which will
                expose you to the latest news from IEEE around the world.
              </p>
            </div>

            <div>
              <i className="fab fa-searchengin fa-3x"></i>
              <h3>Mentorship & Research</h3>
              <p>
                Come to us with an idea for research and projects and we
                will get you started in the right direction with proper guidance
                and support.
              </p>
            </div>
            <div>
              <i className="fas fa-bullhorn fa-3x"></i>
              <h3>Seminars</h3>
              <p>
                Our seminars comprise of brief talks with on the spot
                demonstrations on new and exciting subjects which will give you
                the future of research and a glimpse into the upcoming technological
                advancements. These will be conducted throughout the year exclusively
                for IEEE VJTI members.
              </p>
            </div>
            <div>
              <i className="fab fa-medapps fa-3x"></i>
              <h3>Workshops</h3>
              <p>
                Workshops are the best way to get started with hands-on-learning! We encourage amazing projects in a variety of domains and provide full guidance as well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES/DOMAINS  */}
      <section className="tech_heading py-3 mt-4">
        <div className="tech_heading">
          <h1
            className="text-center heading"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Technologies
          </h1>
          <p
            className="subheading text-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            These are some of the domains that we are passionate about!
          </p>
        </div>
        <div className="grid grid-3 container">
          <div
            className="box cyan ai"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <h2>Artificial Intelligence</h2>
            <p> Learn how to simulate human intelligence in machines.</p>
            <img src={AI} alt="ai" loading="lazy" />
          </div>

          <div
            className="box red ml"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <h2>Machine Learning</h2>
            <p>Make machines learn and improve by experience, just like humans! Teach a device how to analyse patterns in data.</p>
            <img src={ML} alt="Ml" loading="lazy" />
          </div>

          <div
            className="box yellow iot"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <h2>Internet of Things</h2>
            <p>Make your devices smart and enable them to talk to you. Enable physical devices to connect to each other over the internet.</p>
            <img src={IOT} alt="iot" loading="lazy" />
          </div>

          <div
            className="box blue computation"
            data-aos="fade-up"
            data-aos-duration="1700"
          >
            <h2>Computation</h2>
            <p>Generate computational models and simulations, and learn how engineering analysis and design works.</p>
            <img src={Computation} alt="Computation" loading="lazy" />
          </div>

          <div
            className="box cyan energy"
            data-aos="fade-up"
            data-aos-duration="1700"
          >
            <h2>Renewable Energy</h2>
            <p>Explore and learn more about this domain to help create a better environment.</p>
            <img src={Renewable_Energy} alt="renewable_energy" loading="lazy" />
          </div>

          <div
            className="box red mechatronics"
            data-aos="fade-up"
            data-aos-duration="1700"
          >
            <h2>Mechatronics</h2>
            <p>Delve deeper into this domain and integrate the mechanical, electronics and electrical fields to solve complex problems.</p>
            <img src={Mechatronics} alt="mechatronics" loading="lazy" />
          </div>

          <div
            className="box yellow electric_vehicles"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <h2>Electric Vehicles</h2>
            <p>Explore the technology that goes behind creating electric vehicles. It's tech for the future!</p>
            <img
              src={Electric_Vehicles}
              alt="electric vechicles"
              loading="lazy"
            />
          </div>

          <div
            className="box red biotech"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <h2>Biotechnology</h2>
            <p>Combine the features of Biology and Technology to redesign healthcare devices for the future.</p>
            <img src={Biotechnology} alt="Biotech" loading="lazy" />
          </div>

          <div
            className="box cyan os"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <h2>Open Source</h2>
            <p>Contibute to interesting open source projects and showcase your skills to the developer community.</p>
            <img src={Open_Source} alt="open source" loading="lazy" />
          </div>
        </div>
      </section>

      {/* <hr className="style1" /> */}

      {/* IEEE Weeklies  */}
      <section className="ieee_weeklies">
        <div
          className="heading text-center px-2"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h1>IEEE Weeklies!</h1>
          <p>
            Catch the very best from the tech world now on the{" "}
            <a href="https://www.instagram.com/ieeevjti/" target="_blank" rel="noopener noreferrer">
              @ieeevjti
            </a>{" "}
            page!
          </p>
        </div>

        <div
          className="container grid grid-3"
          data-aos="zoom-in"
          data-aos-duration="1600"
        >
          <div className="weekly1">
            <div className="custom-card ">
              <a
                href="https://www.instagram.com/p/CPTK-GsMiJD/"
                target="_blank" rel="noopener noreferrer"
              >
                <img src={ieee_weekly1} alt="ieee_weekly1" loading="lazy" />
              </a>
            </div>
          </div>
          <div className="weekly2">
            <div className="custom-card ">
              <a
                href="https://www.instagram.com/p/COlPqwiswfz/"
                target="_blank" rel="noopener noreferrer"
              >
                <img src={ieee_weekly2} alt="ieee_weekly2" loading="lazy" />
              </a>
            </div>
          </div>
          <div className="weekly3">
            <div className="custom-card ">
              <a
                href="https://www.instagram.com/p/CPa5pHOM_nN/"
                target="_blank" rel="noopener noreferrer"
              >
                
                <img src={ieee_weekly3} alt="ieee_weekly3" loading="lazy" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <hr className="style1" /> */}

      {/* VIDEO  */}
      <section className="video">
        <div className="grid container text-center">
          <div
            className="video-container"
            data-aos="zoom-in-right"
            data-aos-duration="1600"
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/K6ursK8vSIs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="canva_anim">
            <img src={Fostering_Tech} alt="fostering_tech" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
