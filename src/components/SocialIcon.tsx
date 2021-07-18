import React from 'react';

interface Props {
  children: any;
  onClick?: any;
  classes?: any;
  href?: any;
}

const SocialIcon = ({ children, onClick, classes, href }: Props) => {
  return (
    <a
      className={`cursor-pointer ${classes}`}
      onClick={onClick}
      href={href}
      target='_blank'
    >
      {children}
    </a>
  );
};

export default SocialIcon;
