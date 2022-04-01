import React from 'react'
import { SocialIcon } from 'react-social-icons';


function Header() {
  return(
<nav class="flex items-center justify-between flex-wrap bg-black-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">

  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-black-200 border-black-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-pink-200 hover:text-white mr-4">
        Crewpass
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-pink-200 hover:text-white mr-4">
        RoadMap
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-pink-200 hover:text-white mr-4">
        Team
      </a>
    
    </div>
    <div>
      <a href="#responsive-header" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-white hover:text-pink-500 hover:bg-black mt-4 lg:mt-0">Marketplace</a>
    </div>
  </div>
  <ul class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
         <li >
       <SocialIcon url="https://twitter.com/metajetnft?s=21" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
        <li >
       <SocialIcon url="https://linkedin.com/" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
         <li>
       <SocialIcon url="https://instagram.com/" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
         <li > 
       <SocialIcon url="https://discord.com/" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
        </ul>
</nav>
  );
}

export default Header;