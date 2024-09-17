import React from 'react';
import about from "../assets/about-img.png"
import Footer from './footer'; 
import Header from './header';

const About = () => {
  return (
    <div>
    <Header />
      <div className="sub_page">
        <section className="about_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="img-box">
                <img src= {about} alt="About" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="detail-box">
                  <div className="heading_container">
                    <h2>We Are at Delicious Grill</h2>
                  </div>
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                    are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                    the middle of text. All
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
