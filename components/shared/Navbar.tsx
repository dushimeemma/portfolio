import { useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { motion } from 'framer-motion';

import styles from '../../styles/components/shared/Navbar.module.css';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variantsListItems = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(true);
  return (
    <>
      <div className={styles.container}>
        {showMenu && (
          <button
            type='button'
            className={styles.menuButton}
            onClick={() => setShowMenu(!showMenu)}
          >
            <MenuOutlinedIcon />
          </button>
        )}
        {!showMenu && (
          <div className={styles.dropdownMenu}>
            <button
              type='button'
              className={styles.menuButton}
              onClick={() => setShowMenu(!showMenu)}
            >
              <ClearOutlinedIcon className='text-white' />
            </button>
            <ul className={styles.dropdownList}>
              <motion.ul variants={variants}>
                <motion.li variants={variantsListItems}>
                  <li className={styles.listItem}>
                    <a href='#' className={styles.link}>
                      Home
                    </a>
                  </li>
                </motion.li>
                <motion.li variants={variantsListItems}>
                  <li className={styles.listItem}>
                    <a
                      href='#'
                      className={`border-b-2 border-secondary md:border-primary ${styles.link}`}
                    >
                      About
                    </a>
                  </li>
                </motion.li>
                <motion.li variants={variantsListItems}>
                  <li className={styles.listItem}>
                    <a href='#' className={styles.link}>
                      Portfolio
                    </a>
                  </li>
                </motion.li>
                <motion.li variants={variantsListItems}>
                  <li className={styles.listItem}>
                    <a href='#' className={styles.link}>
                      Contact
                    </a>
                  </li>
                </motion.li>
              </motion.ul>
            </ul>
          </div>
        )}
        <ul className={styles.list}>
          <li>
            <a href='#' className={styles.link}>
              Home
            </a>
          </li>
          <li>
            <a href='#' className={`border-b-2 border-primary ${styles.link}`}>
              About
            </a>
          </li>
          <li>
            <a href='#' className={styles.link}>
              Portfolio
            </a>
          </li>
          <li>
            <a href='#' className={styles.link}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
