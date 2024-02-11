import React from 'react';
import Banner from './Components/Banner';
import SelectedProject from './Components/SelectedProject';
import ProjectList from './Components/ProjectList';
import ProjectGallery from './Components/ProjectGallery';
import Footer from './Components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <SelectedProject />
      <ProjectList />
      <ProjectGallery />
      <Footer />
    </div>
  );
}

export default App;

