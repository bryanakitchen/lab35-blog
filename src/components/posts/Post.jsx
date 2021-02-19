import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/postActions';

export default function Post({ title, body }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletePost(title));
  };
  
  return (
    <div>
      <h4>{title}</h4>
      <p>{body}</p>
      <button onClick={handleClick} >Delete</button>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};
