import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'

import '../css/nav.scss';
import '../css/common.scss';

function Nav(props) {
  let fillColor = "#fff";
  useEffect(() => {
    document.title = `Sakshi Sethi${props.page ? (props.page === "h" ? " | Home" : (props.page === "e" ? " | Explore" : (props.page === "a" ? " | About Me" : (props.page === "c" ? " | Contact Me" : "")))) : ""}`;
  });
  return (
      <div className="nav-container-pseudo">
        <div className="logo logo-mob dsk-hid"><span>SAKSHI SETHI</span></div>
        <div className="nav-container">
            <div className={`nav-link-tab ${props.page && props.page === "h" ? "selected-page-tab" : ""}`}>
              <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fillColor} width="18px" height="18px"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                <span>Home</span>
              </Link>
            </div>
            <div className={`nav-link-tab ${props.page && props.page === "e" ? "selected-page-tab" : ""}`}>
              <Link to="/explore"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fillColor} width="18px" height="18px"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                <span>Explore</span>
              </Link>
            </div>
            <div className="logo logo-dsk mob-hid"><span>SAKSHI SETHI</span></div>
            <div className={`nav-link-tab ${props.page && props.page === "a" ? "selected-page-tab" : ""}`}>
              <Link to="/about"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fillColor} width="18px" height="18px"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                <span>About</span>
              </Link>
            </div>
            <div className={`nav-link-tab ${props.page && props.page === "c" ? "selected-page-tab" : ""}`}>
              <Link to="/contact"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fillColor} width="18px" height="18px"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                <span>Contact</span>
              </Link>
            </div>
        </div>
      </div>
  );
}

export default Nav;
