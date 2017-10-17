import React from 'react';
import Header from './Header.jsx';

const Layout = ({children}) => (
  <div>
    <Header />
    {children}
  </div>
)

export default Layout;