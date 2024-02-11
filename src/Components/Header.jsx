import React from 'react';
import '../Styling/Header.css';
import dp from '../images/dp.jpeg';
import vector from '../images/Vector.png';

function Header() {
  return (
    <div className="content">
        <div className="headline" >
          <h1>Unleash Creativity, Capture Vision: <br/> Your Journey Through My <br/> Portfolio Begins Here.</h1>
        </div>
        <div className="image-container">
          <img src={dp} alt="Profile" />
        </div>
        <img src={vector} alt="Vector" className="vector-image" /> 
    </div>
  );
}

export default Header;
