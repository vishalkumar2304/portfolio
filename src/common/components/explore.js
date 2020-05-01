import React, {useEffect} from 'react';
import Nav from './nav';
import {storage} from '../../firebase/index';

import '../css/explore.scss';

function Explore() {

  useEffect(() => {
    let storageRef = storage.ref();
    let innerContent = "", i = 1;
    storageRef.child('pethi/').listAll().then( result => {
      result.items.forEach( item => {
        item.getDownloadURL().then( urlImg => {
          innerContent = innerContent + `<img class="explore-image image-no-${i++}" src="${urlImg}" alt="image number ${i}"/>`;
          document.querySelector('#explore-container').innerHTML = innerContent;
        });
      })
    })// eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Nav page="e"/>
        <h2>Explore</h2>
        <div id="explore-container" className="image-container"></div>
      </div>
    </div>
  );
}

export default Explore;
