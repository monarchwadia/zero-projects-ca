import Home from './pages/Home.jsx';
import Technologies from './pages/Technologies.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import TechMentors from './pages/TechMentors.jsx';
import Email from './pages/Email.jsx';

const Routes = [
  { path: "/",             label: "Home",               component: Home,        exact: true },
  { path: "/services",     label: "Dev Services",           component: Services },
  { path: "/tech-mentors",    label: "Tech Mentors",     component: TechMentors },
  { path: "/technologies", label: "Tech",               component: Technologies },
  { path: "/contact",      label: "Contact",            component: Contact },
  { path: "/email",        label: "Email",              component: Email,       showInNavbar: false }
]

export default Routes;