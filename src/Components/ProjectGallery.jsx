import React from 'react';
import '../Styling/ProjectGallery.css'; 
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';
import p5 from '../images/p5.png';
import p6 from '../images/p6.png';
import sparkle from '../images/Sparkle.png';

const projects = [
  {
    id: 1,
    title: 'UNLOCK',
    description: 'You can always change the fragments in the galleryYou can always change the fragments in the gallery',
    imageUrl: p1,
  },
  {
    id: 2,
    title: 'Nebulique',
    description: 'You can always change the fragments in the galleryYou can always change the fragments in the gallery',
    imageUrl: p2,
  },
  {
    id: 3,
    title: 'SOME DAYS IN TOKYO',
    description: 'You can always change the fragments in the galleryYou can always change the fragments in the gallery',
    imageUrl: p3,
  },
  {
    id: 4,
    title: 'IDK',
    description: 'You can always change the fragments in the galleryYou can always change the fragments in the gallery',
    imageUrl: p4,
  },
  {
    id: 5,
    title: 'IHJDK',
    description: 'You can always change the fragments in the galleryYou can always change the fragments in the gallery',
    imageUrl: p5,
  },
  {
    id: 6,
    title: 'IHDK',
    description: 'You can always change the fragments in the galleryYou can always change the fragments in the gallery',
    imageUrl: p6,
  },
];

const Project = ({ title, description, imageUrl }) => (
  <div className="project-card">
    <img src={imageUrl} alt={title} className="projectgallery-image" />
    <div className="project-info">
      <h3 className="project-title">{description}</h3>
    </div>
    <hr></hr>
  </div>
);

const ProjectGallery = () => {
  return (
    <div className="project-gallery">
      <h1>More projects</h1>
      {/* <img src={sparkle} alt="Sparkle" /> */}
      <div className="project-grid">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
