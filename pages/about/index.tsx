/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from 'next';
import Image from 'next/image';

import styles from '../../styles/about/About.module.css';

import { skills } from '../../stub/skills';

const About: NextPage = () => {
  return (
    <div className={styles.container} id='about'>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div className={styles.skillContainer} key={index + 1}>
            <Image src={skill.imageUrl} width={200} height={188.3} />
            <span className={styles.skillTitle}>{skill.title}</span>
          </div>
        ))}
      </div>
      <div className={styles.about}>
        <span className={styles.aboutTitle}>About Me</span>
        <p className={styles.aboutContent}>
          I am a full-stack software engineer with over 2 years of experience,
          passionate about identifying, analyzing and defining problems and
          working with others to develop efficient solutions. I love to work in
          environments where I am constantly challenged to produce excellent
          outputs and to be creative in solving problems.
        </p>
      </div>
    </div>
  );
};

export default About;
