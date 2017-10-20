import Home from './pages/Home.jsx';
import Technologies from './pages/Technologies.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import Sectors from './pages/Sectors.jsx';
import Email from './pages/Email.jsx';

const Routes = [
  { path: "/",             label: "Home",          component: Home,        exact: true },
  { path: "/services",     label: "Services",      component: Services },
  { path: "/technologies", label: "Technologies",  component: Technologies },
  { path: "/sectors",      label: "Sectors",       component: Sectors },
  { path: "/contact",      label: "Contact",       component: Contact },
  { path: "/email",        label: "Email",         component: Email,       showInNavbar: false }
]

export default Routes;