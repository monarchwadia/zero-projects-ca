import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Navbar, { NavbarResponsive } from './Navbar.jsx';
import RightStrip from './RightStrip.jsx';

class Layout extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return (
      <div className="layout">
        <Navbar />
        <NavbarResponsive />
        <div className="content">
          <div className="contentLeft">
            {this.props.children}
          </div>
          <div className="contentRight">
            <RightStrip />
          </div>
        </div>
        <div className="bottom-bar"> 
          <div className="copyright-notice">
            Copyright © { 1900 + (new Date()).getYear() } Zero Projects Inc
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Layout);