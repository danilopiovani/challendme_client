import React, { useState } from 'react';
import styles from './styles.module.scss';
import { useSettingsStore } from '/tools/store/';
const Textarea = (props) => {
  const {
    cols = 30,
    rows = 10,
    placeholder,
    className,
    warning,
    value = '',
    onChange,
    ...newProps
  } = props;
  const { darkMode } = useSettingsStore();
  return (
    <div className={styles.textareaWrapper}>
      <textarea
        {...newProps}
        placeholder={placeholder}
        className={`${styles.textarea} ${className}`}
        onBlur={() => setIsFocus(false)}
        onFocus={() => setIsFocus(true)}
        name=""
        cols={cols}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e)}
      />
      {!!warning && (
        <div className={`${styles.warning} ${darkMode ? styles.darkMode : ''}`}>
          {warning}
        </div>
      )}
    </div>
  );
};

export default Textarea;
