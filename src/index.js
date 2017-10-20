import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'
import { homepage } from '../package.json'

import './index.css';
import Layout from './layout/Layout.jsx';
import Routes from './routes.jsx';

const basename = (process.env.NODE_ENV === "development") ? "/" : homepage;

const Root = () => (
  <HashRouter basename={basename}>
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
  </HashRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'));
