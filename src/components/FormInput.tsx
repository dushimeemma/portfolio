import React from 'react';

interface Props {
  type: string;
  name: string;
  placeholder?: string;
  classes?: string;
  onChange?: any;
}

const FormInput = ({ type, name, placeholder, classes, onChange }: Props) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`w-full bg-transparent p-2 rounded border-2 border-gray-400 my-2 ${classes}`}
    />
  );
};

export default FormInput;
