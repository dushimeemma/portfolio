/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from 'next';
import Image from 'next/image';

import styles from '../../styles/portfolio/Portfolio.module.css';

import { projects } from '../../stub/projects';

const Portfolio: NextPage = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Projects</span>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div key={index + 1} className='my-5'>
            <Image
              src={project.imageUrl}
              width={280}
              height={550}
              className='cursor-pointer'
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Portfolio;
