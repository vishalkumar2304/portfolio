import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './common/components/home';
import Explore from './common/components/explore';
import About from './common/components/about';
import Contact from './common/components/contact';
import './index.css';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/explore" component={Explore} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);
