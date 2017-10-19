import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import './index.css';
import Home from './pages/Home.jsx';
import Technologies from './pages/Technologies.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import Layout from './layout/Layout.jsx';
import Sectors from './pages/Sectors.jsx';
import Email from './pages/Email.jsx';



const Root = () => (
  <BrowserRouter>
    <Layout>
      <Route path="/" component = { Home } exact/>
      <Route path="/technologies" component = { Technologies } />
      <Route path="/services" component = { Services } />
      <Route path="/contact" component = { Contact } />
      <Route path="/sectors" component = { Sectors } />
      <Route path="/email" component = { Email } />
    </Layout>
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'));
