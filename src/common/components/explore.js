import React, {useState, useEffect} from 'react';
import Nav from './nav';
import Utils from '../js/utils';
import {storage} from '../../firebase/index';

import '../css/explore.scss';

function Explore() {

  const[flag, updateFlag] = useState(0);
  const[lastScrollTop, updatelastScrollTop] = useState(200);
  const[client, updateClient] = useState(null);

  useEffect(()=>{
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    isMobile ? updateClient("m") : updateClient("w");
    isMobile ? updatelastScrollTop(200) : updatelastScrollTop(20);
  },[client])

  let getURLS = (imgArr, startIndex, limit) => {
    imgArr = imgArr.slice(startIndex, startIndex+limit);
    let i = startIndex;
    imgArr.forEach( item => {
      item.getDownloadURL().then( urlImg => {
        let imagDyn = document.createElement('img');
        imagDyn.src = urlImg;
        imagDyn.className = "explore-image image-no-" + (++i);
        imagDyn.alt = "image-number-" + (i);
        imagDyn.addEventListener("click", () => {
          console.log("abcd")
        })
        // innerContent = innerContent + `<img class="explore-image image-no-${i++}" src="${urlImg}" alt="image number ${i}"/>`;
        document.querySelector('#explore-container').appendChild(imagDyn);
      });
    })
  }

  let loadMore = () => {
    var st = document.querySelector('.container').scrollTop;
    if (st > lastScrollTop){
      updatelastScrollTop(st <= 0 ? 0 : (st + 200));
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
      getURLS(resArr, flag, 8);
    })
  }, [flag]);

  return (
    <div className="App">
    <Nav page="e"/>
      <div className="container" onScroll={Utils.debounce(loadMore, 500)}>
        <h2>Explore</h2>
        <div id="explore-container" className="image-container"></div>
      </div>
    </div>
  );
}

export default Explore;
