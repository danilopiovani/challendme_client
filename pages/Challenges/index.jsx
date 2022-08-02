import React from 'react';
import styles from './styles.module.scss';
import { NewChallengeForm, Header, Spacer } from 'components';
const Challenges = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />

      <div className={styles.newChallengeWrapper}>
        <NewChallengeForm />
      </div>
      <Spacer />

      <div className={styles.challengeList}>Challend List</div>
    </div>
  );
};

export default Challenges;
