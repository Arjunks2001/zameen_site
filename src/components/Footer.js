
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start d-none d-lg-block">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0 " >
            <h5 className="text-uppercase">
              <img src="https://zameensquare.com/_next/static/media/zameen-logo.be926326.png" alt="Zameen Square" />
            </h5>
            <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
                aria-label="Email"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-success"
                type="button"
                id="button-addon2"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0 ">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li><p href="#!" className="text-dark">About Us</p></li>
              <li><p href="#!" className="text-dark">Contact Us</p></li>
              <li><p href="#!" className="text-dark">Privacy Policy</p></li>
              <li><p href="#!" className="text-dark">Refund Policy</p></li>
              <li><p href="#!" className="text-dark">Terms & Conditions</p></li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Top Localities</h5>
            <div className="d-flex flex-wrap">
              <p href="#!" className="text-dark me-3">Properties in New Delhi</p>
              <p href="#!" className="text-dark me-3">Property in Mumbai</p>
              <p href="#!" className="text-dark me-3">Property in Chennai</p>
              <p href="#!" className="text-dark me-3">Property in Bengaluru</p>
              <p href="#!" className="text-dark me-3">Property in Ahmedabad</p>
              <p href="#!" className="text-dark me-3">Property in Hyderabad</p>
              <p href="#!" className="text-dark">Property in Gurgaon</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-light">
        © 2024 All rights reserved.
        <div className="d-flex justify-content-center mt-2">
          <p href="#!" className="text-dark me-4"><i className="fab fa-facebook-f"></i></p>
          <p href="#!" className="text-dark me-4"><i className="fab fa-instagram"></i></p>
          <p href="#!" className="text-dark me-4"><i className="fab fa-twitter"></i></p>
          <p href="#!" className="text-dark"><i className="fab fa-linkedin-in"></i></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
