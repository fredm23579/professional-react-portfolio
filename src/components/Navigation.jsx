import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul className="flex space-x-4">
      <li><NavLink to="/" className="text-white" activeClassName="font-bold">About Me</NavLink></li>
      <li><NavLink to="/portfolio" className="text-white" activeClassName="font-bold">Portfolio</NavLink></li>
      <li><NavLink to="/contact" className="text-white" activeClassName="font-bold">Contact</NavLink></li>
      <li><NavLink to="/resume" className="text-white" activeClassName="font-bold">Resume</NavLink></li>
    </ul>
  </nav>
);

export default Navigation;