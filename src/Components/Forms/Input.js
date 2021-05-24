import React from 'react';
import styles from '../../Styles/Input.module.css';
const Input = ({
  name,
  label,
  type,
  onChange,
  initialValue,
  placeholder,
  onBlur,
  error,
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={label} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className={styles.input}
        value={initialValue}
        onChange={onChange}
        onBlur={onBlur}
      ></input>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
