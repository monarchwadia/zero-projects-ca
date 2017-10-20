import React from 'react';
import Navbar, { NavbarResponsive } from './Navbar.jsx';
import RightStrip from './RightStrip.jsx';

const Layout = ({children}) => (
  <div className="layout">
    <Navbar />
    <NavbarResponsive />
    <div className="content">
      <div className="contentLeft">
        {children}
      </div>
      <div className="contentRight">
        <RightStrip />
      </div>
    </div>
  </div>
)

export default Layout;