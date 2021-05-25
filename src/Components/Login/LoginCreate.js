import React from 'react';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import { USER_POST } from '../../api';
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();
  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = USER_POST({
      username: username.initialValue,
      password: password.initialValue,
      email: email.initialValue,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.initialValue, password.initialValue);
  }
  return (
    <section className="animeLeft">
      <Head title="Criar Conta" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome de usuário"
          label="Usuário"
          name="username"
          {...username}
        />
        <Input
          type="text"
          placeholder="Email"
          label="Email"
          name="email"
          {...email}
        />
        <Input
          type="password"
          placeholder="Senha"
          label="Senha"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled label="Cadastrando..." />
        ) : (
          <Button label="Cadastrar" />
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
