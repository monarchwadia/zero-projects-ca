import React from 'react';
import Navbar from './Navbar.jsx';
import Content from './Content.jsx';

const Layout = ({children}) => (
  <div class="layout">
    <Navbar />
    <Content>
      {children}
    </Content>
  </div>
)

export default Layout;