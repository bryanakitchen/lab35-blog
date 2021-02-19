import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/postActions';
import { Link } from 'react-router-dom';

export default function Post({ title, body }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletePost(title));
  };
  
  return (
    <div>
      <Link to={`/posts/${title}`} >
        <h4>{title}</h4>
        <p>{body}</p>
      </Link>
      <button onClick={handleClick} >Delete</button>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};
