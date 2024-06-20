import React from 'react';
import Project from '../components/Project';

const Portfolio = () => (
  <section className="p-4">
    <h2 className="text-2xl font-bold mb-4 text-center">Portfolio</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Project title="Project 1" image="path-to-image.jpg" deployedLink="https://deployed-link.com" repoLink="https://github.com/" />
      {/* Add more Project components as needed */}
    </div>
  </section>
);

export default Portfolio;
