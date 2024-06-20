import React from 'react';
import Project from '../components/Project';

const Portfolio = () => (
  <section className="p-4">
    <h2 className="text-2xl font-bold mb-4 text-center">Portfolio</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Project title="Project 1: Marketing Website" image="https://github.com/fredm23579/marketing-website-module1/raw/main/image.png" deployedLink="https://fredm23579.github.io/marketing-website-module1/" repoLink="https://github.com/fredm23579/marketing-website-module1" />
      {/* Add more Project components as needed */}
    </div>
  </section>
);

export default Portfolio;
