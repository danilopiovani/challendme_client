import React from 'react';
import styles from './styles.module.scss';
import { useSettingsStore } from '/tools/store/';
const Header = () => {
  const { darkMode, toggleDarkMode } = useSettingsStore();
  return (
    <div className={`${styles.mainContainer} ${darkMode ? styles.dark : ''}`}>
      <div className={styles.logoContainer}>
        <div className={styles.logoSquare}>
          <span>ChallendMe</span>
        </div>
      </div>
      <div className={styles.navContainer}>
        <div className={styles.navItem}>
          <span>Home</span>
        </div>
        <div className={styles.navItem}>
          <span onClick={() => toggleDarkMode()}>My Challenges</span>
        </div>
        <div className={styles.navItem}>
          <span onClick={() => toggleDarkMode()}>Top Challenges</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
