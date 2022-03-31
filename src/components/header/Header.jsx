import React from 'react'
import './header.css';
import { SocialIcon } from 'react-social-icons';

function ScrollToId(e){
  window.location.href="#team";
}

function Header() {
  return(
         <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#crewpass">Crewpass</a></li>
	         <li><a className="smoothscroll" href="#roadmap">Roadmap</a></li>
            <li><a className="smoothscroll" href="#team">Team</a></li>
            <li><a className="smoothscroll" href="#marketplace">Marketplace</a></li>
         </ul>

         <ul className='sci'>
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