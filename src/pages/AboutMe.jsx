import React from 'react';

const AboutMe = () => (
  <section className="p-4 text-center">
    <h2 className="text-2xl font-bold mb-4">About Me</h2>
    <img src="path-to-your-photo.jpg" alt="Developer" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg hover:shadow-2xl transition-shadow duration-300" />
    <p className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">Short bio about the developer.</p>
  </section>
);

export default AboutMe;
