import React from 'react';
import client1 from '../assets/client1.jpg';
import client2 from '../assets/client2.jpg';

const ClientReview = () => {
  return (
    <section className="client_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center psudo_white_primary mb_45">
          <h2>What Says Our Customers</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="item">
              <div className="box">
                <div className="detail-box">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                  </p>
                  <h6>Moana Michell</h6>
                  <p>magna aliqua</p>
                </div>
                <div className="img-box">
                  <img src={client1} alt="" className="box-img" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="item">
              <div className="box">
                <div className="detail-box">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                  </p>
                  <h6>Mike Hamell</h6>
                  <p>magna aliqua</p>
                </div>
                <div className="img-box">
                  <img src={client2} alt="" className="box-img" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
