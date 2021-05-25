import React from 'react';
import styles from '../Styles/Footer.module.css';
import { ReactComponent as DogFooter } from '../Assets/dogs-footer.svg';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <DogFooter />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
