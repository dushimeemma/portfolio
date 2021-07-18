import React from 'react';

interface Props {
  children: any;
  classes?: string;
  onClick?: any;
}

const NavTextItem = ({ children, classes, onClick }: Props) => {
  return (
    <h3
      onClick={onClick}
      className={`text-lg text-white font-bold mx-4 cursor-pointer capitalize ${classes}`}
    >
      {children}
    </h3>
  );
};

export default NavTextItem;
