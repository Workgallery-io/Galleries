import React from 'react';
import '../Styling/SelectedProject.css';
import sparkle from '../images/Sparkle.png';

function SelectedProject() {
  return (
    <div className="container">
      <h2 style={{ fontWeight: 500 }}>Selected Projects</h2>
      <div className="sparkle-icon">
        <img src={sparkle} alt="Sparkle" />
      </div>
    </div>
  );
}

export default SelectedProject;





