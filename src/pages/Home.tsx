import { useState, useEffect } from 'react';
import Me from '../assets/darkMe.svg';
import LightMe from '../assets/lightMe.png';
import LinkedIn from '../assets/linkedin.svg';
import Gmail from '../assets/gmail.svg';
import Whatsapp from '../assets/whatsapp.svg';
import Instagram from '../assets/instagram.svg';
import SocialIcon from '../components/SocialIcon';
import Resume from '../assets/resume.svg';
import GitHub from '../assets/github.svg';
import HouseInRwanda from '../assets/houseinrwanda.png';
import Eshuri from '../assets/eshuri.png';
import ActionButton from '../components/ActionButton';
import QRCode from 'react-qr-code';
import {
  EMAIL_ME,
  ESHURI,
  GITHUB_ME,
  HOUSEINRWANDA,
  INSTAGRAM_ME,
  LINKEDIN_ME,
  RESUME,
  WHATSAPP_ME,
} from '../utils/constants';

enum Theme {
  dark,
  light,
}

const Home = () => {
  const [showAbout, setShowAbout] = useState<boolean>(false);
  const [theme, setTheme] = useState<Theme>(Theme.dark);
  const handleOpenMessageLinks = (link: string) =>
    window.open(link, '_blank', 'noopener noreferrer');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (theme === Theme.light) {
        setTheme(Theme.dark);
      } else {
        setTheme(Theme.light);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [theme]);

  return (
    <div className='flex flex-col sm:flex-row'>
      <div
        className={`min-h-screen w-screen sm:w-1/2 flex flex-col justify-around items-start bg-primary text-white md:text-2xl  ${
          !showAbout ? 'flex sm:flex' : 'hidden sm:flex'
        }`}
      >
        <span className='mt-12 ml-6 font-bold'>Hi there 👋,</span>
        <div className='w-[16rem] lg:w-[32rem] h-[16rem] lg:h-[32rem] self-center'>
          <img
            src={theme === Theme.dark ? Me : LightMe}
            className='w-full'
          />
        </div>

        <span className='self-end mb-3 md:mb-12 mr-6'>
          I'm <span className='font-bold'>Emmanuel Dushime</span>
        </span>
        <ActionButton
          label='Next →'
          onClick={() => setShowAbout(true)}
          classes='sm:hidden'
        />
      </div>

      <div
        className={`sm:min-h-screen w-screen sm:w-1/2 flex flex-col justify-start md:justify-center bg-white text-primary p-6 md:p-24 ${
          showAbout ? 'flex sm:flex' : 'hidden sm:flex'
        }`}
      >
        <span className='font-bold my-3'>Scan Me</span>
        <div className='w-[24rem]'>
          <QRCode value={RESUME} />
        </div>

        <div className='my-6 flex flex-col'>
          <span className='font-bold my-3'>Reach out to me</span>
          <div className='flex'>
            <SocialIcon
              icon={Gmail}
              classes='mr-3'
              onClick={() => handleOpenMessageLinks(EMAIL_ME)}
            />
            <SocialIcon
              icon={Whatsapp}
              classes='mx-3'
              onClick={() => handleOpenMessageLinks(WHATSAPP_ME)}
            />
            <SocialIcon
              icon={Instagram}
              classes='mx-3'
              onClick={() => handleOpenMessageLinks(INSTAGRAM_ME)}
            />
            <SocialIcon
              icon={LinkedIn}
              classes='mx-3'
              onClick={() => handleOpenMessageLinks(LINKEDIN_ME)}
            />
          </div>
        </div>
        <div className='mb-6 flex flex-col'>
          <span className='font-bold my-3'>Experience</span>
          <div className='flex'>
            <SocialIcon
              icon={LinkedIn}
              classes='mr-3'
              onClick={() => handleOpenMessageLinks(LINKEDIN_ME)}
            />
            <SocialIcon
              icon={Resume}
              classes='mx-3'
              onClick={() => handleOpenMessageLinks(RESUME)}
            />
            <SocialIcon
              icon={GitHub}
              classes='mx-3'
              onClick={() => handleOpenMessageLinks(GITHUB_ME)}
            />
          </div>
        </div>
        <div className='mb-6 flex flex-col'>
          <span className='font-bold my-3'>Projects</span>
          <div className='flex'>
            <SocialIcon
              icon={HouseInRwanda}
              classes='mr-3'
              onClick={() => handleOpenMessageLinks(HOUSEINRWANDA)}
            />
            <SocialIcon
              icon={Eshuri}
              classes='mx-3'
              onClick={() => handleOpenMessageLinks(ESHURI)}
            />
          </div>
        </div>
        <ActionButton
          label='← Prev'
          onClick={() => setShowAbout(false)}
          classes='sm:hidden'
        />
      </div>
    </div>
  );
};

export default Home;
