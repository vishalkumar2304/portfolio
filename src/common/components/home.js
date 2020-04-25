import React, { Component } from 'react';
import Nav from './nav';

import '../css/home.scss';
import '../css/common.scss';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Nav/>
          <div className="logo logo-mob dsk-hid"><span>SAKSHI SETHI</span></div>
          <div className="video-play-container">
            <video width="720" loop muted preload="auto" autoPlay>
              <source src="https://firebasestorage.googleapis.com/v0/b/sakshi-sethi.appspot.com/o/loaders%2FFile%20from%20iOS.MP4?alt=media&token=87c15eea-dd9a-4e6c-9dd4-212d44428cf5" type="video/mp4"/>
            </video>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
