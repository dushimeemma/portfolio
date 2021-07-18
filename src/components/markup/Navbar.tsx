import React, { useState } from 'react';
import Scrollspy from 'react-scrollspy';

import Logo from '../Logo';
import SocialIcon from '../SocialIcon';

const Navbar = () => {
  const [url, setUrl] = useState('');
  const [displayMenu, setDisplayMenu] = useState(false);
  const handleOpenLinkedIn = () => {
    setUrl('https://www.linkedin.com/in/emma-papy-dushime-7b9907147/');
  };
  const handleOpenGitHub = () => {
    setUrl('https://github.com/dushimeemma');
  };
  const handleOpenTwitter = () => {
    setUrl('https://twitter.com/emma_papy');
  };
  const handleOpenInstagram = () => {
    setUrl('https://www.instagram.com/papy_dushime/');
  };

  const handleOpenMenu = () => {
    setDisplayMenu(true);
  };

  const handleCloseMenu = () => {
    setDisplayMenu(false);
  };

  return (
    <>
      <div
        onClick={handleCloseMenu}
        className={`min-h-screen flex flex-col justify-start items-start w-3/4 fixed z-40 image ${
          !displayMenu && 'hidden'
        }`}
      >
        <SocialIcon
          onClick={handleCloseMenu}
          classes='h-8 w-8 rounded-full border-2 border-red-400 text-red-400 p-3 flex justify-center items-center mt-8 mx-8'
        >
          <i className='fas fa-times'></i>
        </SocialIcon>
        <Scrollspy
          items={[
            'section-home',
            'section-about',
            'section-portfolio',
            'section-contact',
          ]}
          currentClassName='border-b-2 border-red-400 text-red-400'
          className='flex flex-col justify-start items-start text-lg text-white font-bold mx-16 cursor-pointer capitalize'
        >
          <li className='mx-5 my-5'>
            <a href='#section-home'>Home</a>
          </li>
          <li className='mx-5 my-5'>
            <a href='#section-about'>About</a>
          </li>
          <li className='mx-5 my-5'>
            <a href='#section-portfolio'>Portfolio</a>
          </li>
          <li className='mx-5 my-5'>
            <a href='#section-contact'>Contact</a>
          </li>
        </Scrollspy>
      </div>
      <div className='w-full shadow flex flex-row justify-between items-center fixed z-10'>
        <div className='w-full h-32 flex flex-row justify-start items-center'>
          <Logo />
          <Scrollspy
            items={[
              'section-home',
              'section-about',
              'section-portfolio',
              'section-contact',
            ]}
            currentClassName='border-b-2 border-red-400 text-red-400'
            className='flex flex-row justify-start items-center text-lg text-white font-bold mx-4 cursor-pointer capitalize visible-nav-item'
          >
            <li className='mx-2'>
              <a href='#section-home'>Home</a>
            </li>
            <li className='mx-2'>
              <a href='#section-about'>About</a>
            </li>
            <li className='mx-2'>
              <a href='#section-portfolio'>Portfolio</a>
            </li>
            <li className='mx-2'>
              <a href='#section-contact'>Contact</a>
            </li>
          </Scrollspy>
        </div>

        <div className='flex flex-row justify-end items-center text-white my-8'>
          <SocialIcon
            onClick={handleOpenLinkedIn}
            href={url && url}
            classes='ml-4'
          >
            <i className='fab fa-linkedin-in'></i>
          </SocialIcon>
          <SocialIcon
            onClick={handleOpenGitHub}
            href={url && url}
            classes='ml-4'
          >
            <i className='fab fa-github'></i>
          </SocialIcon>
          <SocialIcon
            onClick={handleOpenTwitter}
            href={url && url}
            classes='ml-4'
          >
            <i className='fab fa-twitter'></i>
          </SocialIcon>
          <SocialIcon
            onClick={handleOpenInstagram}
            href={url && url}
            classes='ml-4 md:mr-4'
          >
            <i className='fab fa-instagram'></i>
          </SocialIcon>
          <SocialIcon
            classes='h-12 w-12 ml-4 mr-4 rounded border-2 border-white-400 text-white-400 p-3 flex justify-center items-center hidden visible'
            onClick={handleOpenMenu}
          >
            <i className='fas fa-bars'></i>
          </SocialIcon>
        </div>
      </div>
    </>
  );
};

export default Navbar;
