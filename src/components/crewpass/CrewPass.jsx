import React from 'react';
import crewpass from '../../assets/crewpass.png';
import './crewpass.css';

const CrewPass = () => (
  <div className="gpt3__header section__padding" id="crewpass">
    <div className="gpt3__header-content">
      <h1 className="neonlogo">WHAT IS THE CREW PASS</h1>
      <p>
        50% of all royalties from Crew Passes will go back to the Crew Pass
        holders. We would like to airdrop it through a monthly snapshot but we
        are still working through the legality of that. In the meantime, it will
        get back to our holders in one way, whether that's through buying
        whitelist spots, NFT giveaways, or whatever other way our community can
        think.
      </p>
      <p>
        Automatic whitelist to all of our future collections. MetaJet will be
        launching at least two more collections after the Crew Pass, which will
        consist of PFPs and other art. Crew Pass holders will get automatic
        whitelist to these collections.
      </p>
      <p>
        Raffles/giveaways. There will be monthly giveaways only for Crew Pass
        holders, even when our other collections are launched.
      </p>
      <p>
        Designer Merchandise. MetaJets first designer merchandise collection
        will be 500 pieces that can only be claimed by Crew Pass Minters. We aim
        to make these designer pieces as cheap as possible if not free for our
        Crew Pass holders. We are working closely with fashion designer OutKrigh
        to make the highest quality apparel possible, that you will love to flex
        on the street. In order to claim the piece, minters will have to still
        be holding the Crew Pass once we use the funding from the Crew Pass mint
        to produce the pieces. Our aim is to have the collection ready a month
        after sellout.
      </p>
      <p>
        Exclusive Jet Talks. Jet talks will be our spin on "Ted Talks". We will
        have monthly talks from academics, celebrities, CEOs, business
        professionals and more. These talks at first will be exclusive solely to
        Crew Pass holders, where they will be able to ask their own questions
        and be provided with the best and most exclusive information possible
      </p>
      <p>
        Voting for major decisions with Collections one and two such as; Supply,
        Art, Utility, and more
      </p>
      <p>
        Holding 2x of the Crew Pass will get you a free mint of Collection one
        when it drops.
      </p>
    </div>

    <div className="gpt3__header-image">
      <img src={crewpass} alt="crewpass" />
    </div>
  </div>
);

export default CrewPass;