import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  function handleSubmit(e) {
    e.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }
  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input name="username" label="Login" type="text" placeholder="Login" />
        <Input
          name="password"
          label="Senha"
          type="password"
          placeholder="Senha"
        />
        <Button label="Entrar" />
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
