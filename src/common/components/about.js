import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../logo.svg';

import '../css/home.scss';

class About extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>About Us</h2>
        </div>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default About;
