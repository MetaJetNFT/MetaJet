import 'font-awesome/css/font-awesome.min.css';
import { FaBars } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';
import React from "react"

const Header = () => {
  const [headerOpen, setHeaderOpen] = React.useState(false);
  return (
    <nav className="relative flex flex-wrap py-3">
      {/* button on mobile */}
      <button
        className="text-white mx-auto cursor-pointer text-xl leading-none px-3 py-1 border border-solid block lg:hidden outline-none focus:outline-none"
        type="button"
        onClick={() => setHeaderOpen(!headerOpen)}
      >
        <FaBars color="#FFFF" />
      </button>

      <div
        className={
          "lg:flex flex-grow lg:justify-center items-center" +
          (headerOpen ? " flex flex-col" : " hidden")
        }
      >
        <a href="#crewpass" className="neonlogo">
          Crewpass
        </a>
        <a href="#roadmap" className="neonlogo">
          RoadMap
        </a>
        <a href="#team" className="neonlogo">
          Team
        </a>
        <div>
          <SocialIcon
            className="mr-4"
            url="https://twitter.com/MetaJetNFT"
            bgColor="#fff"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            className="mr-4"
            url="https://www.instagram.com/metajetnft.io/"
            bgColor="#fff"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            className="mr-4"
            url="https://discord.com/invite/Rkx5Zkc2QH"
            bgColor="#fff"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            className="mr-4"
            url="https://www.linkedin.com/company/meta-jet/"
            bgColor="#fff"
            style={{ height: 40, width: 40 }}
          />
        </div>
        <div>
          <a
            href="#home"
            class="text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-white hover:text-pink-500 hover:bg-black mt-4 lg:mt-0"
          >
            Marketplace
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header