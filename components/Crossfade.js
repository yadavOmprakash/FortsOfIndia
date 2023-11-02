import React from 'react'
import BannerVid from '../image/Homebanner.mp4';
import './CrossfadeVid';
function Crossfade() {

  return (
    <div className='parent-container'>

      <video id="video" autoPlay loop muted playsInline className='videobanner'>
        <source src={BannerVid} type='video/mp4' />
      </video>
      <div className='homecover'>
        <h2>Immerse in the<br/>INDIAN CULTURE</h2>
      </div>
      {/*  */}
      
      <div className="play-pause-btn" data-click="0">Pause</div>
    </div>
  )
}

export default Crossfade
