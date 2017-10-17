import React from 'react';
import ZeroProjectsLogo from '../components/ZeroProjectsLogo.jsx';

const Navbar = () => (
  <div className="navbar">
    <ul className="tabs header-font no-select">
      <li>Specialties</li>
      <li>Services</li>
      <li>Clients</li>
      <li>Contact</li>
      <li>Our team</li>
    </ul>
    <div className="logo">
      <ZeroProjectsLogo dimensions="200px" />
    </div>
  </div>
)

export default Navbar;