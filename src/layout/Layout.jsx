import React from 'react';
import Navbar from './Navbar.jsx';
import RightStrip from './RightStrip.jsx';
import TopStrip from './TopStrip.jsx';

const Layout = ({children}) => (
  <div className="layout">
    <Navbar />
    <TopStrip />
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