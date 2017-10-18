import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <div className="navbar">
    <ul className="tabs header-font no-select">
      {
        [
          ["Home",      "/"],
          ["Services",      "/services"],
          ["Technologies",  "/technologies"],
          ["Contact",       "/contact"],
          ["Our Team",      "/our-team"]
        ]
        .map(r => {
          const label = r[0];
          const route = r[1];

          return <NavLink to={route} exact activeClassName="active"><li>{label}</li></NavLink>
        })

      }
    </ul>
  </div>
)

export default Navbar;