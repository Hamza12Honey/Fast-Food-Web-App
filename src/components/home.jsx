// Home.jsx
import React from 'react';
import Header from './header';
import Footer from './footer';
import SliderSection from './slider';
import Offer from './offersection';
import FoodSection from './foodsection';
import ClientReview from './clientreview';

function Home() {
  return (
    <div>
      <Header />
      <SliderSection/>
      <Offer/>
      <FoodSection/>
      <section className='client_section layout_padding-bottom' >
      <ClientReview/>
      </section>
      <Footer />
    </div>
  );
}

export default Home;

