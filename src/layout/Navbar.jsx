import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes.jsx';

const Navbar = () => (
  <div className="navbar">
    <ul className="tabs header-font no-select">
      {
        routes
          .filter(({showInNavbar}) => showInNavbar !== false)
          .map(({path, label, component, exact, showInNavbar}) => {
          return <NavLink exact
            key={path}
            to={path}  
            activeClassName="active"
          >
            <li>{label}</li>
          </NavLink>
        })

      }
    </ul>
  </div>
)

export default Navbar;