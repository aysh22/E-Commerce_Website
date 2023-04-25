import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Welcome to our mobile accessory store! Our "About Us" page is the
              perfect way to introduce ourselves to you. We are committed to
              providing our customers with the best products and customer
              service. Our focus is on continuous innovation and providing a
              wide range of accessories for you to choose from. We pride
              ourselves on offering a one-year warranty for all our products and
              have over 140,000 product reviews to help you make informed
              decisions. At our store, you can find affordable mobile phone and
              tablet accessories that cater to all your needs. We offer shipping
              throughout the India, United States, Canada, and select
              international destinations. Thank you for considering our store
              for all your mobile accessory needs!
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/images/about.png"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
