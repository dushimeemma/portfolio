import React from 'react';

import Button from '../Button';
import FormInput from '../FormInput';
import FormTextArea from '../FormTextArea';
import LongParagraph from '../LongParagraph';
import Paragraph from '../Paragraph';
import SidebarImage from '../SidebarImage';

const Contact = () => {
  return (
    <div
      className='min-h-screen w-full flex flex-row justify-around items-center mt-20 flex-column'
      id='section-contact'
    >
      <div className='w-full h-full flex flex-col justify-center items-start m-8 py-2 px-8'>
        <Paragraph>Hire Me.</Paragraph>
        <LongParagraph>
          I am available for Freelance Jobs connect with me via Phone
          <b className='text-white m-1'>+250789078834</b> or Email
          <b className='text-white m-1'>dushimeemma@gmail.com</b>
        </LongParagraph>
        <form className='w-full flex flex-col justify-center items-start my-8'>
          <FormInput type='text' name='name' placeholder='Your Full Name*' />
          <FormInput type='email' name='email' placeholder='Your Email*' />
          <FormInput type='text' name='title' placeholder='Subject' />
          <FormTextArea name='message' cols={3} rows={3}>
            Your Message
          </FormTextArea>
          <Button classes='text-white w-48 bg-red-400 mt-2 py-2 border-0 border-red-400'>
            Submit
          </Button>
        </form>
      </div>
      <SidebarImage image='dushime--.png' />
    </div>
  );
};

export default Contact;
