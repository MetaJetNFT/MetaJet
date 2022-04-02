import React from 'react';
import crewpass from '../../assets/crewpass.png';
import './crewpass.css';

const CrewPass = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Crew Pass</h1>
      <p>The Crew Pass is the foundation of MetaJet and our future endeavors.  It will provide assets for its holders that will not be available for non crew pass holders.  MetaJet is here to stay and provide unparalleled utility to our earliest supporters, that is why 25% of all royalties MetaJet makes off of sales will be airdropped back to our Crew Pass holders monthly.  The Crew Pass will provide automatic whitelist and presale access to collection one and two and enter each holder into exclusive raffles and giveaways.  Holding the Crew Pass will also give each holder access to an exclusive merchandise store created by professional designers.  And wait… there’s more, holding 2x or more Crew Passes will get you a free mint of Collection One. </p>

    </div>

    <div className="gpt3__header-image">
      <img src={crewpass} alt="crewpass"/>
    </div>
  </div>
);

export default CrewPass;