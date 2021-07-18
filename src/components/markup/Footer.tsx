import React, { useState } from 'react';

import Logo from '../Logo';
import Paragraph from '../Paragraph';
import SocialIcon from '../SocialIcon';

const Footer = () => {
  const [url, setUrl] = useState('');
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
  return (
    <div
      className='h-32 w-full flex flex-row justify-around items-center image flex-column'
      id='section-footer'
    >
      <div className='flex flex-row justify-start items-center'>
        <Logo />
        <Paragraph classes='text-white -ml-5'> KIGC Ltd.</Paragraph>
      </div>
      <div className='flex flex-row justify-end items-center text-white mx-8'>
        <SocialIcon
          onClick={handleOpenLinkedIn}
          href={url && url}
          classes='h-8 w-8 mx-4 rounded-full border-2 border-white p-3 flex justify-center items-center'
        >
          <i className='fab fa-linkedin-in'></i>
        </SocialIcon>
        <SocialIcon
          onClick={handleOpenGitHub}
          href={url && url}
          classes='h-8 w-8 mx-4 rounded-full border-2 border-white p-3 flex justify-center items-center'
        >
          <i className='fab fa-github'></i>
        </SocialIcon>
        <SocialIcon
          onClick={handleOpenTwitter}
          href={url && url}
          classes='h-8 w-8 mx-4 rounded-full border-2 border-white p-3 flex justify-center items-center'
        >
          <i className='fab fa-twitter'></i>
        </SocialIcon>
        <SocialIcon
          onClick={handleOpenInstagram}
          href={url && url}
          classes='h-8 w-8 mx-4 rounded-full border-2 border-white p-3 flex justify-center items-center'
        >
          <i className='fab fa-instagram'></i>
        </SocialIcon>
      </div>
      <div className='flex flex-row justify-start items-center m-8'>
        <p className='capitalize text-white text-center'>
          &copy; KIGC Ltd. {new Date().getFullYear()} | Allrights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
