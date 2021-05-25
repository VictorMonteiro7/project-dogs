import React from 'react';
import { Route, Routes } from 'react-router';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordReset from './LoginPasswordReset';
import LoginPasswordLost from './LoginPasswordLost';
import styles from '../../Styles/Login.module.css';
import NotFound from '../NotFound';
import Head from '../Helper/Head';
const Login = () => {
  return (
    <section className={styles.login}>
      <Head title="Login" />
      <div className={styles.forms}>
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="reset" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
