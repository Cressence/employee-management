import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Employee from './containers/ListEmployees';
import './css/App.css';
import './css/grails.css';
import './css/main.css';

ReactDOM.render(
  <Router>
    <section>
      <Route exact path='/' component={App} />
      <Route path='/employee' component={Employee} />
      {/* <Route path='/create' component={Create} />
      <Route path='/show/:id' component={Show} /> */}
    </section>
  </Router>,
  document.getElementById('root')
);
