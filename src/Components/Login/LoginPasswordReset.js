import React from 'react';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import { PASSWORD_RESET } from '../../api';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router';
import Head from '../Helper/Head';

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const newPassword = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();
  React.useState(() => {
    const params = new URLSearchParams(`${window.location.search}`);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (newPassword.validate()) {
      const { url, options } = PASSWORD_RESET({
        key,
        login,
        password: newPassword.initialValue,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate('/login');
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Resetar Senha" />
      <h1 className="title">Resete a Senha:</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...newPassword}
        />
        {loading ? (
          <Button label="Mudando..." />
        ) : (
          <Button label="Trocar Senha" />
        )}
      </form>
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordReset;
