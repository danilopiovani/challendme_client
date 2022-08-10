import React from 'react';
import { Button } from 'components';
import styles from './styles.module.scss';
import {
  BiCheck,
  BiCog,
  BiX,
  BiRightArrowAlt,
  BiLeftArrowAlt,
  BiPlus,
} from 'react-icons/bi';
const UI_Components = () => {
  const variantList = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'primaryOutline',
    'secondaryOutline',
    'successOutline',
    'dangerOutline',
    'warningOutline',
    'infoOutline',
    'lightOutline',
    'darkOutline',
  ];
  const sizeList = ['sm', 'md', 'lg'];
  const iconList = [
    { name: 'BiCheck', image: <BiCheck /> },
    { name: 'BiCog', image: <BiCog /> },
    { name: 'BiX', image: <BiX /> },
    { name: 'BiRightArrowAlt', image: <BiRightArrowAlt /> },
    { name: 'BiLeftArrowAlt', image: <BiLeftArrowAlt /> },
    { name: 'BiPlus', image: <BiPlus /> },
  ];

  const callBackFk = (index) => {
    alert('clicked', index);
  };
  return (
    <div className={styles.container}>
      <div className={styles.itemWrapper}>
        <h1>Icons</h1>
        <div className={styles.itemContainer}>
          {iconList.map((icon, index) => (
            <div>
              <div>
                {icon.image} <span>{icon.name}</span>{' '}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.itemWrapper}>
        <h1>Buttons</h1>
        {variantList.map((variant, index) => (
          <div key={index}>
            {sizeList.map((size, index) => (
              <Button
                key={index}
                variant={variant}
                size={size}
                active={false}
                icon="BiPlus"
                // iconPosition="iconLeft"
                onClick={callBackFk}
                // disabled={true}
              >
                {variant}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default UI_Components;
