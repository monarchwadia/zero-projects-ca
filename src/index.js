import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import './index.css';
import Home from './pages/Home.jsx';
import Technologies from './pages/Technologies.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import Layout from './layout/Layout.jsx';


const Root = () => (
  <BrowserRouter>
    <Layout>
      <Route path="/" component = { Home } exact/>
      <Route path="/technologies" component = { Technologies } />
      <Route path="/services" component = { Services } />
      <Route path="/contact" component = { Contact } />
    </Layout>
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'));
