import React from 'react';
import crewpass from '../../assets/crewpass.png';
import './crewpass.css';

const CrewPass = () => (
  <div className="gpt3__header section__padding" id="crewpass">
    <div className="gpt3__header-content">
      <h1 className="neonlogo">CREW PASS</h1>
      <h4>50% of all royalties from Crew Passes will go back to the Crew Pass holders.  We would like to airdrop it through a monthly snapshot but we are still working through the legality of that.  In the meantime, it will get back to our holders in one way, whether that's through buying whitelist spots, NFT giveaways, or whatever other way our community can think.  </h4>
    

    </div>

    <div className="gpt3__header-image">
      <img src={crewpass} alt="crewpass"/>
    </div>
  </div>

);

export default CrewPass;