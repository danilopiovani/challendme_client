import React, { useEffect } from 'react';
// Style
import styles from './styles.module.scss';
// Tools
import { useSettingsStore } from 'tools/store';
// import {SecondaryPackaging} from 'components';

const index = (props) => {
  // props
  const { className } = props;

  // hooks
  const modal = useSettingsStore((state) => state.modal);
  const setModal = useSettingsStore((state) => state.setModal);

  // functions
  const closeModal = () => {
    setModal(false);
  };

  // Keep modals organised
  const modalMapping = {
    addRange: <div className={styles.topLeft}>Test</div>,
  };

  return (
    <div
      className={`${styles.modalWrapper} ${
        modal.isOpen ? styles.modalOpen : ''
      } ${className ?? ''} ${
        modal?.modalProps?.classname && styles[modal?.modalProps?.classname]
      }`}
    >
      {modalMapping[modal?.modalName]}
    </div>
  );
};

export default index;
