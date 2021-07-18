import React from 'react';

interface Props {
  classes?: any;
  children: any;
}

const Button = ({ classes, children }: Props) => {
  return (
    <button
      className={`px-3 py-1 rounded shadow-lg border-2 border-gray-400 ${classes}`}
    >
      {children}
    </button>
  );
};

export default Button;
