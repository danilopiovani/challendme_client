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

const variantList = {
  primary: styles.primary,
  secondary: styles.secondary,
  success: styles.success,
  danger: styles.danger,
  warning: styles.warning,
  info: styles.info,
  light: styles.light,
  dark: styles.dark,
  primaryOutline: styles.primaryOutline,
  secondaryOutline: styles.secondaryOutline,
  successOutline: styles.successOutline,
  dangerOutline: styles.dangerOutline,
  warningOutline: styles.warningOutline,
  infoOutline: styles.infoOutline,
  lightOutline: styles.lightOutline,
  darkOutline: styles.darkOutline,
};
const sizeList = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
};
const iconPositionList = {
  iconRight: styles.iconRight,
  iconLeft: styles.iconLeft,
};
const iconList = {
  BiCheck: <BiCheck />,
  BiCog: <BiCog />,
  BiX: <BiX />,
  BiRightArrowAlt: <BiRightArrowAlt />,
  BiLeftArrowAlt: <BiLeftArrowAlt />,
  BiPlus: <BiPlus />,
};
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
  const checkButtonVariant = variantList[variant] || variantList[0];
  const checkButtonSize = sizeList[size] || sizeList[0];
  const checkButtonIconPosition =
    iconPositionList[iconPosition] || iconPositionList[0];
  const checkButtonIcon = iconList[icon] || null;
  return (
    <button
      className={`${
        styles.btn
      } ${checkButtonVariant} ${checkButtonIconPosition} ${
        active ? styles.active : ''
      } ${disabled ? styles.btnDisabled : ''} 
        ${stretch ? styles.stretch : ''} ${checkButtonSize} ${className ?? ''}`}
      onClick={() => {
        onClick(key);
      }}
    >
      <span className={styles.btnText}>{children}</span>
      {checkButtonIcon && (
        <span className={styles.btnIcon}>{checkButtonIcon}</span>
      )}
    </button>
  );
};
export default Button;
