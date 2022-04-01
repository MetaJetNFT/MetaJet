import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { FaBars } from 'react-icons/fa'


export default function Header({ fixed }) {
  const [headerOpen, setHeaderOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-pink"
              href="#pablo"> </a>
            <button className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-pink rounded bg-pink block lg:hidden outline-none focus:outline-none"
              type="button" onClick={() => setHeaderOpen(!headerOpen)}><FaBars color='pink'/></button>
          </div>
          <div className={"lg:flex flex-grow items-center" +
              (headerOpen ? " flex" : " hidden")}
            id="example-navbar-danger">

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

