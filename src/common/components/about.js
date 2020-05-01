import React from 'react';
import Nav from './nav';

import '../css/home.scss';

function About() {
  return (
    <div className="App">
      <div className="container">
        <Nav page="a"/>
        <h2>About Us</h2>
      </div>
    </div>
  );
}

export default About;
