import React from 'react';
import styles from '../../Styles/Button.module.css';
const Button = (props) => {
  return (
    <button {...props} className={styles.button}>
      {props.label}
    </button>
  );
};

export default Button;
