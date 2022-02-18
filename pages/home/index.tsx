/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from 'next';

import styles from '../../styles/home/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container} id='home'>
      <div className={styles.leftWrapper}>
        <span className={styles.leftWrapperTitle}>
          Hi, I’m Emmanuel Dushime
        </span>
        <span className={styles.leftWrapperText}>
          Full stack Software Developer
        </span>
        <span className={styles.leftWrapperText}>Based at Kigali, Rwanda</span>
      </div>
      <div className={styles.rightWrapper} />
    </div>
  );
};

export default Home;
