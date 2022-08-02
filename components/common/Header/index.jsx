import React from 'react';
import styles from './styles.module.scss';
const Header = () => {
  return (
    <div className={styles.mainContainer}>
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
          <span>Challenges</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
