import React from 'react';
import styles from './styles.module.scss';
import { NewChallengeForm, Header, Spacer } from 'components';
const Challenges = () => {
  const challengeList = [
    {
      id: 1,
      title: 'Challenge 1',
      description: 'This is a challenge',
      startDate: '2020-01-01',
      period: '30',
    },
    {
      id: 2,
      title: 'Challenge 2',
      description: 'This is a challenge',
      startDate: '2020-01-01',
      period: '30',
    },
    {
      id: 3,
      title: 'Challenge 3',
      description: 'This is a challenge',
      startDate: '2020-01-01',
      period: '30',
    },
    {
      id: 4,
      title: 'Challenge 4',
      description: 'This is a challenge',
      startDate: '2020-01-01',
      period: '30',
    },
  ];
  return (
    <div className={styles.mainContainer}>
      <Header />

      <div className={styles.newChallengeWrapper}>
        <NewChallengeForm />
      </div>
      <Spacer />

      <div className={styles.challengeListWrapper}>
        <div>My Challenges</div>
        <div className={styles.challengeList}>
          {challengeList.map((challenge) => (
            <div key={challenge.id} className={styles.challengeItem}>
              <div className={styles.challengeTitle}>{challenge.title}</div>
              <div>{challenge.startDate}</div>
              <div>{challenge.period}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenges;
