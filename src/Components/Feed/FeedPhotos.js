import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import usefetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import styles from '../../Styles/FeedPhotos.module.css';
const FeedPhotos = ({ setInfinite, page, user, setModalPhoto }) => {
  const { data, loading, error, request } = usefetch();
  const total = 6;
  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({
        page,
        total,
        user,
      });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    }
    fetchPhotos();
  }, [setInfinite, request, user, page]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`animeLeft ${styles.feed}`}>
        {data.map((foto) => {
          return (
            <FeedPhotosItem
              key={foto.id}
              photo={foto}
              setModalPhoto={setModalPhoto}
            />
          );
        })}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
