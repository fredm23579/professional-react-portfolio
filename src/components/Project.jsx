import React from 'react';

const Project = ({ title, image, deployedLink, repoLink }) => (
  <div className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <img src={image} alt={title} className="w-full h-48 object-cover mb-2 rounded-lg" />
    <p>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Deployed Application</a>
      {' | '}
      <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">GitHub Repository</a>
    </p>
  </div>
);

export default Project;
