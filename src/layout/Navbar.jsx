import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes.jsx';

const Navbar = () => (
  <div className="navbar">
    {renderNav(routes)}
  </div>
)

const NavbarResponsive = () => (
  <div className="navbar-responsive">
    {renderNav(routes)}
  </div>
)

function renderNav(routes) {
  return (
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
  );
}

export default Navbar;
export { Navbar, NavbarResponsive };
// export NavbarResponsive as NavbarResponsive;