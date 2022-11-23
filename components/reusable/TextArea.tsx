import { ChangeEventHandler, FocusEventHandler } from 'react';

import styles from '../../styles/components/reusable/TextField.module.css';

export interface Props {
  label: string;
  name: string;
  containerStyle?: string;
  labelStyle?: string;
  inputStyle?: string;
  value?: string | any;
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
}

const TextArea = ({
  label,
  name,
  containerStyle,
  labelStyle,
  inputStyle,
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
      <textarea
        name={name}
        className={`${styles.input} ${inputStyle}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default TextArea;
