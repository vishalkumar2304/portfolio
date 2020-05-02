import React, {useState, useEffect} from 'react';
import Nav from './nav';
import {storage} from '../../firebase/index';

import '../css/explore.scss';

function Explore() {

  const[flag, updateFlag] = useState(0);

  let getURLS = (imgArr, startIndex, limit) => {
    imgArr = imgArr.splice(startIndex, limit);
    let i = startIndex;
    imgArr.forEach( item => {
      item.getDownloadURL().then( urlImg => {
        let imagDyn = document.createElement('img');
        imagDyn.src = urlImg;
        imagDyn.className = "explore-image image-no-" + (++i);
        imagDyn.alt = "image-number-" + (i);
        // innerContent = innerContent + `<img class="explore-image image-no-${i++}" src="${urlImg}" alt="image number ${i}"/>`;
        document.querySelector('#explore-container').appendChild(imagDyn);
      });
    })
  }

  let loadMore = () => {
    if(document.querySelector('#explore-container').scrollTop % 80 === 0){
      updateFlag(flag + 8);
    }
  }

  useEffect(() => {
    let storageRef = storage.ref();
    let resArr = [];
    storageRef.child('pethi/').listAll().then( result => {
      for (let i = 0; i < result.items.length; i++){
        resArr.push(result.items[i]);
      }
      getURLS(resArr, flag, flag+8);
    })
  }, [flag]);

  return (
    <div className="App">
    <Nav page="e"/>
      <div className="container">
        <h2>Explore</h2>
        <div id="explore-container" className="image-container" onScroll={loadMore}></div>
        {/* <div onClick={loadMore}>Load More images</div> */}
      </div>
    </div>
  );
}

export default Explore;
