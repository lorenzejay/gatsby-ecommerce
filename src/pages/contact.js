import React from "react";
import Layout from "../layouts/index";
import "../style/Contact.scss";

const Contact = () => {
  return (
    <Layout>
      <div className="Contact">
        <h1>Contact</h1>
        <p>If you need additional help installing your presets, please contact using this form</p>
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
          action="/thank-you"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-details">
            <input name="name" type="text" placeholder="Name" />
            <input name="email" type="email" placeholder="Email" />

            <textarea name="message" placeholder="Message" />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
