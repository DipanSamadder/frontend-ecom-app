import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row newsletter">
            <div className="col-6">
              <div className=" text-white d-flex align-items-center gap-10">
                <img src="images/newsletter.png" alt="Newsletter" />
                <h4>Sign Up For newsletter</h4>
              </div>
            </div>
            <div className="col-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                />
                <button className="input-group-text px-3 py-2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <div className="contact text-white gap-10">
                <h4 className="mb-3">Contact Us</h4>
                <div className="contact-details">
                  <p>
                    Use your current location
                    <br /> to find the closest <br />
                    address to your <br />
                    location
                  </p>
                  <a href="mailto:dipan@gmail.com" className="mt-3">
                    dipan@gmail.com
                  </a>
                  <br />
                  <a href="tel:+91938484485" className="mt-3">
                    +91-72938484485
                  </a>
                  <div className="d-flex gap-20 mt-3">
                    <Link to="/" className="mb-2 fs-5">
                      <FaSquareYoutube />
                    </Link>
                    <Link to="/" className="mb-2 fs-5">
                      <FaInstagram />
                    </Link>
                    <Link to="/" className="mb-2 fs-5">
                      <FaFacebookSquare />
                    </Link>
                    <Link to="/" className="mb-2 fs-5">
                      <FaLinkedin />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="information text-white gap-10">
                <h4 className="mb-3">Information</h4>
                <div className="links d-flex flex-column">
                  <Link to="/" className="mb-2">
                    Privacy Policy
                  </Link>
                  <Link to="/" className="mb-2">
                    Refund Policy
                  </Link>
                  <Link to="/" className="mb-2">
                    Shipping Policy
                  </Link>
                  <Link to="/" className="mb-2">
                    Term & Condition
                  </Link>
                  <Link to="/" className="mb-2">
                    Blogs
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="account text-white gap-10">
                <h4 className="mb-3">Account</h4>
                <div className="links d-flex flex-column">
                  <Link to="/" className="mb-2">
                    About us
                  </Link>
                  <Link to="/" className="mb-2">
                    Faqs
                  </Link>
                  <Link to="/" className="mb-2">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="quick-link text-white gap-10">
                <h4 className="mb-3">Quick Links</h4>
                <div className="links d-flex flex-column">
                  <Link to="/" className="mb-2">
                    Laptops
                  </Link>
                  <Link to="/" className="mb-2">
                    Headphones
                  </Link>
                  <Link to="/" className="mb-2">
                    Tablets
                  </Link>
                  <Link to="/" className="mb-2">
                    Watch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-white text-center">
                &copy; {new Date().getFullYear()} Power by City Innovate
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
