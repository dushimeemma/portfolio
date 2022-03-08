/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Link as ScrollLink } from 'react-scroll';

import styles from '../../styles/components/shared/Button.module.css';

const Button = () => {
  return (
    <ScrollLink
      smooth
      activeClass='active'
      to='home'
      hashSpy
      spy
      offset={-80}
      duration={1000}
    >
      <button className={styles.container}>
        <img
          src='/images/arrow-up.svg'
          width={40}
          height={40}
          className={styles.imageButton}
        />
      </button>
    </ScrollLink>
  );
};
export default Button;
