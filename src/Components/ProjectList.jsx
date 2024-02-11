import React from 'react';
import '../Styling/ProjectList.css';
import pl1 from '../images/pl1.png';
import pl2 from '../images/pl2.png';
import pl3 from '../images/pl3.png';
import pl4 from '../images/pl4.png';

// Dummy data for projects
const projects = [
  { id: 1, title: 'Project 1', image: pl1 },
  { id: 2, title: 'Project 2', image: pl2 },
  { id: 3, title: 'Project 3', image: pl3 },
  { id: 4, title: 'Project 4', image: pl4 },
];

const Project = ({ title, image }) => (
  <div className="project-container">
    <div className="title">
      <h2>{title}</h2>
    </div>
    <div className='project-image'>
      <img src={image} alt={title} style={{ height: 'auto', paddingRight: '100px' }} />
    </div>
  </div>
);

const ProjectList = () => {
  return (
    <div>
      {projects.map((project) => (
        <Project key={project.id} title="Your Project here" image={project.image} />
      ))}
    </div>
  );
};

export default ProjectList;
