import React from 'react';
import Hero from '../components/Hero';
import { SliderData } from '../data/SliderData';

const Rentals = () => {
  return <Hero slides={SliderData} />;
};

export default Rentals;