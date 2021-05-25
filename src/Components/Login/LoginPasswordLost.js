import React from 'react';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import { PASSWORD_LOST } from '../../api';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();
  async function handleSubmit(e) {
    e.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.initialValue,
        url: 'http://localhost:3000/login/reset',
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  }
  return (
    <section className="animeLeft">
      <Head title="Perdeu a Senha?" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email/Usuário" name="email" type="text" {...login} />
          {loading ? (
            <Button disabled label="Enviando..." />
          ) : (
            <Button label="Enviar Email" />
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
