import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/hero-bg.jpg';

function SliderSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const backgroundPositions = ['center center', 'right center', 'left center'];

  return (
    <section
      className="slider_section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        backgroundPosition: backgroundPositions[activeIndex],
        transition: 'background-position 1s',
      }}
    >
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-6">
              <div className="detail-box">
                <h1>Fast Food Restaurant</h1>
                <p>
                  Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam
                  quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
                  ducimus libero ipsam.
                </p>
                <div className="btn-box">
                  <Link to="/order" className="btn1">
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <ol className="carousel-indicators">
            <li
              className={activeIndex === 0 ? 'active' : ''}
              onClick={() => setActiveIndex(0)}
            ></li>
            <li
              className={activeIndex === 1 ? 'active' : ''}
              onClick={() => setActiveIndex(1)}
            ></li>
            <li
              className={activeIndex === 2 ? 'active' : ''}
              onClick={() => setActiveIndex(2)}
            ></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default SliderSection;
