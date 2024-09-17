import React from 'react';
import { Link } from 'react-router-dom';
import o1 from '../assets/o1.jpg';
import o2 from '../assets/o2.jpg';

const OfferSection = () => {
  return (
    <section className="offer_section layout_padding-bottom">
      <div className="offer_container">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src={o1} alt="Image" />
                </div>
                <div className="detail-box">
                  <h5>Tasty Thursdays</h5>
                  <h6>
                    <span>20%</span> Off
                  </h6>
                  <Link to="/order" className="order-link">
                    Order Now{' '}
                    <svg
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 456.029 456.029"
                      style={{ enableBackground: 'new 0 0 456.029 456.029' }}
                      xmlSpace="preserve"
                    >
                      {/* SVG path data */}
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src={o2} alt="Image" />
                </div>
                <div className="detail-box">
                  <h5>Pizza Days</h5>
                  <h6>
                    <span>15%</span> Off
                  </h6>
                  <Link to="/order" className="order-link">
                    Order Now{' '}
                    <svg
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 456.029 456.029"
                      style={{ enableBackground: 'new 0 0 456.029 456.029' }}
                      xmlSpace="preserve"
                    >
                      {/* SVG path data */}
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
