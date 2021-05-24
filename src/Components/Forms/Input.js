import React from 'react';
import styles from '../../Styles/Input.module.css';
const Input = (props) => {
  const [valor, setValor] = React.useState('');
  function handleChange({ target }) {
    setValor(target.value);
  }
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={props.name}>
        {props.label}
      </label>
      <input
        id={props.name}
        type={props.type}
        placeholder={props.placeholder}
        className={styles.input}
        value={valor}
        onChange={handleChange}
        {...props}
      ></input>
      <p className={styles.error}>Error</p>
    </div>
  );
};

export default Input;
