import React from 'react';
import Navbar from './Navbar.jsx';
import Content from './Content.jsx';
import RightStrip from './RightStrip.jsx';

const Layout = ({children}) => (
  <div className="layout">
    <Navbar />
    <div>
      <Content>
        {children}
      </Content>
    </div>
    <RightStrip />
  </div>
)

export default Layout;