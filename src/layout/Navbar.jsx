import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => (
  <div className="navbar">
    <ul className="tabs header-font no-select">
      <Link to="/"><li>Consulting</li></Link>
      <Link to="/technologies"><li>Technologies</li></Link>
      <Link to="/contact"><li>Contact</li></Link>
      <Link to="/our-team"><li>Our team</li></Link>
    </ul>
  </div>
)

export default Navbar;