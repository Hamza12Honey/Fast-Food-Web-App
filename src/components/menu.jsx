import React from 'react';
import Header from './header';
import Footer from './footer';
import FoodSection from './foodsection';

function Menu() {
  return (
    
    <div >
      <Header />
      <section className="food_section layout_padding">
      <FoodSection/>
      </section>
      <Footer />
    </div>
   
  );
}

export default Menu;