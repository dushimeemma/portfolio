import React from 'react';

import Paragraph from '../Paragraph';

const Home = () => {
  return (
    <div
      className='min-h-screen w-full flex flex-row justify-between items-center flex-column'
      id='section-home'
    >
      <div className='w-full h-full flex flex-col justify-center items-start mx-8 flex-column-start'>
        <Paragraph>Hi, I'm Emmanuel Dushime</Paragraph>
        <Paragraph classes='capitalize text-red-400'>
          Full-Stack Software Developer.
        </Paragraph>
        <Paragraph classes='capitalize'>based in rwanda.</Paragraph>
      </div>
      <img
        src='./images/dushime-.png'
        alt=''
        className='w-full h-screen fixed-image'
      />
    </div>
  );
};

export default Home;
