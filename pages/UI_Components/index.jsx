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
  const iconList = [
    'BiCheck',
    'BiCog',
    'BiX',
    'BiRightArrowAlt',
    'BiLeftArrowAlt',
    'BiPlus',
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
              {icon === 'BiCheck' && (
                <div>
                  <BiCheck /> <span>{icon}</span>{' '}
                </div>
              )}
              {icon === 'BiCog' && (
                <div>
                  <BiCog /> <span>{icon}</span>{' '}
                </div>
              )}
              {icon === 'BiX' && (
                <div>
                  <BiX /> <span>{icon}</span>{' '}
                </div>
              )}
              {icon === 'BiRightArrowAlt' && (
                <div>
                  <BiRightArrowAlt /> <span>{icon}</span>{' '}
                </div>
              )}
              {icon === 'BiLeftArrowAlt' && (
                <div>
                  <BiLeftArrowAlt /> <span>{icon}</span>{' '}
                </div>
              )}
              {icon === 'BiPlus' && (
                <div>
                  <BiPlus /> <span>{icon}</span>{' '}
                </div>
              )}
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
                iconPosition="btn--icon-left"
                onClick={callBackFk}
                // disabled={true}
              >
                {variant.substring(5, variant.length).replace('--', '-')}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UI_Components;
