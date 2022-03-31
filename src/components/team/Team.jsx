import React from 'react';
import './team.css';
import User from '../../assets/user2.png';
import Andrew from '../../assets/andrew.jpeg';
import Cole from '../../assets/cole.jpeg';
import Ethan from '../../assets/ethan.jpeg';
import { SocialIcon } from 'react-social-icons';


function Team() {
  return (
    <section href="#team">
    <div className="container">

      <div className="card">
      <div className="content">
      <div className="imgBx">
        <img src={Cole} alt="" />
      </div>
      <div className="contentBx">
        <h3>Cole<br/><span>Co-Founder</span></h3>
      </div>
      </div>
      <ul className='sci'>
        <li className='1'>
       <SocialIcon url="https://linkedin.com/" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
         <li className='2'>
       <SocialIcon url="https://instagram.com/" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
         <li className='3'> 
       <SocialIcon url="https://discord.com/" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
      </ul>
      </div>

       <div className="card">
      <div className="content">
      <div className="imgBx">
        <img src={Ethan} alt="" />
      </div>
      <div className="contentBx">
        <h3>Ethan<br/><span>Co-Founder</span></h3>
      </div>
      </div>
      <ul className='sci'>
        <li className='1'>
       <SocialIcon url="https://linkedin.com/" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
         <li className='2'>
       <SocialIcon url="https://instagram.com/" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
         <li className='3'> 
       <SocialIcon url="https://discord.com/" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
      </ul>
      </div>

       <div className="card">
      <div className="content">
      <div className="imgBx">
        <img src={User} alt="" />
      </div>
      <div className="contentBx">
        <h3>Luke<br/><span>Co-Founder</span></h3>
      </div>
      </div>
      <ul className='sci'>
        <li className='1'>
       <SocialIcon url="https://linkedin.com/" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
         <li className='2'>
       <SocialIcon url="https://instagram.com/" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
         <li className='3'> 
       <SocialIcon url="https://discord.com/" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
      </ul>
      </div>
    </div>

    <div className="container">

      <div className="card">
      <div className="content">
      <div className="imgBx">
        <img src={Andrew} alt="" />
      </div>
      <div className="contentBx">
        <h3>Andrew<br/><span>Artist/Graphic Designer</span></h3>
      </div>
      </div>
      <ul className='sci'>
        <li className='1'>
       <SocialIcon url="https://linkedin.com/" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
         <li className='2'>
       <SocialIcon url="https://instagram.com/" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
         <li className='3'> 
       <SocialIcon url="https://discord.com/" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
      </ul>
      </div>

      <div className="card">
      <div className="content">
      <div className="imgBx">
        <img src={User} alt="" />
      </div>
      <div className="contentBx">
        <h3>Catherine<br/><span>Frontend Developer</span></h3>
      </div>
      </div>
      <ul className='sci'>
        <li className='1'>
       <SocialIcon url="https://linkedin.com/" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
         <li className='2'>
       <SocialIcon url="https://instagram.com/" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
         <li className='3'> 
       <SocialIcon url="https://discord.com/" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
      </ul>
      </div>

      <div className="card">
      <div className="content">
      <div className="imgBx">
        <img src={User} alt="" />
      </div>
      <div className="contentBx">
        <h3>Kurtis aka OutKrigh<br/><span>Fashion Designer</span></h3>
      </div>
      </div>
      <ul className='sci'>
        <li className='1'>
       <SocialIcon url="https://linkedin.com/" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
         <li className='2'>
       <SocialIcon url="https://instagram.com/" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
         <li className='3'> 
       <SocialIcon url="https://discord.com/" bgColor="#fff" style={{ height: 40, width: 40 }}/>
        </li>
      </ul>
      </div>

      </div>
    </section>
  )
}

export default Team