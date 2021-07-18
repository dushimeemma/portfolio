import React from 'react';

interface Props {
  name: string;
  cols?: number;
  rows?: number;
  children?: any;
  classes?: string;
}

const FormTextArea = ({ name, cols, rows, children, classes }: Props) => {
  return (
    <textarea
      name={name}
      cols={cols}
      rows={rows}
      className={`w-full bg-transparent p-2 rounded border-2 border-gray-400 my-2 text-gray-400 ${classes}`}
    >
      {children}
    </textarea>
  );
};

export default FormTextArea;
