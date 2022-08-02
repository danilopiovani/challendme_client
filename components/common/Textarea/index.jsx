import React, { useState } from 'react';
import styles from './styles.module.scss';

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
  const [isFocus, setIsFocus] = useState(false);
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
      {!!warning && <div className={`${styles.warning}`}>{warning}</div>}
    </div>
  );
};

export default Textarea;
