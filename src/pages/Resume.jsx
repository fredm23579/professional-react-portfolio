import React from 'react';

const Resume = () => (
  <section className="p-4 text-center">
    <h2 className="text-2xl font-bold mb-4">Resume</h2>
    <a href="path-to-resume.pdf" download className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-2xl transition duration-300">
      Download Resume
    </a>
    <h3 className="text-xl font-bold mt-8 mb-4">Proficiencies</h3>
    <ul className="list-disc list-inside bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <li className="mb-2">Proficiency 1</li>
      <li className="mb-2">Proficiency 2</li>
      <li className="mb-2">Proficiency 3</li>
      {/* Add more proficiencies as needed */}
    </ul>
  </section>
);

export default Resume;
