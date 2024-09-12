import React from "react";
import Bradecrumb from "../components/Bradecrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import CustomTextarea from "../components/CustomTextarea";
import Meta from "../components/Meta";
const Contact = () => {
  return (
    <>
      <Meta title="Contact title" />
      <Bradecrumb title="Contact" />

      <Container className="home-wrapper-2 contact py-5">
        <div className="row">
          <div className="col-md-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14024.805694359678!2d77.04493215!3d28.503587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19e69aaaaaab%3A0xd40e679700a4c5ab!2sManipal%20Hospital%2C%20Palam%20Vihar%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1725953540289!5m2!1sen!2sin"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="google Map"
            ></iframe>
          </div>
          <div className="col-md-12">
            <div className="contact-form mt-3">
              <div className="row">
                <div className="col-md-6">
                  <form className="p-4">
                    <CustomInput
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                    <CustomInput
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                    />

                    <CustomInput
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email.."
                    />
                    <CustomTextarea
                      id="message"
                      name="message"
                      placeholder="Message.."
                    />
                    <button type="submit" className="btn btn-primary button">
                      Submit
                    </button>
                  </form>
                </div>
                <div className="col-md-6">
                  <div class="contact-details  p-4">
                    <h3>Get in touch</h3>
                    <p className="text-body-tertiary">
                      33 New Montgomery St. Ste 750 San Francisco, CA, USA 94105
                      <br />
                      <br />
                      Monday – Friday 10 AM – 8 PM
                    </p>
                    <br />
                    <a href="tel:(+91)7-723-4608" className="text-dark">
                      (+91)7-723-4608
                    </a>
                    <br />
                    <br />
                    <a
                      href="mailto:supermart@exampledemo.com"
                      className="text-dark"
                    >
                      supermart@exampledemo.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
