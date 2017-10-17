import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import './index.css';
import Index from './pages/index/Index.jsx';
import Services from './pages/services/Services.jsx';

import Layout from './layout/Layout.jsx';


const Root = () => (
  <BrowserRouter>
    <Layout>
      <Route exact path="/" component = {Index} />
      <Route path="/services" component = { Services } />
    </Layout>
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'));
