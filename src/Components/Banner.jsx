import React from 'react';
import '../Styling/Banner.css';
import Header from './Header';
import Navbar from './Navbar';

function Banner() {
  return (
    <div className='main-container'>
        <Navbar />
        <Header />
    </div>
  );
}

export default Banner;