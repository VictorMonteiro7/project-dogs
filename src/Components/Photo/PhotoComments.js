import React from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from '../../Styles/PhotoComments.module.css';
const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => {
    return props.comments;
  });
  const { login } = React.useContext(UserContext);
  const commentsSection = React.useRef(null);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);
  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${props.single ? styles.single : ''}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>
              {comment.comment_author}: <span>{comment.comment_content}</span>
            </b>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm
          single={true}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PhotoComments;
