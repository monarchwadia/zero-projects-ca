import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import './index.css';
import Consulting from './pages/Consulting.jsx';
import Technologies from './pages/Technologies.jsx';
import OurTeam from './pages/OurTeam.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import Layout from './layout/Layout.jsx';


const Root = () => (
  <BrowserRouter>
    <Layout>
      <Route path="/" component = { Consulting } exact/>
      <Route path="/technologies" component = { Technologies } />
      <Route path="/services" component = { Services } />
      <Route path="/our-team" component = { OurTeam } />
      <Route path="/contact" component = { Contact } />
    </Layout>
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'));
