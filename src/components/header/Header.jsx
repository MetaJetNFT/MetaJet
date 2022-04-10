import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { FaBars } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';



export default function Header({ fixed }) {
  const [headerOpen, setHeaderOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a href="#" className="leading-relaxed inline-block mr-4 py-2"> </a>

              {/* button on mobile */}
            <button className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-pink rounded bg-pink block lg:hidden outline-none focus:outline-none"
              type="button" onClick={() => setHeaderOpen(!headerOpen)}><FaBars color='#8122b2'/></button>
          </div>
          <div className={"lg:flex flex-grow items-center" +
              (headerOpen ? " flex" : " hidden")}
            id="example-navbar-danger">

              <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
         <div class="text-sm lg:flex-grow">
      <a href="#crewpass" class="block mt-4 lg:inline-block lg:mt-0 text-purple-600 hover:text-white mr-4" className="neonlogo">
        Crewpass 
        </a>
      <a href="#roadmap" class="block mt-4 lg:inline-block lg:mt-0 text-purple-600 hover:text-white mr-4" className="neonlogo">
        RoadMap
      </a>
      <a href="#team" class="block mt-4 lg:inline-block lg:mt-0 text-purple-600 hover:text-white mr-4" className="neonlogo">
        Team
        </a>
        </div>

        
        </div>
                

      
      <div class="text-sm lg:flex-grow">
         <li class="block mt-4 lg:inline-block lg:mt-0 mr-4">
       <SocialIcon url="https://twitter.com/MetaJetNFT" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
         <li class="block mt-4 lg:inline-block lg:mt-0  mr-4">
       <SocialIcon url="https://www.instagram.com/metajetnft.io/" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
         <li class="block mt-4 lg:inline-block lg:mt-0  mr-4"> 
       <SocialIcon url="https://discord.com/invite/Rkx5Zkc2QH" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
        <li class="block mt-4 lg:inline-block lg:mt-0  mr-4">
       <SocialIcon url="https://www.linkedin.com/company/meta-jet/" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
      </div>

            <div>
              <a href="#responsive-header" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-white hover:text-pink-500 hover:bg-black mt-4 lg:mt-0">Marketplace</a>
            </div>
   
      </div>
        </div>
      </nav>
    </>
  );
}

