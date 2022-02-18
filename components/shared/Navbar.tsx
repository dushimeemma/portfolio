import { useState, useEffect } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

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
  const [scrollDir, setScrollDir] = useState<string>('');

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? 'scrolling down' : 'scrolling up');
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);
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
                    <ScrollLink
                      className={styles.link}
                      smooth
                      activeClass={styles.currentNavLink}
                      to='home'
                      hashSpy
                      spy
                      offset={-80}
                      duration={1000}
                    >
                      Home
                    </ScrollLink>
                  </li>
                </motion.li>
                <motion.li variants={variantsListItems}>
                  <li className={styles.listItem}>
                    <ScrollLink
                      className={styles.link}
                      smooth
                      activeClass={styles.currentNavLink}
                      to='about'
                      hashSpy
                      spy
                      offset={-80}
                      duration={1000}
                    >
                      About
                    </ScrollLink>
                  </li>
                </motion.li>
                <motion.li variants={variantsListItems}>
                  <li className={styles.listItem}>
                    <ScrollLink
                      className={styles.link}
                      smooth
                      activeClass={styles.currentNavLink}
                      to='portfolio'
                      hashSpy
                      spy
                      offset={-80}
                      duration={1000}
                    >
                      Portfolio
                    </ScrollLink>
                  </li>
                </motion.li>
                <motion.li variants={variantsListItems}>
                  <li className={styles.listItem}>
                    <ScrollLink
                      className={styles.link}
                      smooth
                      activeClass={styles.currentNavLink}
                      to='contact'
                      hashSpy
                      spy
                      offset={-80}
                      duration={1000}
                    >
                      Contact
                    </ScrollLink>
                  </li>
                </motion.li>
              </motion.ul>
            </ul>
          </div>
        )}
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <ScrollLink
              className={styles.link}
              smooth
              activeClass={styles.currentNavLink}
              to='home'
              hashSpy
              spy
              offset={-80}
              duration={1000}
            >
              Home
            </ScrollLink>
          </li>

          <li className={styles.listItem}>
            <ScrollLink
              className={styles.link}
              smooth
              activeClass={styles.currentNavLink}
              to='about'
              hashSpy
              spy
              offset={-80}
              duration={1000}
            >
              About
            </ScrollLink>
          </li>

          <li className={styles.listItem}>
            <ScrollLink
              className={styles.link}
              smooth
              activeClass={styles.currentNavLink}
              to='portfolio'
              hashSpy
              spy
              offset={-80}
              duration={1000}
            >
              Portfolio
            </ScrollLink>
          </li>

          <li className={styles.listItem}>
            <ScrollLink
              className={styles.link}
              smooth
              activeClass={styles.currentNavLink}
              to='contact'
              hashSpy
              spy
              offset={-80}
              duration={1000}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
