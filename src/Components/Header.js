import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/Header.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';
const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          {<Dogs />}
        </Link>
        {data === null ? (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        ) : (
          <Link className={styles.login} to="/conta">
            Minha conta
            <button onClick={userLogout}>Sair</button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
