import React from 'react';
import NoSound from '../../assets/NoSound.mp4';
import './mainanimation.css'

function MainAnimation() {
  return (
     <div
          dangerouslySetInnerHTML={{
            __html: `<video className="aspect-w-16 aspect-h-9" autoplay loop muted playsinline>
      <source src=${NoSound} type="video/mp4" />
      Your browser does not support the video tag.
</video>`,
          }}
        />
  )
}

export default MainAnimation