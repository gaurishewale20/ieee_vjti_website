import React from 'react'

const ContactUs = () => (
  
  <center>
    <form name="contact-form" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact-form"/>
      <div class="fields">
        <div class="field half">
          <input type="text" name="name" id="name" placeholder="Your Name" />
        </div>
        <br />
        <div class="field half">
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <br />
        <div class="field">
          <textarea name="message" id="message" rows="7" placeholder="Message"></textarea>
        </div>
        <br />
        <div class="field">
          <button type="submit">Send</button>
        </div>
      </div>
    </form>
  </center>
)

export default ContactUs;

