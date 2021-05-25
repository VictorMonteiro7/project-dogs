import React from 'react';
import styles from '../../Styles/UserPhotoPost.module.css';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { PHOTO_POST } from '../../api';
import { useNavigate } from 'react-router';
import Head from '../Helper/Head';
const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});
  const { data, loading, error, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    const dataForm = new FormData();
    dataForm.append('img', img.raw);
    dataForm.append('nome', nome.initialValue);
    dataForm.append('peso', peso.initialValue);
    dataForm.append('idade', idade.initialValue);
    const token = window.localStorage.token;
    const { url, options } = PHOTO_POST(dataForm, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Postar Foto" />
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Nome" name="nome" {...nome} />
        <Input type="text" label="Peso" name="peso" {...peso} />
        <Input type="text" label="Idade" name="idade" {...idade} />
        <input
          className={styles.img}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled label="Enviando..." />
        ) : (
          <Button label="Enviar" />
        )}
      </form>
      <Error error={error} />
      {img.preview && (
        <div
          className={styles.preview}
          style={{ backgroundImage: `url('${img.preview}')` }}
        ></div>
      )}
    </section>
  );
};

export default UserPhotoPost;
