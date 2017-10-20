import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import './index.css';
import Layout from './layout/Layout.jsx';
import Routes from './routes.jsx';


const Root = () => (
  <BrowserRouter>
    <Layout>
      {
        Routes.map(route => (
          <Route 
            key={route.path}
            path={route.path} 
            component={ route.component } 
            exact={!!route.exact}
            showInNavbar={route.showInNavbar === false ? false : true}
          />
        ))
      }
    </Layout>
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'));
