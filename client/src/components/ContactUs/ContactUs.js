import React from "react";
import { vjti } from "./";
import './ContactUs.css'

const ContactUs = () => (
 
<div className="mainn">
  <div className="container pb-2 ">
    <div className="row justify-content-center">
    <h1
          className="text-center title py-3 contact_us_title"
          
        >
         CONTACT US
        </h1>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="wrapper">
          <div className="row no-gutters mb-5">
            <div className="col-md-7">
              <div className="contact-wrap w-100 p-md-5 p-4">
                
                

                <form
                  name="contact-form"
                  method="POST"
                  data-netlify="true"
                  class="needs-validation"
                  novalidate
                >
                  <input type="hidden" name="form-name" value="contact-form" />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="label" for="name">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control border-2 border-secondary"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                          aria-describedby="Namehelp"
                          required

                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="label" for="email">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control border-2 border-secondary"
                          name="email"
                          id="email"
                          placeholder="Email"
                          aria-describedby="emailHelp"
                          required

                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label" for="subject">
                          Subject
                        </label>
                        <input
                          type="text"
                          className="form-control border-2 border-secondary"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label" for="#">
                          Message
                        </label>
                        <textarea
                          name="message"
                          className="form-control border-2 border-secondary"
                          id="message"
                          cols="30"
                          rows="7"
                          placeholder="Your Message"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="submit"
                          value="Submit"
                          className="btn btn-primary"
                        />
                        <div className="submitting"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4 d-flex pt-6 justify-content-center align-items-center">
              <div id="map">
                <img src={vjti} className="img-fluid rounded" loading="lazy"></img>
              </div>
            </div>
          </div>
         
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactUs;

 // <center>
  //   <form name="contact-form" method="POST" data-netlify="true" class="needs-validation" novalidate>
  //     <input type="hidden" name="form-name" value="contact-form" />
  //     <div class="form-group">
  //       <label for="exampleInputEmail1">Name</label>
  //       <input
  //         type="text"
  //         class="form-control"
  //         id="exampleInputName1"
  //         aria-describedby="Namehelp"
  //         placeholder="Name"
  //         name="name"
  //         required
  //       />
  //     </div>

  //     <div class="form-group">
  //       <label for="exampleInputEmail1">Email address</label>
  //       <input
  //         type="email"
  //         class="form-control"
  //         id="exampleInputEmail1"
  //         aria-describedby="emailHelp"
  //         placeholder="Email"
  //         name="email"
  //         required
  //       />
  //       <small id="emailHelp" class="form-text text-muted">
  //         We'll never share your email with anyone else.
  //       </small>
  //     </div>

  //     <div class="form-group">
  //       <label for="exampleInputYear">Year of Graduation</label>
  //       <input
  //         type="text"
  //         class="form-control"
  //         id="exampleInputYear"
  //         name="Year"
  //         placeholder="Year"
  //         required
  //       />
  //     </div>
  //     <div class="form-group">
  //       <label for="message" className="form-label">
  //         Message for Us
  //       </label>
  //       <textarea
  //         type="text"
  //         className="form-control bg-light"
  //         id="message"
  //         name="message"
  //         rows="7" placeholder="Message"
  //         required
  //       ></textarea>
  //     </div>

  //     <button type="submit" class="btn btn-primary">
  //       Submit
  //     </button>
  //   </form>
  // </center>
{
  /* <div class="fields">
        <div class="field half">
          <input type="text" name="name" id="name" placeholder="Your Name" required/>
        </div>
        <br />
        <div class="field half">
          <input type="email" name="email" id="email" placeholder="Email" required/>
        </div>
        <div class="field half">
          <input type="text" name="year" id="year" placeholder="Year of Graduation" required />
        </div>
        <br />
        <div class="field">
          <textarea name="message" id="message" rows="7" placeholder="Message" required></textarea>
        </div>
        <br />
        <div class="field">
          <button type="submit">Send</button>
        </div>
      </div> */
}
