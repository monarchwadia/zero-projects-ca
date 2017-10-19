import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <div className="navbar">
    <ul className="tabs header-font no-select">
      {
        [
          ["Home",      "/"],
          ["Services",      "/services"],
          ["Sectors",      "/sectors"],
          ["Technologies",  "/technologies"],
          ["Contact",       "/contact"]
        ]
        .map(r => {
          const label = r[0];
          const route = r[1];

          return <NavLink exact 
            key={route}
            to={route}  
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