import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 text-center shadow-lg">
    <p>
      <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">GitHub</a>
      {' | '}
      <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">LinkedIn</a>
      {' | '}
      <a href="https://stackoverflow.com/users/your-stackoverflow" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">Stack Overflow</a>
    </p>
  </footer>
);

export default Footer;
