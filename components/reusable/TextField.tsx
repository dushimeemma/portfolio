import { ChangeEventHandler, FocusEventHandler } from 'react';

import styles from '../../styles/components/reusable/TextField.module.css';

export interface Props {
  label: string;
  name: string;
  containerStyle?: string;
  labelStyle?: string;
  inputStyle?: string;
  type: string;
  value?: string | any;
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

const TextField = ({
  label,
  name,
  containerStyle,
  labelStyle,
  inputStyle,
  type,
  value,
  placeholder,
  onChange,
  onBlur,
}: Props) => {
  return (
    <div className={`${styles.container} ${containerStyle}`}>
      <label className={`${styles.label} ${labelStyle}`} htmlFor='name'>
        {label}
      </label>
      <input
        name={name}
        className={`${styles.input} ${inputStyle}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default TextField;
