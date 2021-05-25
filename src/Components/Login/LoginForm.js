import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';
import styles from '../../Styles/LoginForm.module.css';
import stylesBtn from '../../Styles/Button.module.css';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);
  async function handleSubmit(e) {
    e.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.initialValue, password.initialValue);
      username.setInitialValue('');
      password.setInitialValue('');
    }
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          name="username"
          label="Login"
          type="text"
          placeholder="Login"
          {...username}
        />
        <Input
          name="password"
          label="Senha"
          type="password"
          placeholder="Senha"
          {...password}
        />
        {loading ? (
          <Button label="Carregando..." disabled />
        ) : (
          <Button label="Entrar" />
        )}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
