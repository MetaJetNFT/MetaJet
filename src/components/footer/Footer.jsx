import React from 'react'
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div class="w-full min-h-fit flex items-center justify-center black py-10">
      <div class="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div class="flex flex-col">
          <hr class="border-gray-600" />
          <div class="flex mt-4 mb-10 flex-row justify-center">
            <a
              href="#crewpass"
              class="mx-10 hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase"
            >
              About Us
            </a>
            <a
              href="#roadmap"
              class="mx-10 hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase"
            >
              Road Map
            </a>
            <a
              href="#team"
              class="mx-10 hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase"
            >
              Team
            </a>
          </div>

          <div class="flex mt-1 mb-12 flex-row justify-center list-none">
            <li class="mt-4 lg:inline-block lg:mt-0 mr-4">
              <SocialIcon
                url="https://twitter.com/MetaJetNFT"
                bgColor="#fff"
                style={{ height: 40, width: 40 }}
              />
            </li>
            <li class="block mt-4 lg:inline-block lg:mt-0  mr-4">
              <SocialIcon
                url="https://www.instagram.com/metajetnft.io/"
                bgColor="#fff"
                style={{ height: 40, width: 40 }}
              />
            </li>
            <li class="block mt-4 lg:inline-block lg:mt-0  mr-4">
              <SocialIcon
                url="https://discord.com/invite/Rkx5Zkc2QH"
                bgColor="#fff"
                style={{ height: 40, width: 40 }}
              />
            </li>
            <li class="block mt-4 lg:inline-block lg:mt-0  mr-4">
              <SocialIcon
                url="https://www.linkedin.com/company/meta-jet/"
                bgColor="#fff"
                style={{ height: 40, width: 40 }}
              />
            </li>
          </div>
          <hr class="border-gray-600" />
          <p class="w-full text-center my-12 text-gray-600">
            Copyright © 2022 MetaJet
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer