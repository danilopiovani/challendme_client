import React from 'react';
import styles from './styles.module.scss';
import {
  BiCheck,
  BiCog,
  BiX,
  BiRightArrowAlt,
  BiLeftArrowAlt,
  BiPlus,
} from 'react-icons/bi';

const variantList = [
  'btn--primary',
  'btn--secondary',
  'btn--success',
  'btn--danger',
  'btn--warning',
  'btn--info',
  'btn--light',
  'btn--dark',
  'btn--primary--outline',
  'btn--secondary--outline',
  'btn--success--outline',
  'btn--danger--outline',
  'btn--warning--outline',
  'btn--info--outline',
  'btn--light--outline',
  'btn--dark--outline',
];
const sizeList = ['btn--sm', 'btn--md', 'btn--lg'];
const iconPositionList = ['btn--icon-right', 'btn--icon-left'];
const iconList = [
  'BiCheck',
  'BiCog',
  'BiX',
  'BiRightArrowAlt',
  'BiRightArrowAlt',
  'BiLeftArrowAlt',
  'BiPlus',
];
const Button = (props) => {
  const {
    children,
    icon,
    iconPosition,
    variant,
    buttonStyle,
    size,
    active = true,
    disabled,
    loading,
    onClick,
    stretch,
    className,
    key,
    ...rest
  } = props;
  const checkButtonVariant = variantList.includes(variant)
    ? variant
    : variantList[0];
  const checkButtonSize = sizeList.includes(size) ? size : sizeList[0];
  const checkButtonIconPosition = iconPositionList.includes(iconPosition)
    ? iconPosition
    : iconPositionList[0];
  const checkButtonIcon = iconList.includes(icon) ? icon : null;
  return (
    <button
      className={`${styles.btn} ${styles[checkButtonVariant]} ${
        styles[checkButtonIconPosition]
      } ${active ? styles.active : ''} ${disabled ? styles.btnDisabled : ''} 
        ${stretch ? styles.stretch : ''} ${styles[checkButtonSize]} ${
        className ?? ''
      }`}
      onClick={() => {
        onClick(key);
      }}
    >
      <span className={styles.btnText}>{children}</span>
      {checkButtonIcon && (
        <span className={styles.btnIcon}>
          {checkButtonIcon === 'BiCheck' && <BiCheck />}
          {checkButtonIcon === 'BiCog' && <BiCog />}
          {checkButtonIcon === 'BiX' && <BiX />}
          {checkButtonIcon === 'BiRightArrowAlt' && <BiRightArrowAlt />}
          {checkButtonIcon === 'BiLeftArrowAlt' && <BiLeftArrowAlt />}
          {checkButtonIcon === 'BiPlus' && <BiPlus />}
        </span>
      )}
    </button>
  );
};

export default Button;
