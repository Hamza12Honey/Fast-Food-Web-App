import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import Map from './map';

const Order = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const mapImageUrl = `https://maps.app.goo.gl/cAYUJaSTB7gMjUk26`;

  const handleItemSelect = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems(selectedItems.filter(item => item !== value));
    }
  };

  return (
    <>
      <Header />
      <section className="order_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Order Online</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form_container">
                <form action="">
                  <div>
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div>
                    <input type="text" className="form-control" placeholder="Phone Number" />
                  </div>
                  <div>
                    <input type="email" className="form-control" placeholder="Your Email" />
                  </div>
                  <div>
                    <select className="form-control nice-select wide">
                      <option value="" disabled selected>How many items?</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div>
                    <h4>Select Fast Food Items:</h4>
                    <label><input type="checkbox" value="Burger" onChange={handleItemSelect} /> Burger</label>
                    <label><input type="checkbox" value="Pizza" onChange={handleItemSelect} /> Pizza</label>
                    <label><input type="checkbox" value="Fries" onChange={handleItemSelect} /> Fries</label>
                    <label><input type="checkbox" value="Drink" onChange={handleItemSelect} /> Drink</label>
                  </div>
                  <div>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="btn_box">
                    <button className="btn btn-primary">Order Now</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map_container">
                <Map/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Order;
