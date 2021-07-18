import React from 'react';

interface Props {
  children: any;
  classes?: any;
}

const LongParagraph = ({ children, classes }: Props) => {
  return (
    <p className={`text-sm font-thin m-4 text-gray-400 ${classes}`}>
      {children}
    </p>
  );
};

export default LongParagraph;
