import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import { UserContext } from '../../UserContext';

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
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
      </form>
      {error && <p>{error}</p>}
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
