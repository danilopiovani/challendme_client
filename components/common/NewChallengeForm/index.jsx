import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Button, Input, Textarea } from 'components';
import { getFullDate } from 'tools/utils/getFullDate';
const NewChallengeForm = () => {
  const [formData, setFormData] = useState({
    challengeName: '',
    description: '',
    startDate: getFullDate(),
    period: '',
  });
  const [errorMessage, setErrorMessage] = useState({
    description: '',
    challengeName: '',
    startDate: '',
    period: '',
  });
  const handleAddClick = () => {
    const shallowErrorMessage = { ...errorMessage };
    !formData.description
      ? (shallowErrorMessage.description = 'Description is Required')
      : '';
    !formData.challengeName
      ? (shallowErrorMessage.challengeName = 'Name is Required')
      : '';
    !formData.startDate
      ? (shallowErrorMessage.startDate = 'Date is Required')
      : '';
    !formData.period ? (shallowErrorMessage.period = 'Required') : '';
    setErrorMessage(shallowErrorMessage);
    console.log('add');
    // will add to the database after validation
    // will validate name (required)
    // will validate description (required)
    // will validate start date (required)
    // will validate period (required)
    // will save on MongoDB
    // TODO: will add to the database after validation
  };

  return (
    <div className={styles.container}>
      <Input
        variant="outlined"
        // icon="BsEyeSlash"
        type="text"
        placeholder="Name"
        warning={errorMessage['challengeName']}
        onChange={(e) => {
          setFormData({ ...formData, challengeName: e.target.value });
          setErrorMessage({ ...errorMessage, challengeName: '' });
        }}
      />
      <Textarea
        type="text"
        placeholder="Description"
        rows="2"
        cols="33"
        onChange={(e) => {
          setFormData({ ...formData, description: e.target.value });
          setErrorMessage({ ...errorMessage, description: '' });
        }}
        value={formData?.description}
        warning={errorMessage['description']}
      />
      <div className={styles.dateWrapper}>
        <Input
          className={styles.inputDate}
          variant="outlined"
          type="date"
          defaultValue={getFullDate()}
          warning={errorMessage['date']}
          onChange={(e) => {
            setFormData({ ...formData, startDate: e.target.value });
            setErrorMessage({ ...errorMessage, startDate: '' });
          }}
        />
        <Input
          variant="outlined"
          type="number"
          placeholder="Period (Days)"
          warning={errorMessage['period']}
          onChange={(e) => {
            setFormData({ ...formData, period: e.target.value });
            setErrorMessage({ ...errorMessage, period: '' });
          }}
        />
      </div>
      <Button
        variant="btn--primary"
        size="btn--sm"
        active={false}
        icon="BiPlus"
        onClick={handleAddClick}
        className={styles.pageButton}
      >
        Add new challenge
      </Button>
    </div>
  );
};

export default NewChallengeForm;
