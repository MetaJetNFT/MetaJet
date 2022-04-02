import React from 'react';
import Metajet from '../../assets/Metajet.mp4';
import './mainanimation.css'

function MainAnimation() {
  return (
     <div
          dangerouslySetInnerHTML={{
            __html: `<video className="aspect-w-16 aspect-h-9" autoplay loop muted playsinline>
      <source src=${Metajet} type="video/mp4" />
      Your browser does not support the video tag.
</video>`,
          }}
        />
  )
}

export default MainAnimation