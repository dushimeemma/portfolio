import React from 'react';

interface Props {
  children: any;
  classes?: any;
}

const Paragraph = ({ children, classes }: Props) => {
  return (
    <p className={`text-3xl font-extrabold text-white m-4 ${classes}`}>
      {children}
    </p>
  );
};

export default Paragraph;
