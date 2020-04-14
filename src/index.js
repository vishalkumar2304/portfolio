import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './common/home';
import About from './common/about';
import './index.css';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
