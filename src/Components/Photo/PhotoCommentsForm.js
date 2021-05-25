import React from 'react';
import { COMMENT_POST } from '../../api';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import styles from '../../Styles/PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ single, id, setComments }) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();
  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comments) => {
        return [...comments, json];
      });
    }
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`${styles.form} ${single ? styles.single : ''}`}
      >
        <textarea
          id="comment"
          name="comment"
          placeholder="Comente..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
          className={styles.textarea}
        />
        <button className={styles.button}>{<Enviar />}</button>
      </form>
      {error && <Error error={error} />}
    </>
  );
};

export default PhotoCommentsForm;
