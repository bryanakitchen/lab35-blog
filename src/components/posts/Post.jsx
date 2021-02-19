import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../actions/postActions';
import { Link } from 'react-router-dom';
import { getComments } from '../../selectors/commentSelectors';

export default function Post({ title, body, index }) {
  const dispatch = useDispatch();
  // const comments = useSelector(getComments);


  const handleClick = () => {
    dispatch(deletePost(index));

    // for(let i = 0; i < comments.length; i++) {
    //   if(comments[i]) {
    //     dispatch(deleteComment(index, i));
    //   }
    // }
    // dispatch(deleteComment(index, index));
  };
  
  return (
    <div>
      <Link to={`/posts/${index}`} >
        <h4>{title}</h4>
        <p>{body}</p>
      </Link>
      <button onClick={handleClick} >Delete</button>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};
