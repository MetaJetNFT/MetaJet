import React from 'react';
import NoSound from '../../assets/NoSound.mp4';
import './mainanimation.css'

function MainAnimation() {
  return (
    <div>
      <video loop autoPlay muted>
        <source
          src={NoSound}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default MainAnimation