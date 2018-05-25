import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import WrestlersPage from './components/wrestler/WrestlersPage';
import ManageWrestlerPage from './components/wrestler/ManageWrestlerPage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/"component={App}>
    <IndexRoute component= {HomePage} />
    <Route path="wrestlers" component={WrestlersPage} />
    <Route path="wrestler" component={ManageWrestlerPage} />
    <Route path="wrestler/:id" component={ManageWrestlerPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
