import React from 'react';
import Navigation from './Navigation';

const Header = () => (
  <header className="bg-blue-600 text-white p-4 shadow-lg">
    <h1 className="text-3xl font-bold">Developer Name</h1>
    <Navigation />
  </header>
);

export default Header;
