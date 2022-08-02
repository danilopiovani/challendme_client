import React from 'react';
import styles from './styles.module.scss';
import { BsEye, BsEyeSlash, BsCalendar } from 'react-icons/bs';

const variantList = ['filled', 'standard', 'outlined'];
const sizeList = ['sm', 'md', 'lg'];
const iconList = ['BsEye', 'BsEyeSlash'];
const warningStyleList = ['warning', 'danger', 'info', 'success'];
const typeList = ['text', 'date', 'email', 'password', 'number'];

const Input = (props) => {
  const {
    warning,
    warningType,
    className,
    type,
    defaultValue,
    variant,
    helperText,
    disabled,
    adornment,
    icon,
    size,
    callBackIcon = '',
    name,
    ...newProps
  } = props;
  const checkVariant = variantList.includes(variant) ? variant : variantList[0];
  const checkType = typeList.includes(type) ? type : typeList[0];
  const checkIcon = iconList.includes(icon) ? icon : null;
  const checkWarningType = warningStyleList.includes(warningType)
    ? warningType
    : warningStyleList[0];
  return (
    <div
      className={`
          ${styles.mainContainer}
          ${styles[checkVariant]}
          ${sizeList[size]}
          ${className ?? ''}`}
    >
      <input
        {...newProps}
        defaultValue={defaultValue}
        disabled={disabled}
        type={checkType}
      />
      {checkIcon && (
        <div
          onClick={callBackIcon ? () => callBackIcon(name) : ''}
          className={styles.icon}
        >
          <span className={styles.btnIcon}>
            {checkIcon === 'BsEye' && <BsEye />}
            {checkIcon === 'BsEyeSlash' && <BsEyeSlash />}
          </span>
        </div>
      )}
      {!!warning && (
        <div className={`${styles.warning} ${warningStyleList[warningType]}`}>
          {warning}
        </div>
      )}
    </div>
  );
};

export default Input;
