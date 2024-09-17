import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer_section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-col">
            <div className="footer_contact">
              <h4>Contact Us</h4>
              <div className="contact_link_box">
                <a href="#">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Location</span>
                </a>
                <a href="#">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>Call 0141 611 1952</span>
                </a>
                <a href="#">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>clearbusinessbyadrian@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <div className="footer_detail">
              <a href="#" className="footer-logo">Delicious Grill</a>
              <p>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
              <div className="footer_social">
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-col">
            <h4>Opening Hours</h4>
            <p>Everyday</p>
            <p> 1:00 PM to 11:00 PM</p>
          </div>
        </div>
        <div className="footer-info">
          <p>
            &copy; {currentYear} All Rights Reserved 
            <br /><br />
           
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
