import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes.jsx';
import ZeroProjectsLogo from '../components/ZeroProjectsLogo.jsx';

const Navbar = () => (
  <div className="navbar">
    {renderNav(routes, 'navbar')}
  </div>
)

class NavbarResponsive extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false }
  }

  toggleDrawer(e) {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() { return (
    <div className="navbar-responsive no-select header-font" onClick={this.toggleDrawer.bind(this)}>
      <div className="menu-button"><ZeroProjectsLogo fill="#ffffff"/></div>
      { this.state.isOpen && renderNav(routes, 'navbar-responsive') }
    </div>
  )}
}

function renderNav(routes, keyPrefix) {
  return (
    <ul className="tabs header-font no-select">
      {
        routes
          .filter(({showInNavbar}) => showInNavbar !== false)
          .map(({path, label, component, exact, showInNavbar}) => {
          return <NavLink exact
            key={keyPrefix + path}
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