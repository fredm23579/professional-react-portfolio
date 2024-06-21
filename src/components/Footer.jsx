import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-2 text-center shadow-lg fixed bottom-0 w-full">
    <p>
      <a href="https://github.com/fredm23579" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">GitHub</a>
      {' | '}
      <a href="https://linkedin.com/in/fred-motta" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">LinkedIn</a>
      {' | '}
      <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">Stack Overflow</a>
    </p>
  </footer>
);

export default Footer;
