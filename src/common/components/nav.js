import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../css/nav.scss';
import '../css/common.scss';

class Nav extends Component {
  render() {
    return (
        <div className="nav-container-pseudo">
            <div className="nav-container">
                <div className="nav-link-tab"><Link to="/"><img src="https://firebasestorage.googleapis.com/v0/b/sakshi-sethi.appspot.com/o/icons%2Fhome-white-18dp.svg?alt=media&token=bd406aa5-1722-4bcc-ad70-0c557a55cdc1" alt="home icon"/><span>Home</span></Link></div>
                <div className="nav-link-tab"><Link to="/explore"><img src="https://firebasestorage.googleapis.com/v0/b/sakshi-sethi.appspot.com/o/icons%2Fexplore-white-18dp.svg?alt=media&token=b660aa0f-5710-44b3-87d0-1f80a7f0a5f2" alt="explore icon"/><span>Explore</span></Link></div>
                <div className="logo logo-dsk mob-hid"><span>SAKSHI SETHI</span></div>
                <div className="nav-link-tab"><Link to="/about"><img src="https://firebasestorage.googleapis.com/v0/b/sakshi-sethi.appspot.com/o/icons%2Fface-white-18dp.svg?alt=media&token=228d9787-d03a-46ea-8c66-5e39e630cefa" alt="about icon"/><span>About</span></Link></div>
                <div className="nav-link-tab"><Link to="/contact"><img src="https://firebasestorage.googleapis.com/v0/b/sakshi-sethi.appspot.com/o/icons%2Falternate_email-white-18dp.svg?alt=media&token=6cb5e392-12eb-4be0-bb85-6b53200588c5" alt="contact icon"/><span>Contact</span></Link></div>
            </div>
        </div>
    );
  }
}

export default Nav;
